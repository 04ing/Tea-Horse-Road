const express = require('express');
const path = require('path');
const fs = require('fs');
const multer = require('multer');

const app = express();
const port = process.env.PORT || 3000;

// 创建上传目录
const uploadDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

// 配置 multer 存储
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
  }
});

const upload = multer({ storage: storage });

// 静态文件服务
app.use(express.static(path.join(__dirname)));
// 解析JSON请求体
app.use(express.json());
// 解析URL编码的请求体
app.use(express.urlencoded({ extended: true }));

// 添加CORS中间件
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }
  
  next();
});

// 根路径重定向到route.html
app.get('/', (req, res) => {
  res.redirect('/route.html');
});

// 用户注册API
app.post('/api/register', (req, res) => {
  try {
    const { username, email, password } = req.body;
    
    // 验证请求数据
    if (!username || !email || !password) {
      return res.status(400).json({ error: '请填写所有必填字段' });
    }
    
    // 验证邮箱格式
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: '请输入有效的邮箱地址' });
    }
    
    // 验证密码长度
    if (password.length < 6) {
      return res.status(400).json({ error: '密码长度至少为6位' });
    }
    
    // 读取用户数据
    const usersData = JSON.parse(fs.readFileSync(path.join(__dirname, 'data', 'users.json'), 'utf8'));
    
    // 检查邮箱是否已存在
    const existingUser = usersData.users.find(user => user.email === email);
    if (existingUser) {
      return res.status(400).json({ error: '邮箱已存在' });
    }
    
    // 创建新用户
    const newUser = {
      id: 'user-' + Date.now(),
      username: username,
      email: email,
      password: password,
      role: 'user'
    };
    
    // 保存用户到JSON文件
    usersData.users.push(newUser);
    fs.writeFileSync(path.join(__dirname, 'data', 'users.json'), JSON.stringify(usersData, null, 2));
    
    // 生成模拟token
    const token = 'mock-token-' + Date.now();
    
    res.status(200).json({
      success: true,
      token: token,
      user: newUser
    });
  } catch (error) {
    console.error('注册错误:', error);
    res.status(500).json({ error: '注册失败，请稍后重试' });
  }
});

// 用户登录API
app.post('/api/login', (req, res) => {
  try {
    const { email, password } = req.body;
    
    // 验证请求数据
    if (!email || !password) {
      return res.status(400).json({ error: '请填写所有必填字段' });
    }
    
    // 验证邮箱格式
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: '请输入有效的邮箱地址' });
    }
    
    // 读取用户数据
    const usersData = JSON.parse(fs.readFileSync(path.join(__dirname, 'data', 'users.json'), 'utf8'));
    
    // 查找用户
    const user = usersData.users.find(user => user.email === email);
    if (!user) {
      return res.status(400).json({ error: '邮箱或密码错误' });
    }
    
    // 验证密码
    if (user.password !== password) {
      return res.status(400).json({ error: '邮箱或密码错误' });
    }
    
    // 生成模拟token
    const token = 'mock-token-' + Date.now();
    
    res.status(200).json({
      success: true,
      token: token,
      user: user
    });
  } catch (error) {
    console.error('登录错误:', error);
    res.status(500).json({ error: '登录失败，请稍后重试' });
  }
});

// 获取所有用户API（可选）
app.get('/api/users', (req, res) => {
  try {
    const usersData = JSON.parse(fs.readFileSync(path.join(__dirname, 'data', 'users.json'), 'utf8'));
    res.status(200).json(usersData);
  } catch (error) {
    console.error('获取用户列表错误:', error);
    res.status(500).json({ error: '获取用户列表失败' });
  }
});

// 文件上传API
app.post('/api/upload', upload.single('fileUpload'), (req, res) => {
  try {
    const { fileType, fileTitle, fileDescription, uploaderName, uploaderEmail } = req.body;
    const file = req.file;
    
    // 验证请求数据
    if (!fileType || !fileTitle || !fileDescription || !file) {
      return res.status(400).json({ error: '请填写所有必填字段并上传文件' });
    }
    
    // 创建上传记录
    const uploadRecord = {
      id: 'upload-' + Date.now(),
      fileType: fileType,
      fileTitle: fileTitle,
      fileDescription: fileDescription,
      fileName: file.filename,
      filePath: file.path,
      uploaderName: uploaderName || '',
      uploaderEmail: uploaderEmail || '',
      uploadDate: new Date().toISOString()
    };
    
    // 读取现有上传记录
    let uploadsData = [];
    const uploadsFile = path.join(__dirname, 'data', 'uploads.json');
    
    if (fs.existsSync(uploadsFile)) {
      try {
        uploadsData = JSON.parse(fs.readFileSync(uploadsFile, 'utf8'));
      } catch (error) {
        console.error('读取上传记录文件错误:', error);
        uploadsData = [];
      }
    }
    
    // 添加新上传记录
    uploadsData.push(uploadRecord);
    
    // 保存上传记录
    fs.writeFileSync(uploadsFile, JSON.stringify(uploadsData, null, 2));
    
    res.status(200).json({
      success: true,
      message: '上传成功！您的资料将在审核后添加到数据集中',
      data: uploadRecord
    });
  } catch (error) {
    console.error('上传错误:', error);
    res.status(500).json({ error: '上传失败，请稍后重试' });
  }
});

// 404处理
app.use((req, res) => {
  res.status(404).send('404 Not Found');
});

// 启动服务器
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
