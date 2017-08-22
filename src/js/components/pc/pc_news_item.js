import React, { Component } from 'react';
import 'css/pc/pc_news_item.scss';
import { Link } from 'react-router-dom';
import PcLoadMore from './pc_load_more';
class PcNewsItem extends Component {
  constructor() {
    super();
    this.state = {
      newsList: [],
      currentPage: 1
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
  getNewsList(channel, keyword) {
    let fetchUrl;
    if (keyword !== undefined) {
      fetchUrl = `route.showapi.com/109-35?page=1&showapi_sign=97005ff454434bbda96dbe7281b5d4cf&showapi_appid=43252&maxResult=20&title=${keyword}`;
    } else {
      var channelId = this.getChannelId(channel);
      fetchUrl = `route.showapi.com/109-35?page=1&showapi_sign=97005ff454434bbda96dbe7281b5d4cf&showapi_appid=43252&maxResult=20&channelId=${channelId}`;
    }

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
  getMoreNews(channel, keyword, currentPage) {
    let fetchUrl;
    if (keyword !== undefined) {
      fetchUrl = `//route.showapi.com/109-35?page=${currentPage}&showapi_sign=97005ff454434bbda96dbe7281b5d4cf&showapi_appid=43252&maxResult=20&title=${keyword}`;
    } else {
      var channelId = this.getChannelId(channel);
      fetchUrl = `//route.showapi.com/109-35?page=${currentPage}&showapi_sign=97005ff454434bbda96dbe7281b5d4cf&showapi_appid=43252&maxResult=20&channelId=${channelId}`;
    }

    let fetchOptions = {
      method: 'GET'
    };
    fetch(fetchUrl, fetchOptions)
      .then(response => response.json())
      .then(json => {
        var nextList = this.state.newsList.concat(
          json.showapi_res_body.pagebean.contentlist
        );
        this.setState({ newsList: nextList });
      })
      .catch(error => {
        console.log(error);
      });
  }
  componentWillMount() {
    this.getNewsList(this.props.channel, this.props.keyword);
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps !== this.props) {
      this.getNewsList(nextProps.channel, nextProps.keyword);
    }
  }
  loading() {
    var currentPage = this.state.currentPage;
    this.setState({
      currentPage: (currentPage += 1)
    });
    this.getMoreNews(this.props.channel, this.props.keyword, currentPage);
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
              <Link to={`/details/${item.id}`}>
                {item.title}
              </Link>
            </p>
            <p className="news-item-rbox-bottom">
              <span className="item-channel">
                {item.channelName}
              </span>
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
        <div>
          <PcLoadMore
            loading={this.loading.bind(this)}
            keyword={this.props.keyword}
          />
        </div>
      </div>
    );
  }
}

export default PcNewsItem;
