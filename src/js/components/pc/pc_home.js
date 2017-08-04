import React, { Component } from 'react';
import 'css/pc_home.scss';
import Carousel from './pc_carousel';
import PCNewsItem from './pc_news_item'
class PCHome extends Component {
  render() {
    return (
      <div className="home-wrap">
        <Carousel/>
        <PCNewsItem/>
      </div>
    );
  }
}

export default PCHome;