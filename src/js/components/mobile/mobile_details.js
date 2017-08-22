import React, { Component } from 'react';
import MobileHeader from './mobile_header';
import 'css/mobile/mobile_details.scss';
class MobileDetails extends Component {
  constructor() {
    super();
    this.state = {
      newsInfo: []
    };
  }
  getNewsDetail(id) {
    let fetchUrl = `http://route.showapi.com/109-35?page=1&showapi_sign=97005ff454434bbda96dbe7281b5d4cf&showapi_appid=43252&id=${id}&needHtml=1`;
    let fetchOptions = {
      method: 'GET'
    };
    fetch(fetchUrl, fetchOptions)
      .then(response => response.json())
      .then(json => {
        this.setState({
          newsInfo: json.showapi_res_body.pagebean.contentlist
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  componentDidMount() {
    this.getNewsDetail(this.props.match.params.newsId);
  }
  componentWillReceiveProps(nextProps) {
    this.getNewsDetail(nextProps.match.params.newsId);
  }
  render() {
    let detailsPage = this.state.newsInfo.map((item, index) => {
      return (
        <div className="mobile-detail" key={index}>
          <div className="mobile-article-header">
            <h1 className="mobile-title">
              {item.title}
            </h1>
            <div className="mobile-article-header-sub">
              <span className="mobile-details-from">
                {item.source}
              </span>
              <span className="mobile-details-date">
                {item.pubDate}
              </span>
            </div>
          </div>
          <article
            className="mobile-article-body"
            dangerouslySetInnerHTML={{ __html: item.html }}
          />
        </div>
      );
    });
    return (
      <div>
        <MobileHeader />
        <div className="mobile-details-container">
          {detailsPage}
        </div>
      </div>
    );
  }
}

export default MobileDetails;
