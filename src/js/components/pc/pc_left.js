import React from 'react';
import logo from 'images/logo.png';
import 'css/pc_left.scss';
class PCLeft extends React.Component {
  constructor() {
    super();
    this.state = {
      navList: ['热点', '体育', '军事', '国内', '国外', '娱乐', '社会', '游戏', '科技', '更多'],
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
        <li key={index}>
          <a
            className={index === this.state.current ? 'selected' : ''}
            onClick={this.handleClick.bind(this,index)}
          >
            {item}
          </a>
        </li>
      );
    });
    return (
      <div>
        <div className="logo">
          <img src={logo} alt="新闻头条" />
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
