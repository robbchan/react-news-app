import React, { Component } from 'react';
import 'css/mobile/mobile_swipe.scss';
import ReactSwipe from 'react-swipe';

class MobileSwipe extends Component {
  constructor() {
    super();
    this.state = {
      sliderList: []
    };
  }
  componentDidMount() {
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
        sliderList = sliderList.slice(0, 6);
        return this.setState({ sliderList });
      })
      .catch(error => {
        console.log(error);
      });
  }
  render() {
    let sliderList = 1;
    return (
      <ReactSwipe className="slider" swipeOptions={{ continuous: true }}>
        {/*轮播组件*/}
        <div>
          {sliderList}
          <img src="http://k.sinaimg.cn/n/news/transform/20170807/9yxk-fyitpmh3113319.jpg/w710h400z1l1t1d88.jpg" />
        </div>
        <div>
          <img src="http://k.sinaimg.cn/n/news/transform/20170807/9yxk-fyitpmh3113319.jpg/w710h400z1l1t1d88.jpg" />
        </div>
        <div>
          <img src="http://k.sinaimg.cn/n/news/transform/20170807/9yxk-fyitpmh3113319.jpg/w710h400z1l1t1d88.jpg" />
        </div>
        <div>
          <img src="http://k.sinaimg.cn/n/news/transform/20170807/9yxk-fyitpmh3113319.jpg/w710h400z1l1t1d88.jpg" />
        </div>
      </ReactSwipe>
    );
  }
}

export default MobileSwipe;
