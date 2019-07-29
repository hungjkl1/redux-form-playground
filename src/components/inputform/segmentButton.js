import React, { Component } from "react";
import "./style.css";
import SegmentItem from './segmentItem'
class SegmentButton extends Component {

  render() {
    return (
      <div className="segment-control">
         {this.props.arrayTest.map((item,index)=>{return <SegmentItem item={item} key={index}/>})}

      </div>
    );
  }
}
export default SegmentButton;
