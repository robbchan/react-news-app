# 写在前面
为什么我要用React.js写这个多端适配的新闻WebApp呢?一方面是当时我在学习React.js，而我个人感觉学习一个框架最好的方法先通读文档，再而去实践所学内容，不动手很难完全吸收文档中的知识。另一方面考虑到之前个人对移动web开发还有所欠缺，因此才选择做这个多端适配单页面WebApp。

由于起初写这个项目时没有考虑到Redux的使用，并在写这个项目的过程，并没有发现需要Redux才能解决的问题，因此后续过程中也没有使用Redux。

## 技术栈
react + react-router + webpack + ES6 + fetch + sass

## 插件介绍

# 在线预览
[项目预览](https://kmac007.github.io/news-app-by-reactjs/#/)
可以在谷歌开发者工具中选择不同的设备进行预览

## 效果展示
![pc](./src/images/pc-index.gif)
![iphone6](./src/images/iphone6-index.gif)
![ipad](./src/images/ipad-index.gif)
## 数据接口
由于是新闻站点，涉及到新闻的内容量太多，考虑到如果本地mock数据，数据量过大以及工作重复且繁琐，因此本项目采用[易源数据(showAPI)](https://www.showapi.com/api/lookPoint/109)的新闻API接口,由于服务器设置了'Access-Control-Allow-Origin: *'，因此不用考虑跨域问题。

## 目录结构
```
├─build  //经webpack打包后的文件
│  └─static
│      ├─css
│      └─js
├─config  //webpack相关配置
│  └─jest
├─public  //开发环境的index.html
├─scripts
└─src  //开发环境
    ├─css
    │  ├─mobile
    │  └─pc
    ├─images
    └─js
        └─components //模块
            ├─mobile //移动端模块
            └─pc //PC端模块
```

## 项目使用
```
git clone git@github.com:kmac007/news-app-by-reactjs.git

cd news-app-by-reactjs

npm install

npm start
```

# 遇到的问题