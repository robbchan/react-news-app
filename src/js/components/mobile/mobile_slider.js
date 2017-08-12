import React, { Component } from 'react';
import 'css/mobile/mobile_slider.scss'
class MobileSlider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sliderList: [
                {
          title: '男孩遭车碾压 女子目睹无反应',
          imgUrl:
            'http://k.sinaimg.cn/n/news/transform/20170807/9yxk-fyitpmh3113319.jpg/w710h400z1l1t1d88.jpg'
        },
        {
          title: '男子劫持出租车被4车围堵逼停',
          imgUrl:
            'http://k.sinaimg.cn/n/news/transform/20170807/rdZE-fyitapv8724588.png/w710h400z1l1t19bf.jpg'
        },
        {
          title: '贵州百名犯罪嫌疑人列队游街',
          imgUrl:
            'http://k.sinaimg.cn/n/news/transform/20170807/77ZB-fyitapp1922458.jpg/w710h400z1l1t1e6d.jpg'
        },
        {
          title: '上海水葫芦爆发 日均打捞千吨',
          imgUrl:
            'http://k.sinaimg.cn/n/news/transform/20170807/x7Av-fyitamv6334369.jpg/w710h400z1l1t14e6.jpg'
        }
      ],
      imgCount: 0
    };
  }
  autoPlay(){
    var i = 0
    setInterval(()=>{
      i<3?i++:i=0
      this.setState({imgCount:i})
    },2000)
  }
  componentDidMount(){
    this.autoPlay()
  }
  render() {
    let style = {
    position: 'relative',
    left: `-${this.state.imgCount}00%`,
    width: `${this.state.sliderList.length}00%`,
    display: 'flex',
    transition: 'all .2s'
    }
    let slider = this.state.sliderList.map((item, index) => {
      return (
        <li key={index} onto>
          <img src={item.imgUrl} alt={item.title} />
            <h2>
              {item.title}
            </h2>
            <span>
              {index}
            </span>
        </li>
      );
    });
    return (
      <div className="slider">
        <ul className='slider-container' style={style}>
          {slider}
        </ul>
      </div>
    );
  }
}

export default MobileSlider;
