import React, { Component } from 'react';
import 'css/pc/pc_tool_bar.scss';

let cb;
let scrolldelay;
class PcToolBar extends Component {
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
      <div className="pc-tool-bar">
        <div className="pc-refresh">
          <div
            className="iconfont icon-refresh"
            onClick={this.handleRefresh.bind(this)}
          />
        </div>
        {this.state.showBackToTop
          ? <div className="pc-back-to-top">
              <div
                className="iconfont icon-open"
                onClick={this.handleBackTop.bind(this)}
              />
            </div>
          : null}
      </div>
    );
  }
  handleRefresh() {
    window.location.reload();
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

export default PcToolBar;
