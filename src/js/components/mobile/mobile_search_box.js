import React, { Component } from 'react';
import 'css/mobile/mobile_search_box.scss';
class MobileSearchBox extends Component {
  handleSubmit(e){
    e.preventDefault()
  }
  render() {
    return (
        <form className="mobile-search-box" onSubmit={this.handleSubmit.bind(this)}>
          <input type="text" id="mobile-search" />
          <div className='mobile-search-btn'>
            搜索
          </div>
        </form>
    );
  }
}

export default MobileSearchBox;
