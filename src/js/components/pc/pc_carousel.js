import React, { Component } from 'react';
import 'css/pc_carousel.scss';

class PCCarousel extends Component {
  constructor() {
    super();
    this.state = {
      carouselItem: [
        {
          title: '悉尼马丁广场现“帐篷城” 成无家可归者聚居地',
          imgUrl: 'http://p1.pstatp.com/origin/2c6b001cbc7560a715ff',
          channel: '要闻',
          id: ''
        },
        {
          title: '谁是“隐身”顶级高手？少林首届无遮大会闭幕',
          imgUrl: 'http://p3.pstatp.com/origin/2c63001ca905b1d764fa',
          channel: '社会',
          id: ''
        },
        {
          title: '单身狗请回避！看戚哥秒变戚妹',
          imgUrl: 'http://p3.pstatp.com/origin/2c70001cba426b1e8a92',
          channel: '娱乐',
          id: ''
        },
        {
          title: 'CBA再迎大牌外援 哈登前队友泰伦斯-琼斯加盟青岛',
          imgUrl: 'http://p1.pstatp.com/origin/2c6b001cbc7560a715ff',
          channel: '体育',
          id: ''
        },
        {
          title: '歼20开始小批量生产是件喜事：但专家却陷入沉思！成败就在这里',
          imgUrl: 'http://p3.pstatp.com/origin/2c6b001cbcbffb684d9b',
          channel: '军事',
          id: ''
        },
        {
          title: '周冬雨紧跟反季穿衣潮流 这次捂的更严实了！',
          imgUrl: 'http://p3.pstatp.com/origin/2c6b001cbcea27d321d2',
          channel: '明星',
          id: ''
        }
      ],
      currentIndex: 0,
      channelItem: [],
      interval: 5000,
      autoplay: true,
      mouseIsOn: false
    };
  }
  compomentWillMount() {
    //fetch setstate
  }
  componentDidMount() {
    //挂载后通过改变state中的currentIndex进行轮播
    var interval = setInterval(() => {
      let i = this.state.currentIndex;
      if (this.state.mouseIsOn) return;
      this.setState({ currentIndex: i >= 0 && i < 5 ? (i += 1) : (i = 0) });
    }, this.state.interval);
  }
  handleTabClick(index) {
    this.setState({ currentIndex: index });
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
    let carousel = this.state.carouselItem.map((item, index) => {
      return (
        <li
          key={index}
          className="carousel-item"
          id={this.state.currentIndex === index ? 'show' : ''}
        >
          <img src={item.imgUrl} alt={item.title} />
          <p>
            {item.title}
          </p>
        </li>
      );
    });
    let carouselTab = this.state.carouselItem.map((item, index) => {
      return (
        <li
          key={index}
          className={this.state.currentIndex === index ? 'tabActive' : ''}
          onClick={this.handleTabClick.bind(this, index)}
          onMouseEnter={this.handleTabEnter.bind(this, index)}
          onMouseLeave={this.handleTabLeave.bind(this, index)}
        >
          {item.channel}
        </li>
      );
    });
    return (
      <div className="carousel">
        <ul>
          {carousel}
        </ul>
        <ul className="carousel-tab">
          {carouselTab}
        </ul>
      </div>
    );
  }
}

export default PCCarousel;
