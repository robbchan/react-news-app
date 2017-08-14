import React, { Component } from 'react';
import 'css/mobile/mobile_swipe.scss';

class MobileSwipe extends Component {
  constructor() {
    super();
    this.state = {
      sliderList: [],
      currentPage: 0,
      startX: 0
    };
  }
  componentDidMount() {
    this.getSliderList();
    window.sliderIntervalId = setInterval(() => {
      if (this.state.currentPage < 4) {
        this.setState({
          currentPage: (this.state.currentPage += 1)
        });
      } else if (this.state.currentPage === 4) {
        this.setState({
          currentPage: 0
        });
      }
    }, 4000);
  }
  //绑定滑动事件
  handleTouchStart(e) {
    var touchTimer
    var startX = e.targetTouches[0].pageX
    this.setState({
      startX: e.targetTouches[0].pageX
    })
    console.log(this.state.startX)
  }
  handleTouchMove(e) {
    var moveTimer
    var moveX = e.targetTouches[0].pageX
    if(moveTimer){
      clearTimeout(moveTimer)
    }
    moveTimer = setTimeout(()=> {
      // console.log(moveX-this.state.startX)
    }, 50);

  }
  componentWillUnmount() {
    clearInterval(window.sliderIntervalId);
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
    let slider;
    if (this.state.sliderList.length !== 0) {
      slider = this.state.sliderList.map((item, index) => {
        return (
          <li key={index} className="slider-item">
            <img src={item.imageurls[0].url} alt={item.title} />
            <h2 className="slider-item-title" />
          </li>
        );
      });
    }
    let style = { left: `-${this.state.currentPage}00%` };
    return (
      <div className="slider-box clearfix">
        <ul
          className="slider-container clearfix"
          style={style}
          onTouchMove={this.handleTouchMove.bind(this)}
          onTouchStart={this.handleTouchStart.bind(this)}
        >
          {slider}
        </ul>
      </div>
    );
  }
}

export default MobileSwipe;
