import React from 'react';
import 'css/pc_middle.scss';
import Carousel from './pc_carousel';
import PCNewsItem from './pc_news_item';
class PCMiddle extends React.Component {
  constructor() {
    super();
    this.state = {
      channel: ''
    };
  }
  componentWillMount(){
    this.setState({channel: this.props.match.params.id})
  }
  componentWillReceiveProps(nextProps){
    this.setState({channel: nextProps.match.params.id})
  }
  render() {
    return (
      <div className="middle-wrapper">
        <PCNewsItem channel={this.state.channel} />
      </div>
    );
  }
}

export default PCMiddle;
