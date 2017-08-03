import React, { Component } from 'react';
import 'css/pc_news_item.scss';
class PCNewsItem extends Component {
  constructor() {
    super();
    this.state = {
      newsList: [
        {
          imgUrl: 'http://p3.pstatp.com/list/190x124/3354001536190b240661',
          title: '当广岛投下原子弹时，日本人在做什么，妇女眼看原子弹落下',
          id: '1',
          from: '凤凰卫视',
          channel: '军事',
          date: 'time'
        }
      ]
    };
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
