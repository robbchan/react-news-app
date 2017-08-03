import React from 'react';
import 'css/pc_middle.scss';
import Carousel from './pc_carousel';
import PCNewsItem from './pc_news_item';
class PCMiddle extends React.Component {
  render() {
    return (
      <div className="middle-wrapper">
        {!this.props.match.params.id
          ? <div>
              <Carousel id={this.props.match.params.id}/>
            </div>
          : null}
        <PCNewsItem id={this.props.match.params.id} />
      </div>
    );
  }
}

export default PCMiddle;
