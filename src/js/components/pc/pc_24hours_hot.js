import React, { Component } from 'react';
import 'css/pc_24hours_hot.scss';
class PC24hoursHot extends Component {
  constructor() {
    super();
    this.state = {
      hotNewsList: []
    };
  }
    getHotNewsList() {
    let fetchUrl = `http://route.showapi.com/109-35?page=1&showapi_sign=97005ff454434bbda96dbe7281b5d4cf&showapi_appid=43252&maxResult=20&channelName=焦点`;
    let fetchOptions = {
      method: 'GET'
    };
    fetch(fetchUrl, fetchOptions)
      .then(response => response.json())
      .then(json => {
        let hotNewsList = [];
        json.showapi_res_body.pagebean.contentlist.map((item, index) => {
          if (item.havePic) {
            hotNewsList.push(item);
          }
        });
        hotNewsList = hotNewsList.slice(5);
        this.setState({ hotNewsList });
      })
      .catch(error => {
        console.log(error);
      });
  }
  componentDidMount(){
    this.getHotNewsList()
  }
  render() {
    let hotNews = this.state.hotNewsList.map((item, index) => {
      return (
        <li key={index} className="news-item">
        <a className='imgClickBox'>
          <div className="img-container">
            <img src={item.imageurls[0].url} alt={item.title} />
          </div>
        </a>
          <a href="#" className="news-item-wrap">
            {item.title}
          </a>
        </li>
      );
    });
    return (
      <ul className="hot-news">
        <h1>24小时热闻</h1>
        {hotNews}
      </ul>
    );
  }
}

export default PC24hoursHot;
