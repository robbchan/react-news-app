import React from 'react'
import 'css/mobile/mobile_header.scss'
class MobileHeader extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      isSearching: false
    }
  }
  render(){
    return (
      <header className="header">
        <h1 className='mobile-logo'>新闻头条</h1>
        <div className="search-box">
          <span>
            <i className="iconfont icon-search3"></i>
          </span>
        </div>
      </header>
    )
  }
}

export default MobileHeader