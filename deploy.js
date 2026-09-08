/**
 * 茶马古道项目部署脚本
 *
 * 功能:
 *   1. 将本地代码提交并推送到 GitHub (https://github.com/04ing/Tea-Horse-Road)
 *   2. 通过 SSH 登录到服务器 47.103.29.77，拉取最新代码并重启服务
 *
 * 使用方式:
 *   node deploy.js              # 完整部署（GitHub + 服务器）
 *   node deploy.js --git        # 仅部署到 GitHub
 *   node deploy.js --server     # 仅部署到服务器
 *   node deploy.js --no-commit  # 推送但不自动提交本地改动
 *   node deploy.js --help       # 查看帮助
 *
 * 配置文件: deploy.config.json (同目录下)
 *   - ssh.host        服务器 IP
 *   - ssh.port        SSH 端口
 *   - ssh.user        SSH 用户名
 *   - ssh.deployPath  服务器上项目部署目录
 *   - ssh.appName     PM2 进程名称
 *   - git.remote      Git 远程名称
 *   - git.branch      推送分支
 *   - git.autoCommit  是否自动提交本地改动
 *
 * 注意: 敏感信息（如 SSH 密码/密钥路径）请通过环境变量传入:
 *   - DEPLOY_SSH_KEY      SSH 私钥路径 (可选)
 *   - DEPLOY_SSH_PASSWORD SSH 密码 (可选, 不推荐明文)
 *   - DEPLOY_SSH_PORT     覆盖配置文件中的端口
 */

'use strict';

const { execSync, spawn } = require('child_process');
const fs = require('fs');
const path = require('path');
const readline = require('readline');

// ====== 颜色输出 ======
const COLORS = {
  reset: '\x1b[0m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  cyan: '\x1b[36m',
  gray: '\x1b[90m',
  bold: '\x1b[1m'
};

function log(msg, color = '') {
  const c = COLORS[color] || '';
  console.log(`${c}${msg}${COLORS.reset}`);
}

function logStep(msg) {
  console.log('');
  log('▶ ' + msg, 'cyan' + COLORS.bold);
  console.log('─'.repeat(50), 'gray');
}

function logOk(msg) {
  log('  ✓ ' + msg, 'green');
}

function logInfo(msg) {
  log('  ℹ ' + msg, 'blue');
}

function logWarn(msg) {
  log('  ! ' + msg, 'yellow');
}

function logErr(msg) {
  log('  ✗ ' + msg, 'red');
}

// ====== 工具函数 ======
function loadConfig() {
  const configPath = path.join(__dirname, 'deploy.config.json');
  if (!fs.existsSync(configPath)) {
    logErr('配置文件 deploy.config.json 不存在');
    logInfo('请参考 deploy.config.json 创建配置文件');
    process.exit(1);
  }
  const raw = fs.readFileSync(configPath, 'utf8');
  const cfg = JSON.parse(raw);

  // 环境变量覆盖
  if (process.env.DEPLOY_SSH_PORT) cfg.ssh.port = parseInt(process.env.DEPLOY_SSH_PORT, 10);
  if (process.env.DEPLOY_SSH_KEY) cfg.ssh.privateKey = process.env.DEPLOY_SSH_KEY;

  return cfg;
}

function parseArgs() {
  const args = process.argv.slice(2);
  return {
    help: args.includes('--help') || args.includes('-h'),
    gitOnly: args.includes('--git'),
    serverOnly: args.includes('--server'),
    noCommit: args.includes('--no-commit'),
    yes: args.includes('--yes') || args.includes('-y')
  };
}

function showHelp() {
  console.log(`
${COLORS.bold}茶马古道部署脚本${COLORS.reset}

${COLORS.cyan}用法:${COLORS.reset}
  node deploy.js [选项]

${COLORS.cyan}选项:${COLORS.reset}
  --git         仅部署到 GitHub (提交并推送)
  --server      仅部署到服务器 (SSH 拉取并重启)
  --no-commit   推送代码但不自动提交本地改动
  -y, --yes     跳过确认提示
  -h, --help    显示帮助

${COLORS.cyan}示例:${COLORS.reset}
  node deploy.js                  # 完整部署
  node deploy.js --git             # 仅推送到 GitHub
  node deploy.js --server         # 仅更新服务器
  node deploy.js --no-commit -y    # 不提交改动，直接推送

${COLORS.cyan}配置:${COLORS.reset}
  编辑 deploy.config.json 修改服务器和 Git 配置

${COLORS.cyan}环境变量:${COLORS.reset}
  DEPLOY_SSH_KEY       SSH 私钥路径
  DEPLOY_SSH_PASSWORD  SSH 密码
  DEPLOY_SSH_PORT      SSH 端口覆盖
`);
}

function run(cmd, options = {}) {
  logInfo(`$ ${cmd}`);
  return execSync(cmd, {
    stdio: 'pipe',
    encoding: 'utf8',
    cwd: __dirname,
    ...options
  }).toString().trim();
}

function runInteractive(cmd, options = {}) {
  // 继承 stdio 以便用户可以输入凭据
  logInfo(`$ ${cmd}`);
  execSync(cmd, {
    stdio: 'inherit',
    cwd: __dirname,
    ...options
  });
}

async function confirm(question) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  return new Promise((resolve) => {
    rl.question(question, (answer) => {
      rl.close();
      resolve(/^y(es)?$/i.test(answer.trim()));
    });
  });
}

// ====== Git 部署 ======
async function deployToGitHub(cfg, opts) {
  logStep('部署到 GitHub');

  const { remote, branch, autoCommit, commitMessage } = cfg.git;

  // 1. 检查 git 是否可用
  try {
    run('git --version');
  } catch (e) {
    logErr('未检测到 git，请先安装 Git');
    throw e;
  }

  // 2. 检查当前分支
  let currentBranch;
  try {
    currentBranch = run('git rev-parse --abbrev-ref HEAD');
  } catch (e) {
    logErr('当前目录不是 Git 仓库');
    throw e;
  }
  logInfo(`当前分支: ${currentBranch}`);

  // 3. 检查远程
  try {
    const remotes = run('git remote');
    if (!remotes.split('\n').includes(remote)) {
      logErr(`远程 "${remote}" 不存在`);
      logInfo(`可用远程: ${remotes.replace(/\n/g, ', ')}`);
      throw new Error(`Remote ${remote} not found`);
    }
  } catch (e) {
    throw e;
  }

  // 4. 检查工作区状态
  let status;
  try {
    status = run('git status --porcelain');
  } catch (e) {
    throw e;
  }

  const hasChanges = status.length > 0;

  if (hasChanges && autoCommit && !opts.noCommit) {
    log('本地有未提交的改动:', 'yellow');
    status.split('\n').forEach((line) => {
      log('    ' + line, 'gray');
    });

    // 暂存所有改动（包括未跟踪文件）
    try {
      run('git add -A');
      logOk('已暂存所有改动');
    } catch (e) {
      logErr('暂存文件失败');
      throw e;
    }

    // 生成提交信息
    const now = new Date();
    const ts = now.toISOString().replace('T', ' ').slice(0, 19);
    const msg = (commitMessage || 'auto: deploy at {time}').replace('{time}', ts);

    try {
      run(`git commit -m "${msg}"`);
      logOk(`已提交: "${msg}"`);
    } catch (e) {
      // 提交可能因为没有改动而失败
      logWarn('提交失败或无改动可提交');
    }
  } else if (hasChanges && opts.noCommit) {
    logWarn('检测到 --no-commit，跳过自动提交');
    logInfo('将只推送已提交的内容');
  } else if (hasChanges) {
    logWarn('检测到本地改动但 autoCommit=false，请在配置中开启 git.autoCommit');
    const ok = await confirm('  是否要现在提交并推送? [y/N] ');
    if (ok) {
      run('git add -A');
      const ts = new Date().toISOString().replace('T', ' ').slice(0, 19);
      const msg = `auto: deploy at ${ts}`;
      run(`git commit -m "${msg}"`);
      logOk('已提交');
    } else {
      logWarn('跳过提交');
    }
  } else {
    logOk('工作区干净，无需提交');
  }

  // 5. 拉取远程最新代码（避免推送冲突）
  logInfo(`拉取 ${remote}/${branch} ...`);
  try {
    run(`git pull ${remote} ${branch} --rebase`);
    logOk('拉取完成');
  } catch (e) {
    logWarn('拉取远程代码失败，可能有冲突需手动处理');
    logWarn('继续尝试推送...');
  }

  // 6. 推送到 GitHub
  logInfo(`推送到 ${remote}/${branch} ...`);
  try {
    runInteractive(`git push ${remote} ${branch}`);
    logOk('已推送到 GitHub');
  } catch (e) {
    logErr('推送到 GitHub 失败');
    throw e;
  }

  // 7. 显示远程地址
  try {
    const url = run(`git remote get-url ${remote}`);
    logInfo(`仓库地址: ${url}`);
  } catch (e) {
    // 忽略
  }
}

// ====== 服务器部署 ======
async function deployToServer(cfg, opts) {
  logStep('部署到服务器');

  const { host, port, user, deployPath, appName } = cfg.ssh;
  const { usePm2, installDeps } = cfg.server;

  logInfo(`目标: ${user}@${host}:${port}`);
  logInfo(`部署路径: ${deployPath}`);

  // 构造 SSH 命令
  const sshKeyOpt = cfg.ssh.privateKey ? `-i "${cfg.ssh.privateKey}"` : '';

  // 在服务器上执行的命令序列
  const remoteCommands = [
    `cd ${deployPath}`,
    `echo "==> 拉取最新代码"`,
    `git pull origin ${cfg.git.branch} 2>&1 || git pull ${cfg.git.remote} ${cfg.git.branch} 2>&1`,
    installDeps ? `echo "==> 安装依赖" && npm install --production 2>&1` : `echo "==> 跳过依赖安装"`,
    usePm2
      ? `echo "==> 重启 PM2 进程 ${appName}" && pm2 restart ${appName} 2>&1 || (pm2 start server.js --name ${appName} && pm2 save)`
      : `echo "==> 重启 Node 进程" && (pkill -f "node server.js" 2>/dev/null; nohup node server.js > /dev/null 2>&1 &)`,
    `echo "==> 部署完成"`
  ].join(' && ');

  // 在服务器上执行的完整 SSH 命令
  const sshCmd = `ssh ${sshKeyOpt} -p ${port} ${user}@${host} '${remoteCommands.replace(/'/g, "'\\''")}'`;

  logInfo('正在通过 SSH 连接服务器并执行部署...');
  log('  如果需要输入密码，请在终端中输入', 'gray');

  try {
    runInteractive(sshCmd);
    logOk('服务器部署完成');
  } catch (e) {
    logErr('SSH 部署失败');
    logWarn('可能的原因:');
    log('    1. SSH 密钥未配置或密码错误', 'gray');
    log('    2. 服务器上的部署目录路径不正确', 'gray');
    log('    3. 服务器上未安装 git / pm2', 'gray');
    log('    4. 网络连接问题', 'gray');
    throw e;
  }

  // 验证部署
  logInfo('验证部署状态...');
  const verifyCmd = `ssh ${sshKeyOpt} -p ${port} ${user}@${host} 'pm2 list 2>/dev/null | grep ${appName} || echo "PM2 进程未找到"'`;
  try {
    const result = execSync(verifyCmd, { stdio: 'pipe', encoding: 'utf8' }).toString().trim();
    if (result.includes('online')) {
      logOk(`应用 ${appName} 运行中 (online)`);
    } else if (result.includes('未找到')) {
      logWarn('PM2 中未找到该应用，可能需要手动启动');
    } else {
      logInfo('PM2 状态: ' + result);
    }
  } catch (e) {
    logWarn('无法自动验证部署状态，请手动检查');
  }

  log('');
  logInfo(`访问地址: http://${host}:3000`);
}

// ====== 主流程 ======
async function main() {
  const opts = parseArgs();

  if (opts.help) {
    showHelp();
    return;
  }

  const cfg = loadConfig();

  log(`${COLORS.bold}${COLORS.green}╔══════════════════════════════════════╗${COLORS.reset}`);
  log(`${COLORS.bold}${COLORS.green}║   茶马古道项目部署工具 v1.0           ║${COLORS.reset}`);
  log(`${COLORS.bold}${COLORS.green}╚══════════════════════════════════════╝${COLORS.reset}`);

  // 部署模式
  const doGit = !opts.serverOnly;
  const doServer = !opts.gitOnly;

  logInfo(`部署模式: ${doGit ? 'GitHub ' : ''}${doServer ? '+ 服务器' : ''}`);
  logInfo(`目标服务器: ${cfg.ssh.user}@${cfg.ssh.host}:${cfg.ssh.port}`);

  // 确认
  if (!opts.yes) {
    const ok = await confirm('\n确认开始部署? [y/N] ');
    if (!ok) {
      logWarn('已取消部署');
      process.exit(0);
    }
  }

  const startTime = Date.now();

  try {
    // 步骤 1: GitHub
    if (doGit) {
      await deployToGitHub(cfg, opts);
    }

    // 步骤 2: 服务器
    if (doServer) {
      await deployToServer(cfg, opts);
    }

    const elapsed = ((Date.now() - startTime) / 1000).toFixed(1);
    console.log('');
    log(`${COLORS.bold}${COLORS.green}✓ 部署成功完成! (耗时 ${elapsed}s)${COLORS.reset}`);
    console.log('');
    logInfo(`GitHub:  https://github.com/04ing/Tea-Horse-Road`);
    logInfo(`服务器: http://${cfg.ssh.host}:3000`);

  } catch (e) {
    const elapsed = ((Date.now() - startTime) / 1000).toFixed(1);
    console.log('');
    log(`${COLORS.bold}${COLORS.red}✗ 部署失败! (耗时 ${elapsed}s)${COLORS.reset}`);
    console.log('');
    logErr(e.message || '未知错误');
    process.exit(1);
  }
}

main().catch((err) => {
  logErr('未捕获的错误: ' + (err.message || err));
  process.exit(1);
});
