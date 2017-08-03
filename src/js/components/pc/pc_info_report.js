import React, { Component } from 'react';
import 'css/pc_info_report.scss'
class PCInfoReport extends Component {
  render() {
    return (
      <div className="report-box">
        <img
          src="https://s3a.pstatp.com/toutiao/resource/ntoutiao_web/static/image/other/report_logo_15cc24e.png"
          alt="有害信息举报"
        />
        <div className="report-box-info">
          <p className="title">网上有害信息举报专区</p>
          <p className="tel">举报电话：12377</p>
        </div>
      </div>
    );
  }
}

export default PCInfoReport;
