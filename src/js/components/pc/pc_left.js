import React from 'react';
import 'css/pc_left.scss';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
class PCLeft extends React.Component {
  constructor() {
    super();
    this.state = {
      navList: ['热点', '体育', '军事', '国内', '国外', '娱乐', '社会', '游戏', '科技', '更多'],
      navUrl: ['/','sports','military','domestic','international','entertainment','society','games','technology','more'],
      current: 0
    };
  }
  shouldComponentUpdate(nextProps, nextState) {
    //优化点击当前current不需要重新render
    return !(nextState.current === this.state.current);
  }
  handleClick(i) {
    this.setState({ current: i });
  }
  render() {
    let nav = this.state.navList.map((item, index) => {
      return (
        <Link to={`${this.state.navUrl[index]}`} key={index}>
          <li
            className={index === this.state.current ? 'selected' : ''}
            onClick={this.handleClick.bind(this, index)}
          >
            {item}
          </li>
        </Link>
      );
    });
    return (
      <div className="left-wrapper">
        <div className="logo">
          <span>新闻头条</span>
        </div>
        <ul className="nav">
          {nav}
        </ul>
      </div>
    );
  }
}

export default PCLeft;
