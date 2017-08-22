import React, { Component } from 'react';
import 'css/mobile/mobile_load_more.scss';
class MobileLoadMore extends Component {
  render() {
    console.log(this.props.channel, this.props.keyword);
    return this.props.keyword
      ? <div className="mobile-load-more" ref="mobileLoadMore">
          {this.props.newsList.length === 0
            ? <span>很抱歉，找不到结果</span>
            : <span>没有更多啦</span>}
          <span className="iconfont icon-cannotfound" />
        </div>
      : <div className="mobile-load-more" ref="mobileLoadMore">
          <span>加载中</span>
          <span className="iconfont icon-loading" />
        </div>;
  }
  componentDidMount() {
    const mobileLoadMore = this.refs.mobileLoadMore;
    const loading = this.props.loading;
    var timer;
    //监听滚动事件中计时器回调
    function callback() {
      //距离顶部的距离
      const top = mobileLoadMore.getBoundingClientRect().top;
      //视口高度
      const windowHeight = document.documentElement.clientHeight;
      if (top && top < windowHeight) {
        loading();
      }
    }
    //监听滚动事件并对函数进行节流
    window.addEventListener(
      'scroll',
      function() {
        if (timer) {
          clearTimeout(timer);
        }
        timer = setTimeout(callback, 100);
      },
      false
    );
  }
}

export default MobileLoadMore;
