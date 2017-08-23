import React from 'react';
import 'css/mobile/mobile_header.scss';
import { Link, withRouter } from 'react-router-dom';
class MobileHeader extends React.Component {
  constructor(){
    super()
    this.state={
      currentPage: ''
    }
  }
  handleClick(e) {
    this.props.history.push('/search');
  }
  render() {
    return (
      <header className="header">
        <div>
        <h1 className="mobile-logo">
          <Link to="/">新闻头条</Link>
        </h1>
        <span className="mobile-map">Map</span>
        </div>
        <div className="search-box">
          <span onClick={this.handleClick.bind(this)}>
            <i className="iconfont icon-search3" />
          </span>
        </div>
      </header>
    );
  }
}

export default withRouter(MobileHeader);
