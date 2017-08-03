import React from 'react';
import 'css/pc_middle.scss';
import Carousel from './pc_carousel';
import PCNewsItem from './pc_news_item';
class PCMiddle extends React.Component {
  render() {
    console.log(this.props.match.params.id);
    return (
      <div className="middle-wrapper">
        {!this.props.match.params.id
          ? <div>
              <Carousel />
            </div>
          : ''}
        <PCNewsItem />
      </div>
    );
  }
}

export default PCMiddle;
