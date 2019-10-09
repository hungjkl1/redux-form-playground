import React, { Component } from "react";
import "./style.css";
export default class segmentItem extends Component {
   
    render() 
  {
    return (
      <div
        className={`segment-item ${
          this.props.item.id === this.props.currentSegment
            ? "segment-active"
            : ""
        }`}
        onClick={this.props.onClick.bind(this, this.props.item.id)}
      >
        {this.props.item.name}
      </div>
    );
  }
}
