import React, { Component } from 'react';
import 'css/mobile/mobile_carousel.scss';

/**
 * Slider
 */
class Sliders extends Component {
  render() {
    var aStyles = {
      //设定宽度为html的宽度
      width: document.documentElement.clientWidth + 'px'
    };
    var picStyles = {
      backgroundImage: `url(${this.props.src})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    };
    return (
      <a href={this.props.link} className="slide-a" style={aStyles}>
        <div className="slide-li" style={picStyles}>
          <span className="slide-title">
            {this.props.title}
          </span>
          <section className="slide-pagination">
            <span className="slide-pagination-index">
              {this.props.fakeIndex
                ? this.props.fakeIndex
                : this.props.index + 1}
            </span>
            &frasl;
            <span className="slide-pagination-total">{this.props.total}</span>
          </section>
        </div>
      </a>
    );
  }
}

//存放定时器id的变量
let timerId;

/**
 * MobileCarousel
 */
class MobileCarousel extends Component {
  constructor(props) {
    super(props);
    this.autoPlay = this.autoPlay.bind(this);
    this.state = {
      baseWidth: document.documentElement.clientWidth, //基础宽度，即html宽度
      startX: '', //触摸起始位置
      curX: '', //当前触摸位置
      moveX: '', //移动的偏移量
      time: 0,
      distance: '', //向左偏移的距离
      swiper: 30, //滑动滚动最小触发距离
      index: 0, //当前索引
      length: this.props.slides.length,
      continuous: this.props.isContinuous, //是否无限循环
      autoSlide: this.props.isAutoSlide,
      slideSpeed: this.props.speed
    };
  }
  //触摸起始事件
  touchStart(e) {
    this.setState({
      time: 0.5,
      startX: e.touches[0].pageX
    });
  }
  //触摸移动过程事件
  touchMove(e) {
    if (this.state.autoSlide) {
      this.stopAutoPlay();
    }
    var _curX = e.touches[0].pageX;
    var _moveX = _curX - this.state.startX;
    var _distance = -(this.state.index * this.state.baseWidth - _moveX);

    this.setState({
      curX: _curX,
      moveX: _moveX,
      time: 0,
      distance: _distance
    });
  }
  //触摸结束事件
  touchEnd(e) {
    if (Math.abs(this.state.moveX) <= this.state.swiper) {
      //不滚动
      this.slideFun('', '0.5');
    } else {
      if (this.state.moveX > this.state.swiper) {
        //右划向前滚动
        this.slideFun('prev', '0.5');
      } else if (Math.abs(this.state.moveX) > this.state.swiper) {
        //左滑向后滚动
        this.slideFun('next', '0.5');
      }
    }
    //触摸事件结束后，偏移量清零
    this.setState({
      moveX: 0
    });
  }
  //左右滚动事件
  slideFun(go, time) {
    var _index = this.state.index;
    if (typeof go === 'number') {
      _index = go;
    } else if (go === 'next') {
      _index++;
    } else if (go === 'prev') {
      _index--;
    }

    //判断是否无限循环
    if (this.state.continuous) {
      if (_index > this.state.length) {
        //当索引大于length时，滚动到最后1张后添加的第1张的副本，并将索引改为1
        this.scrollFun(_index, time);
        _index = 1;
        setTimeout(() => {
          this.scrollFun(_index, 0);
          this.autoPlay();
          this.setState({
            index: _index
          });
        }, 500);
      } else if (_index < 1) {
        //当索引小于length时，滚动到第1张前添加的最后1张的副本，并将索引改为this.state.length
        this.scrollFun(_index, time);
        _index = this.state.length;
        setTimeout(() => {
          this.scrollFun(_index, 0);
          this.autoPlay();
          this.setState({
            index: _index
          });
        }, 500);
      } else {
        this.scrollFun(_index, time);
        this.setState({
          index: _index
        });
      }
    } else {
      //非无限循环时
      if (_index >= this.state.length) {
        _index = 0;
      } else if (_index < 0) {
        _index = this.state.length - 1;
      }
      this.scrollFun(_index, time);
      this.setState({
        index: _index
      });
    }
  }
  //滚动函数
  scrollFun(index, time) {
    this.setState({
      time: time,
      distance: -(index * this.state.baseWidth)
    });
  }
  //自动轮播
  autoPlay() {
    if (this.state.autoSlide) {
      this.stopAutoPlay();
      timerId = setInterval(() => {
        this.slideFun('next', '.5');
      }, this.state.slideSpeed);
    }
  }
  stopAutoPlay() {
    clearInterval(timerId);
  }
  componentDidMount() {
    //无限轮播，由于在轮播图前后各放置了一份副本，所以此时index + 1
    if (this.state.continuous) {
      var newIndex = this.state.index + 1;
      this.setState({
        index: newIndex,
        distance: -(newIndex * this.state.baseWidth)
      });
    }
    this.autoPlay();
  }

  render() {
    //通过props获取slideList
    let slideList = this.props.slides;

    //slider-ul的width是slideList.length+2
    let slideStyle = {
      width:
        document.documentElement.clientWidth * (slideList.length + 2) + 'px',
      WebkitTransform: 'translate3d(' + this.state.distance + 'px,0,0)',
      transform: 'translate3d(' + this.state.distance + 'px,0,0)',
      WebkitTranstion: 'all ' + this.state.time + 's',
      transition: 'all ' + this.state.time + 's'
    };
    let sliders = slideList.map((item, index) => {
      return (
        <Sliders
          src={item.imageurls[0].url}
          key={index}
          index={index}
          total={this.state.length}
          title={item.title}
        />
      );
    });
    return (
      <div className="slide-wrap">
        <ul
          className="slide-ul"
          style={slideStyle}
          onTouchStart={e => this.touchStart(e)}
          onTouchMove={e => this.touchMove(e)}
          onTouchEnd={e => this.touchEnd(e)}
          onTransitionEnd={() => this.autoPlay()}
        >
          {/* 如果是无限轮播，在前面增加一张尾部的副本 */}
          {this.state.continuous
            ? <Sliders
                link={slideList[slideList.length - 1].link}
                src={slideList[slideList.length - 1].imageurls[0].url}
                title={slideList[slideList.length - 1].title}
                fakeIndex={5}
                picWidth={this.state.baseWidth}
              />
            : ''}
          {sliders}
          {/* 如果是无限轮播，在末尾增加一张首页的副本 */}
          {this.state.continuous
            ? <Sliders
                link={slideList[0].link}
                src={slideList[0].imageurls[0].url}
                title={slideList[0].title}
                fakeIndex={1}
                picWidth={this.state.baseWidth}
              />
            : ''}
        </ul>
      </div>
    );
  }
}

export default MobileCarousel;
