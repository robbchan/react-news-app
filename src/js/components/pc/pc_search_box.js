import React, { Component } from 'react';
import 'css/pc/pc_search_box.scss';
import { withRouter } from 'react-router-dom';

class PCSearchBox extends Component {
  constructor() {
    super();
    this.state = {
      keyWords: ''
    };
  }
  handleSubmit(e) {
    e.preventDefault();
    if(this.state.keyWords === ''){
      alert('请输入搜索内容!')
    }else if (this.state.keyWords !== '') {
      this.props.history.push(`/search/${this.state.keyWords}`);
    }
  }
  handleChange(e) {
    this.setState({
      keyWords: e.target.value
    });
  }
  render() {
    return (
      <div className="search-wraper">
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input
            type="text"
            value={this.state.keyWords}
            onChange={this.handleChange.bind(this)}
            placeholder="搜索您想要的新闻："
          />
          <div className="search-btn">
            <input type="submit" value="搜索" required/>
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(PCSearchBox);
