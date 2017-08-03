import React, { Component } from 'react';
import 'css/pc_search_box.scss'
class PCSearchBox extends Component {
  render() {
    return (
      <div className="search-wraper">
        <input type="text" placeholder="大家都在搜：建军90周年阅兵" />
        <div className="search-btn">
          <button>搜索</button>
        </div>
      </div>
    );
  }
}

export default PCSearchBox;
