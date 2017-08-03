import React, { Component } from 'react';
import 'css/pc_advertisement.scss'
class PCAdvertisement extends Component {
  render() {
    return (
      <div className="ad-box">
        <a href='#' className='ad-wrap'>
          <img src='https://p3.pstatp.com/origin/33a1000ed281e399df61' alt='广告' />
          <h2>苏宁未来电视4K视代，还您世界本来色彩！</h2>
          <span className="ad-name">苏宁家电精选</span>
          <span className="ad">广告</span>
        </a>
      </div>
    );
  }
}

export default PCAdvertisement;