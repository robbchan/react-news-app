import React from 'react';
import MobileSlider from './mobile_slider';
import MobileNewsItem from './mobile_news_item';
import 'css/mobile/mobile_middle.scss'
class MobileMiddle extends React.Component {
  constructor() {
    super();
    this.state = {
      channel: '',
      keyword: ''
    };
  }
  componentWillMount() {
    this.setState({
      channel: this.props.match.params.id,
      keyword: this.props.match.params.keyword
    });
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.match.params !== this.props.match.params) {
      this.setState({
        channel: nextProps.match.params.id,
        keyword: nextProps.match.params.keyword
      });
    }
  }
  render() {
    return (
      <div className="mobile-middle-wrapper">
        {this.state.channel === undefined && this.state.keyword === undefined
          ? <div>
              <MobileSlider />
              <MobileNewsItem />
            </div>
          : <MobileNewsItem
              channel={this.state.channel}
              keyword={this.state.keyword}
            />}
      </div>
    );
  }
}

export default MobileMiddle;
