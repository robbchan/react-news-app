import React from 'react'
import 'css/pc_middle.scss'
import Carousel from './pc_carousel'
class PCMiddle extends React.Component{
  render(){
    return (
      <div className="middle-wrapper">
        <Carousel></Carousel>
      </div>
    )
  }
}

export default PCMiddle