import React, { Component } from 'react';
import MediaQuery from 'react-responsive';
import PCLeft from './pc/pc_left.js';
import PCMiddle from './pc/pc_middle';
import PCRight from './pc/pc_right';
import MobileHeader from './mobile/mobile_header';
import MobileNav from './mobile/mobile_nav';
import MobileNewsItem from './mobile/mobile_news_item';
import { Row, Col } from 'antd';
class App extends Component {
  render() {
    return (
      <div>
        {/*PC展示*/}
        <MediaQuery query="(min-device-width: 1224px)">
          <Row>
            <Col span={2} />
            <Col span={3}>
              <PCLeft />
            </Col>
            <Col span={12}>
              <PCMiddle />
            </Col>
            <Col span={5}>
              <PCRight />
            </Col>
            <Col span={2} />
          </Row>
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
