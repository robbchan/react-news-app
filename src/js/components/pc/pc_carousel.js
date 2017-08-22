import React, { Component } from 'react';
import 'css/pc/pc_carousel.scss';
import { Link } from 'react-router-dom';
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
    let fetchUrl = `https://route.showapi.com/109-35?page=1&showapi_sign=97005ff454434bbda96dbe7281b5d4cf&showapi_appid=43252&maxResult=20`;
    let fetchOptions = {
      method: 'GET'
    };
    fetch(fetchUrl, fetchOptions)
      .then(response => response.json())
      .then(json => {
        let carouselList = [];
        json.showapi_res_body.pagebean.contentlist.map((item, index) => {
          return item.havePic ? carouselList.push(item) : null;
        });
        carouselList = carouselList.slice(0, 6);
        return this.setState({ carouselList });
      })
      .catch(error => {
        console.log(error);
      });
  }
  componentWillUnmount() {
    //组件卸载后清除定时器
    clearInterval(window.intervalId);
  }
  componentDidMount() {
    //获取轮播图的数据
    this.getCarouselList();
    //挂载后通过改变state中的currentIndex进行轮播
    window.intervalId = setInterval(() => {
      let i = this.state.currentIndex;
      if (this.state.mouseIsOn) return;
      this.setState({
        currentIndex:
          i >= 0 && i < this.state.carouselList.length - 1 ? (i += 1) : (i = 0)
      });
    }, this.state.interval);
  }
  componentWillReceiveProps() {
    this.getCarouselList();
  }
  handleEnter(index) {
    this.setState({ currentIndex: index });
    this.setState({
      mouseIsOn: true
    });
  }
  handleLeave(index) {
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
          onMouseEnter = {this.handleEnter.bind(this,index)}
          onMouseLeave = {this.handleLeave.bind(this,index)}
          id={this.state.currentIndex === index ? 'show' : ''}
        >
          <Link to={`/details/${item.id}`}>
            <img src={item.imageurls[0].url.slice(5)} alt={item.title} />
            <p>
              {item.title}
            </p>
          </Link>
        </li>
      );
    });
    let carouselTab = this.state.carouselList.map((item, index) => {
      let newsChannel = item.channelName.slice(0, 2);
      return (
        <li
          key={index}
          className={this.state.currentIndex === index ? 'tabActive' : ''}
          onMouseEnter={this.handleEnter.bind(this, index)}
          onMouseLeave={this.handleLeave.bind(this, index)}
        >
          {newsChannel}
        </li>
      );
    });
    return (
      <div>
        {/*做一个判断，判断是否存在List*/}
        {this.state.carouselList === []
          ? null
          : <div className="carousel">
              <ul className = 'carousel-list'>
                {carousel}
              </ul>
              <ul className="carousel-tab">
                {carouselTab}
              </ul>
            </div>}
      </div>
    );
  }
}

export default PCCarousel;
