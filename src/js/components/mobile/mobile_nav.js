import React from 'react';
import 'css/mobile/mobile_nav.scss';
class MobileNav extends React.Component {
  constructor() {
    super();
    this.showMore = this.showMore.bind(this);
    this.state = {
      isShow: false
    };
  }
  showMore() {
    this.state.isShow
      ? this.setState({
          isShow: false
        })
      : this.setState({
          isShow: true
        });
  }
  render() {
    return (
      <div className="mobile-nav">
        <ul className="nav-list-top">
          <li>热点</li>
          <li>体育</li>
          <li>军事</li>
          <li>国内</li>
          <li onClick={this.showMore}>
            更多{' '}
            <i
              className={
                this.state.isShow
                  ? 'iconfont icon-open'
                  : 'iconfont icon-open flip'
              }
            />
          </li>
        </ul>
        <ul
          className={
            this.state.isShow ? 'nav-list-bottom' : 'nav-list-bottom-hidden'
          }
        >
          <li>国际</li>
          <li>娱乐</li>
          <li>社会</li>
          <li>游戏</li>
          <li>科技</li>
        </ul>
      </div>
    );
  }
}

export default MobileNav;
