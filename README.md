# 茶马古道历史文化项目

## 项目简介

茶马古道历史文化项目是一个综合性的历史文化展示平台，旨在通过现代技术手段展现茶马古道的历史变迁、文化内涵和现实意义。项目融合了地图可视化、3D模型展示、历史文化介绍等多种功能，为用户提供沉浸式的茶马古道历史文化体验。

## 项目特点

- **多维度展示**：结合2D地图和3D模型，从不同维度展示茶马古道
- **历史对比**：包含北宋、明朝、清朝三个朝代的茶马古道对比分析
- **交互体验**：支持3D模型交互和地图操作，增强用户体验
- **响应式设计**：适配不同设备尺寸，提供良好的移动端体验
- **丰富的历史文化信息**：包含详细的历史文化介绍和分析

## 项目结构

```
├── .idea/             # IDE配置文件
├── .trae/             # Trae IDE配置
├── .vscode/           # VS Code配置
├── Build/             # SuperMap3D构建文件
├── css/               # 样式文件
├── dist/              # 构建输出
├── js/                # JavaScript脚本
├── json/              # 地图数据文件
├── libs/              # 第三方库
├── locales/           # 多语言文件
├── model/             # 3D模型文件
├── node_modules/      # Node.js依赖
├── src/               # 源代码
├── .gitignore         # Git忽略文件
├── README.md          # 项目说明文档
├── chamagudao.mp4     # 项目视频
├── comparison.html    # 朝代对比页面
├── historical-culture.html # 历史文化页面
├── index.html         # 首页重定向
├── model.html         # 3D模型展示页面
├── package.json       # Node.js配置
├── package-lock.json  # 依赖版本锁定
├── road.html          # 路线页面
├── route.html         # 主页面
├── style.css          # 主样式文件
├── tour.mp4           # 旅游视频
└── tourism_significance.html # 旅游意义页面
```

## 技术栈

- **前端框架**：HTML5, CSS3, JavaScript
- **地图库**：Leaflet, SuperMap3D
- **3D渲染**：WebGL (via SuperMap3D)
- **数据可视化**：ECharts
- **响应式设计**：CSS Flexbox, Media Queries

## 如何使用

### 本地运行

1. **克隆仓库**
   ```bash
   git clone https://github.com/04ing/Tea-Horse-Road.git
   ```

2. **启动本地服务器**
   ```bash
   # 使用Python 3
   python -m http.server 8000
   
   # 或使用Node.js
   npx serve
   ```

3. **访问项目**
   打开浏览器，访问 `http://localhost:8000/route.html`

### 主要页面

- **route.html**：主页面，展示茶马古道地图和主要功能
- **model.html**：3D模型展示页面，展示茶马古道相关3D模型
- **historical-culture.html**：历史文化页面，介绍茶马古道的历史文化
- **comparison.html**：朝代对比页面，对比不同朝代茶马古道的变化
- **tourism_significance.html**：旅游意义页面，介绍茶马古道的现代旅游价值

## 功能说明

### 1. 地图展示

- **2D地图**：使用Leaflet展示茶马古道的路线和城市分布
- **3D模型**：使用SuperMap3D展示茶马古道相关的3D模型
- **历史地图**：展示不同朝代的历史地图，进行时空对比

### 2. 数据分析

- **朝代对比**：对比北宋、明朝、清朝三个朝代的茶马古道
- **城市分布**：分析不同朝代茶马古道沿线城市的分布变化
- **路线长度**：对比不同朝代茶马古道的路线长度
- **贸易量分析**：分析茶马古道的贸易量变化

### 3. 历史文化

- **历史沿革**：介绍茶马古道的历史发展过程
- **文化内涵**：探讨茶马古道的文化意义和价值
- **人物故事**：讲述与茶马古道相关的历史人物和故事
- **现代意义**：分析茶马古道的现代旅游和文化价值

## 数据说明

项目使用的主要数据包括：

- **地图数据**：不同朝代的城市和路线数据（存储在json/目录）
- **3D模型**：茶马古道相关的3D模型（存储在model/目录）
- **历史资料**：基于历史文献整理的茶马古道历史资料

## 贡献指南

欢迎对项目进行贡献！如果您有任何建议或改进，请：

1. Fork本仓库
2. 创建您的特性分支 (`git checkout -b feature/amazing-feature`)
3. 提交您的更改 (`git commit -m 'Add some amazing feature'`)
4. 推送到分支 (`git push origin feature/amazing-feature`)
5. 打开一个Pull Request

## 许可证

本项目采用MIT许可证 - 详见LICENSE文件

## 联系方式

如果您对项目有任何问题或建议，请通过以下方式联系：

- GitHub: [04ing](https://github.com/04ing)
- 项目地址: [https://github.com/04ing/Tea-Horse-Road](https://github.com/04ing/Tea-Horse-Road)
- GitHub Pages: [https://04ing.github.io/Tea-Horse-Road](https://04ing.github.io/Tea-Horse-Road)

## 致谢

- 感谢SuperMap提供的3D地图技术支持
- 感谢Leaflet团队提供的开源地图库
- 感谢所有为茶马古道历史研究做出贡献的学者和专家
- 感谢项目开发过程中提供帮助的所有人员

---

**茶马古道历史文化项目** - 探索千年商贸文化之路
