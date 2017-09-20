# 写在前面
为什么我要用React.js写这个多端适配的新闻WebApp呢?一方面是当时我在学习React.js，而我个人感觉学习一个框架最好的方法先通读文档，再而去实践所学内容。另一方面考虑到之前个人对移动web开发还有所欠缺，因此才选择做这个多端适配单页面WebApp。

最早打算引入阿里ant-design库的，但是考虑到如果引入组件库，那项目就变得太简单了，因此，本项目几乎所有UI组件都是自己写的。

由于起初写这个项目时没有考虑到Redux的使用，并在写这个项目的过程，并没有发现需要Redux才能解决的问题，因此后续过程中也没有使用Redux。

## 技术栈
React+ React-Router + webpack + ES6 + fetch + Sass

## 插件介绍
`react-responsive`：根据设备的宽度按需加载指定的组件
`whatwg-fetch`：fetch()是客户端基于Promise的HTTP请求库

# 在线预览

[项目预览](https://kmac007.github.io/react-news-app/#/)
可以在谷歌开发者工具中选择不同的设备进行预览

## 效果展示
PC:
<div>
![pc](https://kmac007.b0.upaiyun.com/react-news-app/pc-index.gif)
</div>

iPhone6:
<div align="center">
![iphone6](https://kmac007.b0.upaiyun.com/react-news-app/iphone6-index.gif)
</div>

iPad:
<div align="center">
![ipad](https://kmac007.b0.upaiyun.com/react-news-app/ipad-index.gif)
</div>

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
    │  ├─mobile // 移动端相关组件样式
    │  └─pc // PC端相关组件的样式
    ├─images // 静态图片资源
    └─js
        └─components //组件
            ├─mobile //移动端组件
            └─pc //PC端组件
```

## 项目使用
```
git clone git@github.com:kmac007/react-news-app.git

cd react-news-app

npm install

npm start
```

# 总结
用React感受最深的是几乎不用手动操作DOM，基本是通过setState的方式更改视图。如果非要操作真实的DOM的话可以绑定一个ref属性，在通过this.refs来选取真实DOM。另外写React组件则使用的是ES6 class的语法，非常的简单易读。做完这个项目，收获最大的是熟悉了React.js的使用，setState机制、父子通信、生命周期等等。

## setState
React通过this.state来访问state，通过this.setState()方法来更新state。而当this.setState()方法被调用的时候，React会重新调用render方法来重新渲染UI。

### setState异步更新
setState方法通过一个队列机制实现state更新，当执行setState的时候，会将需要更新的state合并之后放入state队列，而不会立刻更新。而如果直接修改state如`this.state.key = 111`这种方式并不能触发组件的render方法。

### 循环setState
一般在如下几个钩子函数中setState：
```js
componentWillMount
compomentDidMount
componentWillReceiveProps
```
如果在componentDidUpdate中setState的话会一直触发组件的render方法，这是我们不想要的。

## 路由传参
在这个项目中，我需要根据不同的传递参数来发起请求，从而获取相应的数据。路由传参如：
```js
<Route path="/details/:newsId" component={MobileDetails} />
```
newId定义传递的参数。
通过
```js
this.props.match.params.newsId
```
即可获得对应的参数

## 路由跳转
除了`<link to="">`可以进行路由跳转外，在这个项目中，我还需要调用函数的方式进行路由跳转。

首先需要从`react-router-dom`引入`withRouter`方法。组件export时导出的是经`withRouter`处理的组件，如：
```js
export default withRouter(MobileHeader);
```
在组件中可以通过：
```
this.props.history.push('/search')
```
这个方式轻松的进行路由跳转。

## 父子通信
父组件通过props的方式向子组件传递信息。

如果要子组件向父组件传递消息，则需要在父组件中定义一个方法，将方法通过props传递到子组件中，子组件通过调用传入的这个方法，传递参数。即可实现子向父通信。如：
```
//子组件
class Child extends Component {
  render(){
    return (
      <div>
	    请输入邮箱：<input onChange={this.props.handleEmail}/>
	  </div>)
  }
}

```
```
//父组件
class Child extends Component {
  constructor(){
    super()
    this.state = {
      email: ''
    }
  }
  handleEmail(e){
    console.log(`email: ${e.target.value}`)
  }
  render(){
    return (
      <Child name="email" handleEmail={this.handleEmail.bind(this)}/>
      )
  }
}
handleEmail()
```

