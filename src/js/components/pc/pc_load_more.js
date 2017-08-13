import React, { Component } from 'react';
import 'css/pc/pc_load_more.scss';
class PcLoadMore extends Component {
  render() {
    return (
      <div className="pc-load-more" ref="pcLoadMore">
        加载更多
        <span className="iconfont icon-loading" />
      </div>
    );
  }
  componentDidMount() {
    const pcLoadMore = this.refs.pcLoadMore;
    const loading = this.props.loading;
    var timer;
    //监听滚动事件中计时器回调
    function callback() {
      //距离顶部的距离
      const top = pcLoadMore.getBoundingClientRect().top;
      //视口高度
      const windowHeight = document.documentElement.clientHeight;
      if (top && top < windowHeight) {
        loading();
      }
    }
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

export default PcLoadMore;
