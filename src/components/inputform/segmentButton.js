import React, { Component } from "react";
import "./style.css";
import SegmentItem from "./segmentItem";
class SegmentButton extends Component {
  constructor(props) {
    super(props);
    this.state={}
  }
  onClick = id => {
    this.props.input.onChange(id)
  };
  render() {
    return (
      <div className="segment-control">
        {this.props.arrayTest.map((item, index) => {
          return (
            <SegmentItem
              item={item}
              currentSegment={this.props.input.value}
              key={index}
              onClick={this.onClick}
            />
          );
        })}
      </div>
    );
  }
}
export default SegmentButton;
