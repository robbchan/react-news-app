import React, { Component } from 'react';
import MobileCarousel from './mobile_carousel';

class MobileSlider extends Component {
  constructor() {
    super();
    this.state = {
      sliderList: [],
      time: 4000
    };
  }
  componentDidMount() {
    //获取轮播图列表
    this.getSliderList();
  }
  getSliderList() {
    let fetchUrl = `http://route.showapi.com/109-35?page=1&showapi_sign=97005ff454434bbda96dbe7281b5d4cf&showapi_appid=43252&maxResult=20`;
    let fetchOptions = {
      method: 'GET'
    };
    fetch(fetchUrl, fetchOptions)
      .then(response => response.json())
      .then(json => {
        let sliderList = [];
        json.showapi_res_body.pagebean.contentlist.map((item, index) => {
          return item.havePic ? sliderList.push(item) : null;
        });
        var newsSliderList = sliderList.slice(0, 5);
        return this.setState({ sliderList: newsSliderList });
      })
      .catch(error => {
        console.log(error);
      });
  }
  render() {
    return this.state.sliderList.length === 0
      ? <div></div>
      : <div>
          <MobileCarousel
            slides={this.state.sliderList}
            speed={this.state.time}
            isContinuous={true}
            isAutoSlide={true}
          />
        </div>;
  }
}

export default MobileSlider;
