import React, { Component } from 'react';
import 'css/mobile/mobile_tool_bar.scss';

let cb;
let scrolldelay;
class MobileToolBar extends Component {
  constructor() {
    super();
    this.state = {
      showBackToTop: false
    };
  }
  componentDidMount() {
    var timer;
    var that = this;
    function callback() {
      if (window.pageYOffset >= 100 && !that.state.showBackToTop) {
        that.setState({
          showBackToTop: true
        });
      } else if (window.pageYOffset < 100 && that.state.showBackToTop) {
        that.setState({
          showBackToTop: false
        });
      }
    }
    //监听滚动事件并节流
    cb = function() {
      if (timer) {
        clearTimeout(timer);
      }
      timer = setTimeout(callback, 50);
    };
    window.addEventListener('scroll', cb);
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', cb);
  }
  render() {
    return (
      <div>
        {this.state.showBackToTop
          ? <div className="mobile-back-to-top">
              <div
                className="iconfont icon-open"
                onClick={this.handleBackTop.bind(this)}
              />
            </div>
          : null}
      </div>
    );
  }
  handleBackTop() {
    window.scrollBy(0, -100);
    scrolldelay = setTimeout(() => {
      this.handleBackTop();
    }, 15);
    if (document.documentElement.scrollTop === 0) {
      clearTimeout(scrolldelay);
    }
  }
}

export default MobileToolBar;
