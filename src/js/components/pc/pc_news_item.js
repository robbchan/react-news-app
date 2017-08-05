import React, { Component } from 'react';
import 'css/pc_news_item.scss';
import {Link} from 'react-router-dom'
class PCNewsItem extends Component {
  constructor() {
    super();
    this.state = {
      newsList: []
    };
  }
  //获取路由传递参数所对应新闻的channelid
  getChannelId(name) {
    switch (name) {
      case 'sports':
        return '5572a108b3cdc86cf39001d4';
      case 'military':
        return '5572a108b3cdc86cf39001cf';
      case 'domestic':
        return '5572a108b3cdc86cf39001cd';
      case 'international':
        return '5572a108b3cdc86cf39001ce';
      case 'entertainment':
        return '5572a108b3cdc86cf39001d5';
      case 'society':
        return '5572a109b3cdc86cf39001da';
      case 'games':
        return '5572a108b3cdc86cf39001d6';
      case 'technology':
        return '5572a108b3cdc86cf39001d9';
      case 'more':
        return '5572a109b3cdc86cf39001e3';
      default:
        return '';
    }
  }
  //获取新闻列表
  getNewsList(channel) {
    let channelId = this.getChannelId(channel);
    let fetchUrl = `http://route.showapi.com/109-35?page=1&showapi_sign=97005ff454434bbda96dbe7281b5d4cf&showapi_appid=43252&maxResult=20&channelId=${channelId}`;
    let fetchOptions = {
      method: 'GET'
    };
    fetch(fetchUrl, fetchOptions)
      .then(response => response.json())
      .then(json => {
        this.setState({ newsList: json.showapi_res_body.pagebean.contentlist });
      })
      .catch(error => {
        console.log(error);
      });
  }
  componentWillMount() {
    this.getNewsList(this.props.channel);
  }
  componentWillReceiveProps(nextProps) {
    if (this.props.channel !== nextProps.channel) {
      this.getNewsList(nextProps.channel);
    }
  }
  render() {
    let newsItem = this.state.newsList.map((item, index) => {
      return (
        <div className="pc-news-item" key={index}>
          {item.havePic
            ? <div className="image-click-box">
                <Link to={`/details/${item.id}`}>
                  <img
                    src={item.havePic ? item.imageurls[0].url : ''}
                    alt={item.title}
                  />
                </Link>
              </div>
            : null}
          <div className="news-item-rbox">
            <p className="title-box">
              <a to={item.id}>
                {item.title}
              </a>
            </p>
            <p className="news-item-rbox-bottom">
              <a className="item-channel">
                {item.channelName}
              </a>
              <span className="news-from">
                &nbsp;{item.source}&nbsp;⋅
              </span>
              <span className="news-date">
                &nbsp;{item.pubDate}
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
