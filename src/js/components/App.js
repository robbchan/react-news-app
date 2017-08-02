import React, { Component } from 'react';
import MediaQuery from 'react-responsive';
import PCLeft from './pc/pc_left.js';
import PCMiddle from './pc/pc_middle';
import PCRight from './pc/pc_right';
import MobileHeader from './mobile/mobile_header';
import MobileNav from './mobile/mobile_nav';
import MobileNewsItem from './mobile/mobile_news_item';
import 'normalize.css'
import 'css/reset.css'
import 'css/app.scss'
class App extends Component {
  render() {
    return (
      <div>
        {/*PC展示*/}
        <MediaQuery query="(min-device-width: 1224px)">
          <div id='main-wrapper'>
            <PCLeft/>
            <PCMiddle/>
            <PCRight/>
          </div>
        </MediaQuery>
        {/*移动端展示*/}
        <MediaQuery query="(max-device-width: 1224px)">
          <MobileHeader />
          <MobileNav />
          <MobileNewsItem />
        </MediaQuery>
      </div>
    );
  }
}

export default App;
