import React, { Component } from 'react';
import 'css/pc_news_item.scss';
class PCNewsItem extends Component {
  constructor() {
    super();
    this.state = {
      channelId: '5572a108b3cdc86cf39001cd',
      newsList: []
    };
  }
  getNewsList(channelId) {
    let fetchUrl = `http://route.showapi.com/109-35?page=1&showapi_sign=97005ff454434bbda96dbe7281b5d4cf&showapi_appid=43252&maxResult=20&channelId=${channelId}`
    let fetchOptions = {
      method: 'GET'
    };
    fetch(
      fetchUrl,
      fetchOptions
    )
      .then(response => response.json())
      .then(json => {
        this.setState({ newsList: json.showapi_res_body.pagebean.contentlist });
      })
      .catch(error => {
        console.log(error);
      });
  }
  setChannelId(n) {
    switch (n) {
      case 'sports':
        console.log('sports');
        this.setState({
          channelId: '5572a108b3cdc86cf39001d4'
        });
        break;
      case 'military':
        console.log('military');
        this.setState({
          channelId: '5572a108b3cdc86cf39001cf'
        });
        break;
      case 'domestic':
        console.log('domestic');
        this.setState({
          channelId: '5572a108b3cdc86cf39001cd'
        });
        break;
      case 'international':
        console.log('international');
        this.setState({
          channelId: '5572a108b3cdc86cf39001ce'
        });
        break;
      case 'entertainment':
        console.log('entertainment');
        this.setState({
          channelId: '5572a108b3cdc86cf39001d5'
        });
        break;
      case 'society':
        console.log('society');
        this.setState({
          channelId: '5572a109b3cdc86cf39001da'
        });
        break;
      case 'games':
        console.log('games');
        this.setState({
          channelId: '5572a108b3cdc86cf39001d6'
        });
        break;
      case 'technology':
        console.log('technology');
        this.setState({
          channelId: '5572a108b3cdc86cf39001d9'
        });
        break;
      case 'more':
        console.log('more');
        this.setState({
          channelId: '5572a10ab3cdc86cf39001e8'
        });
        break;
      default:
        console.log('国际足球');
        this.setState({
          channelId: '5572a10ab3cdc86cf39001e7'
        });
    }
  }
  shouldComponentUpdate(nextProps) {
    return this.props.id !== nextProps.id;
  }
  componentWillMount() {
    //切换到新闻tab的时候fetch一次数据
    this.setChannelId(this.props.id);
  }
  componentDidMount(){
    //mount后获取sports的数据
    this.getNewsList(this.state.channelId);
  }
  componentDidUpdate() {
    //切换新闻tab fetch数据
    this.setChannelId(this.props.id);
    this.getNewsList(this.state.channelId);
  }
  render() {
    let newsItem = this.state.newsList.map((item, index) => {
      return (
        <div className="pc-news-item" key={index}>
          <div className="image-click-box">
            <a href="id">
              <img src={item.imgUrl} alt={item.title} />
            </a>
          </div>
          <div className="news-item-rbox">
            <p className="title-box">
              <a href="id">
                {item.title}
              </a>
            </p>
            <p className="news-item-rbox-bottom">
              <a className="item-channel">
                {item.channel}
              </a>
              <span className="news-from">
                &nbsp;{item.from}&nbsp;⋅
              </span>
              <span className="news-date">
                &nbsp;{item.date}
              </span>
            </p>
          </div>
        </div>
      );
    });
    return (
      <div>
        {newsItem}
      </div>
    );
  }
}

export default PCNewsItem;
