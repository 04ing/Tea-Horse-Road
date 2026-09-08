/**
 * 茶马古道项目自动部署脚本
 *
 * 流程:
 *   1. 将本地代码提交并推送到 GitHub (https://github.com/04ing/Tea-Horse-Road)
 *   2. 通过 SSH (ssh2 库, 密码认证, 全自动无需手动输入) 连接服务器,
 *      同步最新代码 (自动保留服务器上的用户/上传数据), 安装依赖并重启 PM2 服务
 *
 * 使用方式:
 *   node deploy.js              # 完整部署 (GitHub + 服务器)
 *   node deploy.js --git        # 仅部署到 GitHub
 *   node deploy.js --server     # 仅部署到服务器
 *   node deploy.js --no-commit  # 推送代码但不自动提交本地改动
 *   node deploy.js -y           # 跳过确认提示
 *   node deploy.js --help       # 查看帮助
 *
 * SSH 密码来源 (按优先级):
 *   1. 命令行参数 --password=xxx
 *   2. 环境变量 DEPLOY_SSH_PASSWORD
 *   3. 本地文件 deploy.auth.json ({"password": "..."} , 已被 .gitignore 忽略, 不会推送到 GitHub)
 *   4. 都没有时, 运行时提示输入
 *
 * 服务器配置: deploy.config.json (同目录下, 可推送到 GitHub, 不含密码)
 */

'use strict';

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');
const readline = require('readline');

// ====== 颜色输出 ======
const C = {
  reset: '\x1b[0m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  cyan: '\x1b[36m',
  gray: '\x1b[90m',
  bold: '\x1b[1m'
};

function log(msg = '') { console.log(msg); }
function logStep(msg) {
  console.log('\n' + C.cyan + C.bold + '▶ ' + msg + C.reset);
  console.log(C.gray + '─'.repeat(50) + C.reset);
}
function logOk(msg)   { console.log(C.green + '  ✓ ' + msg + C.reset); }
function logInfo(msg) { console.log(C.blue + '  ℹ ' + msg + C.reset); }
function logWarn(msg) { console.log(C.yellow + '  ! ' + msg + C.reset); }
function logErr(msg)  { console.log(C.red + '  ✗ ' + msg + C.reset); }

// ====== 配置 ======
function loadConfig() {
  const configPath = path.join(__dirname, 'deploy.config.json');
  if (!fs.existsSync(configPath)) {
    logErr('配置文件 deploy.config.json 不存在');
    process.exit(1);
  }
  const cfg = JSON.parse(fs.readFileSync(configPath, 'utf8'));

  // 环境变量覆盖
  if (process.env.DEPLOY_SSH_PORT) cfg.ssh.port = parseInt(process.env.DEPLOY_SSH_PORT, 10);
  return cfg;
}

// 加载 SSH 密码
function loadPassword(opts) {
  if (opts.password) return opts.password;
  if (process.env.DEPLOY_SSH_PASSWORD) return process.env.DEPLOY_SSH_PASSWORD;

  const authPath = path.join(__dirname, 'deploy.auth.json');
  if (fs.existsSync(authPath)) {
    try {
      const auth = JSON.parse(fs.readFileSync(authPath, 'utf8'));
      if (auth.password) return auth.password;
    } catch (e) { /* 忽略格式错误, 继续走交互输入 */ }
  }
  return null; // 稍后交互输入
}

function parseArgs() {
  const args = process.argv.slice(2);
  const opts = {
    help: args.includes('--help') || args.includes('-h'),
    gitOnly: args.includes('--git'),
    serverOnly: args.includes('--server'),
    noCommit: args.includes('--no-commit'),
    yes: args.includes('--yes') || args.includes('-y'),
    password: null
  };
  for (const a of args) {
    if (a.startsWith('--password=')) opts.password = a.slice('--password='.length);
  }
  return opts;
}

function showHelp() {
  console.log(`
${C.bold}茶马古道部署脚本${C.reset}

${C.cyan}用法:${C.reset}
  node deploy.js [选项]

${C.cyan}选项:${C.reset}
  --git              仅部署到 GitHub (提交并推送)
  --server           仅部署到服务器 (SSH 全自动)
  --no-commit        推送代码但不自动提交本地改动
  --password=xxx     指定 SSH 密码 (优先级最高)
  -y, --yes          跳过确认提示
  -h, --help         显示帮助

${C.cyan}示例:${C.reset}
  node deploy.js                  # 完整部署
  node deploy.js --git            # 仅推送到 GitHub
  node deploy.js --server         # 仅更新服务器
  node deploy.js --no-commit -y   # 不提交改动直接部署

${C.cyan}配置:${C.reset}
  服务器信息: deploy.config.json
  SSH 密码:   deploy.auth.json (本地私有文件, 不会被推送)
`);
}

// ====== 工具函数 ======
function run(cmd, options = {}) {
  return execSync(cmd, {
    stdio: 'pipe',
    encoding: 'utf8',
    cwd: __dirname,
    ...options
  }).toString().trim();
}

function runInteractive(cmd) {
  execSync(cmd, { stdio: 'inherit', cwd: __dirname });
}

async function confirm(question) {
  const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
  return new Promise((resolve) => {
    rl.question(question, (answer) => { rl.close(); resolve(/^y(es)?$/i.test(answer.trim())); });
  });
}

// 确保 ssh2 依赖存在 (首次运行自动安装, 不写入 package.json)
function ensureSsh2() {
  try {
    require.resolve('ssh2');
  } catch (e) {
    logInfo('首次运行: 正在安装 ssh2 依赖 (仅本地, 不影响项目依赖)...');
    execSync('npm install ssh2 --no-save --no-audit --no-fund', { cwd: __dirname, stdio: 'inherit' });
  }
}

// ====== SSH 连接与命令执行 ======
function sshConnect(cfg, password) {
  const { Client } = require('ssh2');
  const { host, port, user } = cfg.ssh;
  return new Promise((resolve, reject) => {
    const conn = new Client();
    conn.on('ready', () => resolve(conn));
    conn.on('error', (err) => {
      reject(new Error(
        err.level === 'authentication'
          ? 'SSH 认证失败: 用户名或密码错误'
          : `SSH 连接失败: ${err.message}`
      ));
    });
    conn.connect({
      host,
      port,
      username: user,
      password,
      readyTimeout: 20000,
      keepaliveInterval: 10000
    });
  });
}

// 执行单条命令, 返回 { code, out, errOut }
function sshExec(conn, cmd, timeout = 120000) {
  return new Promise((resolve, reject) => {
    conn.exec(cmd, (err, stream) => {
      if (err) return reject(err);
      let out = '', errOut = '';
      const timer = setTimeout(() => {
        stream.close();
        reject(new Error('SSH 命令超时: ' + cmd.slice(0, 60)));
      }, timeout);
      stream.on('close', (code) => { clearTimeout(timer); resolve({ code, out, errOut }); });
      stream.on('data', (d) => { out += d.toString(); });
      stream.stderr.on('data', (d) => { errOut += d.toString(); });
    });
  });
}

// 通过 stdin 执行多行脚本 (避免转义问题)
function sshRunScript(conn, script, timeout = 600000) {
  return new Promise((resolve, reject) => {
    conn.exec('bash -s', (err, stream) => {
      if (err) return reject(err);
      let out = '', errOut = '';
      const timer = setTimeout(() => {
        stream.close();
        reject(new Error('SSH 脚本执行超时'));
      }, timeout);
      stream.on('close', (code) => { clearTimeout(timer); resolve({ code, out, errOut }); });
      stream.on('data', (d) => { out += d.toString(); process.stdout.write(C.gray + d.toString() + C.reset); });
      stream.stderr.on('data', (d) => { errOut += d.toString(); });
      stream.end(script);
    });
  });
}

// ====== GitHub 部署 ======
async function deployToGitHub(cfg, opts) {
  logStep('部署到 GitHub');

  const { remote, branch, autoCommit } = cfg.git;

  // 1. 检查 git
  try { run('git --version'); } catch (e) { logErr('未检测到 git, 请先安装 Git'); throw e; }

  // 2. 当前分支
  const currentBranch = run('git rev-parse --abbrev-ref HEAD');
  logInfo(`当前分支: ${currentBranch} (目标分支: ${branch})`);

  // 3. 检查远程
  const remotes = run('git remote').split('\n');
  if (!remotes.includes(remote)) {
    logErr(`远程 "${remote}" 不存在, 可用远程: ${remotes.join(', ')}`);
    throw new Error(`Remote ${remote} not found`);
  }

  // 4. 工作区状态
  const status = run('git status --porcelain');
  const hasChanges = status.length > 0;

  if (hasChanges && autoCommit && !opts.noCommit) {
    log('  本地有未提交的改动:', C.yellow);
    status.split('\n').forEach((line) => log('    ' + line, C.gray));
    run('git add -A');
    const ts = new Date().toISOString().replace('T', ' ').slice(0, 19);
    const msg = `auto: deploy at ${ts}`;
    try {
      run(`git commit -m "${msg}"`);
      logOk(`已提交: "${msg}"`);
    } catch (e) {
      logWarn('提交失败或无改动可提交');
    }
  } else if (hasChanges && opts.noCommit) {
    logWarn('--no-commit: 跳过自动提交, 只推送已提交内容');
  } else if (hasChanges) {
    logWarn('有未提交改动, 但已配置跳过 (使用 --no-commit 或检查 git.autoCommit)');
  } else {
    logOk('工作区干净, 无需提交');
  }

  // 5. 推送
  logInfo(`推送到 ${remote}/${branch} ...`);
  try {
    runInteractive(`git push ${remote} ${branch}`);
    logOk('已推送到 GitHub');
  } catch (e) {
    logErr('推送到 GitHub 失败 (请检查凭据/网络)');
    throw e;
  }

  try { logInfo('仓库地址: ' + run(`git remote get-url ${remote}`)); } catch (e) { /* 忽略 */ }
}

// ====== 服务器部署 ======
async function deployToServer(cfg, opts) {
  logStep('部署到服务器');

  const { host, port, user, deployPath, appName } = cfg.ssh;
  const { installDeps } = cfg.server;
  const branch = cfg.git.branch;
  const repoUrl = run(`git remote get-url ${cfg.git.remote}`);

  logInfo(`目标: ${user}@${host}:${port}`);
  logInfo(`部署路径: ${deployPath}`);

  const password = loadPassword(opts);
  let conn;
  try {
    if (password) {
      conn = await sshConnect(cfg, password);
    } else {
      const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
      const input = await new Promise((res) => rl.question(`请输入 ${user}@${host} 的 SSH 密码: `, res));
      rl.close();
      conn = await sshConnect(cfg, input.trim());
    }
    logOk('SSH 连接成功');
  } catch (e) {
    logErr(e.message);
    throw e;
  }

  try {
    // 1. 检查服务器上是否已存在项目
    const probe = await sshExec(conn, `[ -d ${deployPath}/.git ] && echo YES || echo NO`);
    const exists = probe.out.trim() === 'YES';

    if (exists) {
      // ===== 更新部署 =====
      logInfo('服务器上已存在项目, 执行更新...');
      const script = `
echo "==> 同步最新代码 (branch: ${branch})"
cd ${deployPath} || exit 1

# 备份服务器上的运行时数据 (用户/上传记录), 避免被代码同步覆盖
mkdir -p .runtime-backup
cp -f data/users.json .runtime-backup/ 2>/dev/null
cp -f data/uploads.json .runtime-backup/ 2>/dev/null

git fetch origin ${branch} || { echo "GIT_FETCH_FAILED"; exit 1; }
git reset --hard origin/${branch} || { echo "GIT_RESET_FAILED"; exit 1; }

# 还原运行时数据
cp -f .runtime-backup/users.json data/ 2>/dev/null
cp -f .runtime-backup/uploads.json data/ 2>/dev/null
echo "OK_CODE_SYNCED"
`;
      const r = await sshRunScript(conn, script);
      if (r.code !== 0) {
        logErr('代码同步失败 (详见上方日志)');
        throw new Error('Server code sync failed');
      }
      logOk('代码同步完成 (已保留服务器用户/上传数据)');
    } else {
      // ===== 首次部署: 克隆 =====
      logInfo('服务器上不存在项目, 执行首次克隆...');
      const parentDir = deployPath.replace(/\/[^/]+$/, '');
      const script = `
mkdir -p ${parentDir}
${fs.existsSync(deployPath) ? `rmdir ${deployPath} 2>/dev/null; true` : `rm -rf ${deployPath}`}
git clone --branch ${branch} ${repoUrl} ${deployPath} || { echo "GIT_CLONE_FAILED"; exit 1; }
echo "OK_CLONED"
`;
      const r = await sshRunScript(conn, script);
      if (r.code !== 0) {
        logErr('克隆失败: 请确认仓库是公开的, 或在服务器上配置 Git 凭据');
        throw new Error('Server clone failed');
      }
      logOk('克隆完成');
    }

    // 2. 安装依赖
    if (installDeps) {
      logInfo('安装依赖 (npm install --omit=dev) ...');
      const script = `
cd ${deployPath}
if ! npm install --omit=dev --no-audit --no-fund > /tmp/thr-npm.log 2>&1; then
  echo "NPM_INSTALL_FAILED"
  tail -n 25 /tmp/thr-npm.log
  exit 1
fi
tail -n 2 /tmp/thr-npm.log
`;
      const r = await sshRunScript(conn, script);
      if (r.code !== 0) { logErr('依赖安装失败'); throw new Error('npm install failed'); }
      logOk('依赖安装完成');
    } else {
      logInfo('跳过依赖安装 (server.installDeps = false)');
    }

    // 3. 重启服务 (PM2)
    logInfo(`重启服务 (PM2: ${appName}) ...`);
    const script = `
cd ${deployPath}
if pm2 restart ${appName} --update-env > /tmp/thr-pm2.log 2>&1; then
  echo "PM2_RESTARTED"
else
  pm2 delete ${appName} > /dev/null 2>&1
  if pm2 start server.js --name ${appName} > /tmp/thr-pm2.log 2>&1; then
    echo "PM2_STARTED"
  else
    cat /tmp/thr-pm2.log
    exit 1
  fi
fi
pm2 save > /dev/null 2>&1
`;
    const r = await sshRunScript(conn, script);
    if (r.code !== 0) { logErr('PM2 启动失败 (详见上方日志, 检查服务器是否安装 pm2)'); throw new Error('pm2 failed'); }
    logOk(r.out.includes('PM2_STARTED') ? '服务已首次启动' : '服务已重启');

    // 4. 验证
    logInfo('验证部署状态...');
    const list = await sshExec(conn, 'pm2 jlist 2>/dev/null || echo []');
    let appStatus = 'unknown';
    try {
      const apps = JSON.parse(list.out.trim());
      const app = apps.find((a) => a.name === appName);
      if (app) appStatus = app.pm2_env && app.pm2_env.status ? app.pm2_env.status : 'unknown';
    } catch (e) { /* 忽略解析失败 */ }

    const http = await sshExec(conn, 'curl -s -m 5 -o /dev/null -w "%{http_code}" http://127.0.0.1:3000/ 2>/dev/null || echo FAIL');
    const httpCode = http.out.trim();

    if (appStatus === 'online') {
      logOk(`PM2 状态: online`);
    } else {
      logWarn(`PM2 状态: ${appStatus}`);
    }
    if (httpCode === '200' || httpCode === '302') {
      logOk(`本机 HTTP 探测: ${httpCode} (服务正常)`);
    } else {
      logWarn(`本机 HTTP 探测: ${httpCode} (端口 3000 可能未就绪或被防火墙拦截)`);
    }
  } finally {
    conn.end();
  }

  logInfo(`访问地址: http://${host}:3000`);
}

// ====== 主流程 ======
async function main() {
  const opts = parseArgs();
  if (opts.help) { showHelp(); return; }

  const cfg = loadConfig();
  ensureSsh2();

  log(`${C.bold}${C.green}╔══════════════════════════════════════╗${C.reset}`);
  log(`${C.bold}${C.green}║   茶马古道项目部署工具 v2.0           ║${C.reset}`);
  log(`${C.bold}${C.green}╚══════════════════════════════════════╝${C.reset}`);

  const doGit = !opts.serverOnly;
  const doServer = !opts.gitOnly;

  logInfo(`部署模式: ${doGit ? 'GitHub ' : ''}${doServer ? (doGit ? '+ 服务器' : '服务器') : ''}`);
  logInfo(`目标服务器: ${cfg.ssh.user}@${cfg.ssh.host}:${cfg.ssh.port}`);

  if (!opts.yes) {
    const okToGo = await confirm('\n确认开始部署? [y/N] ');
    if (!okToGo) { logWarn('已取消部署'); process.exit(0); }
  }

  const startTime = Date.now();

  try {
    if (doGit) await deployToGitHub(cfg, opts);
    if (doServer) await deployToServer(cfg, opts);

    const elapsed = ((Date.now() - startTime) / 1000).toFixed(1);
    console.log('');
    log(`${C.bold}${C.green}✓ 部署成功完成! (耗时 ${elapsed}s)${C.reset}`);
    console.log('');
    logInfo('GitHub : https://github.com/04ing/Tea-Horse-Road');
    logInfo(`服务器 : http://${cfg.ssh.host}:3000`);
  } catch (e) {
    const elapsed = ((Date.now() - startTime) / 1000).toFixed(1);
    console.log('');
    log(`${C.bold}${C.red}✗ 部署失败! (耗时 ${elapsed}s)${C.reset}`);
    console.log('');
    logErr(e.message || '未知错误');
    process.exit(1);
  }
}

main().catch((err) => {
  logErr('未捕获的错误: ' + (err && err.message ? err.message : err));
  process.exit(1);
});
