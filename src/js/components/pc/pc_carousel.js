import React, { Component } from 'react';
import 'css/pc_carousel.scss';

class PCCarousel extends Component {
  constructor() {
    super();
    this.state = {
      currentIndex: 0,
      interval: 4000,
      autoplay: true,
      mouseIsOn: false,
      carouselList: []
    };
  }
  getCarouselList() {
    let fetchUrl = `http://route.showapi.com/109-35?page=1&showapi_sign=97005ff454434bbda96dbe7281b5d4cf&showapi_appid=43252&maxResult=20`;
    let fetchOptions = {
      method: 'GET'
    };
    fetch(fetchUrl, fetchOptions)
      .then(response => response.json())
      .then(json => {
        let carouselList = [];
        json.showapi_res_body.pagebean.contentlist.map((item, index) => {
          if (item.havePic) {
            carouselList.push(item);
          }
        });
        carouselList = carouselList.slice(5);
        this.setState({ carouselList });
      })
      .catch(error => {
        console.log(error);
      });
  }
  componentWillMount() {
    //挂在前获取轮播图的数据
    this.getCarouselList();
  }
  componentWillUnmount() {
    //组件卸载后清除定时器
    clearInterval(this.intervalId);
  }
  componentDidMount() {
    //挂载后通过改变state中的currentIndex进行轮播
    this.intervalId = setInterval(() => {
      let i = this.state.currentIndex;
      if (this.state.mouseIsOn) return;
      this.setState({
        currentIndex:
          i >= 0 && i < this.state.carouselList.length - 1 ? (i += 1) : (i = 0)
      });
    }, this.state.interval);
  }
  handleTabEnter(index) {
    this.setState({ currentIndex: index });
    this.setState({
      mouseIsOn: true
    });
  }
  handleTabLeave(index) {
    this.setState({ currentIndex: index });
    this.setState({
      mouseIsOn: false
    });
  }
  render() {
    let carousel = this.state.carouselList.map((item, index) => {
      return (
        <li
          key={index}
          className="carousel-item"
          id={this.state.currentIndex === index ? 'show' : ''}
        >
          <img src={item.imageurls[0].url} alt={item.title} />
          <p>
            {item.title}
          </p>
        </li>
      );
    });
    let carouselTab = this.state.carouselList.map((item, index) => {
      let newsChannel = item.channelName.slice(0, 2);
      return (
        <li
          key={index}
          className={this.state.currentIndex === index ? 'tabActive' : ''}
          onMouseEnter={this.handleTabEnter.bind(this, index)}
          onMouseLeave={this.handleTabLeave.bind(this, index)}
        >
          {newsChannel}
        </li>
      );
    });
    return (
      <div >
      {/*做一个判断，判断是否存在List*/}
        {this.state.carouselList === []
          ? null
          : (<div className="carousel">
              <ul>
                {carousel}
              </ul>
              <ul className="carousel-tab">
                {carouselTab}
              </ul>
            </div>)}
      </div>
    );
  }
}

export default PCCarousel;
