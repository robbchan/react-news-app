import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import 'css/mobile/mobile_search.scss';

class MobileSearch extends Component {
  constructor() {
    super();
    this.state = {
      keywordsArr: [
        '建军',
        '长途漫游',
        '印度',
        '骑车',
        '内马尔',
        '南非球场',
        '英超',
        '美军',
        '台风',
        '鲁尼',
        '卢卡库',
        '特朗普',
        '普京',
        '小程序',
        '绝地求生大逃杀'
      ],
      keyword: '',
      isKeywordsShow: true
    };
    this.handleClick = this.handleClick.bind(this)
    this.handleSubmit=this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleBack = this.handleBack.bind(this)
  }
  handleSubmit(e) {
    e.preventDefault();
    if (this.state.keyWords === '') {
      return;
    } else if (this.state.keyWords !== '') {
      this.props.history.push(`/search/${this.state.keyWords}`);
      this.setState({
        isKeywordsShow: false
      });
    }
  }
  handleChange(e) {
    this.setState({
      keyWords: e.target.value
    });
  }
  handleClick(e){
    this.props.history.push(`/search/${e.target.innerText}`);
    this.setState({
      isKeywordsShow: false
    })
  }
  handleBack(){
    this.props.history.goBack()
  }
  render() {
    let keywordsList = this.state.keywordsArr.map((item, index) => {
      return (
        <li key={index}
          className="mobile-keywords-list"
          onClick={this.handleClick}
        >
          {item}
        </li>
      );
    });
    return (
      <div className="mobile-search-container">
        <header className="mobile-search-header">
          <span className="moblie-back-to-pre" onClick={this.handleBack}>
            <i className="iconfont icon-open" />
          </span>
          <h1 className="mobile-search-title">搜索</h1>
        </header>
        <section className="mobile-search-input">
          <i className="iconfont icon-search3" />
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              placeholder="请输入搜索关键词"
              className="input-text"
              onChange={this.handleChange}
            />
          </form>
        </section>
        {this.state.isKeywordsShow
          ? <ul className="keywords-container">
              {keywordsList}
            </ul>
          : null}
      </div>
    );
  }
}

export default withRouter(MobileSearch);
