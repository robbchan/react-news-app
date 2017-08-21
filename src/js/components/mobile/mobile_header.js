import React from 'react'
import 'css/mobile/mobile_header.scss'
import { Link } from 'react-router-dom'
class MobileHeader extends React.Component{
  handleClick(e){
    this.props.handleSearching(e)
  }
  render(){
    return (
      <header className="header">
        <h1 className='mobile-logo'><Link to='/'>新闻头条</Link></h1>
        <div className="search-box">
          <span onClick={this.handleClick.bind(this)}>
            <i className="iconfont icon-search3"></i>
          </span>
        </div>
      </header>
    )
  }
}

export default MobileHeader