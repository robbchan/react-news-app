import React from 'react';
import 'css/mobile/mobile_nav.scss';
import { Link,withRouter } from 'react-router-dom';
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
          <li>
            <Link to="/">首页</Link>
          </li>
          <li>
            <Link to="/channel/sports">体育</Link>
          </li>
          <li>
            <Link to="/channel/military">军事</Link>
          </li>
          <li>
            <Link to="/channel/domestic">国内</Link>
          </li>
          <li onClick={this.showMore}>
            更多
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
          <li><Link to="/channel/international">国际</Link></li>
          <li><Link to="/channel/entertainment">娱乐</Link></li>
          <li><Link to="/channel/society">社会</Link></li>
          <li><Link to="/channel/games">游戏</Link></li>
          <li><Link to="/channel/technology">科技</Link></li>
        </ul>
      </div>
    );
  }
}

export default withRouter(MobileNav);
