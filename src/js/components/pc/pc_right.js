import React from 'react';
import PCSearchBox from './pc_search_box';
import PCInfoReport from './pc_info_report'
import PCAdvertisement from './pc_advertisement'
import 'css/pc/pc_right.scss'
import PC24hoursHot from './pc_24hours_hot'
class PCRight extends React.Component {
  render() {
    return (
      <div className="pc-right-wrapper">
        <PCSearchBox />
        <PCInfoReport></PCInfoReport>
        <PCAdvertisement></PCAdvertisement>
        <PC24hoursHot></PC24hoursHot>
      </div>
    );
  }
}

export default PCRight;
