import React, { Component } from 'react';
import 'css/pc_24hours_hot.scss';
class PC24hoursHot extends Component {
  constructor() {
    super();
    this.state = {
      hotNewsList: [
        {
          title: '美国海军士兵在南海“失踪”？这事太蹊跷',
          imgUrl: 'http://p3.pstatp.com/list/240x240/3103000ddbf6f6a07287',
          id: ''
        }
      ]
    };
  }
  render() {
    let hotNews = this.state.hotNewsList.map((item, index) => {
      return (
        <li key={index} className="news-item">
          <a href="#" className="img-container">
            <img src={item.imgUrl} alt={item.title} />
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
