import React, { Component } from 'react';
import 'css/pc/pc_tool_bar.scss';

class PcToolBar extends Component {
  constructor() {
    super();
    this.state = {};
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

        <div className="pc-back-to-top">
          <div
            className="iconfont icon-open"
            onClick={this.handleBackTop.bind(this)}
          />
        </div>
      </div>
    );
  }
  handleRefresh() {
    /*
     * 遇到一个问题：我如何在点击这个刷新按钮时通知PcNewsItem组件刷新呢
     * 我目前的想法是用redux，通过点击store.dispatch分发action给PcNewsItem
     */
  }
  handleBackTop() {
    window.scrollTo(0, 0);
  }
}

export default PcToolBar;
