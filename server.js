const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

// 静态文件服务
app.use(express.static(path.join(__dirname)));

// 根路径重定向到route.html
app.get('/', (req, res) => {
  res.redirect('/route.html');
});

// 404处理
app.use((req, res) => {
  res.status(404).send('404 Not Found');
});

// 启动服务器
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
