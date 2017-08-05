import React, { Component } from 'react';
import 'css/pc_24hours_hot.scss';
import {Link} from 'react-router-dom'
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
          return(item.havePic?
            hotNewsList.push(item):null)
          });
        hotNewsList = hotNewsList.slice(0,8);
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
        <Link to={`/details/${item.id}`} className='imgClickBox'>
          <div className="img-container">
            <img src={item.imageurls[0].url} alt={item.title} />
          </div>
        </Link>
          <Link to={`/details/${item.id}`} className="news-item-wrap">
            {item.title}
          </Link>
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
