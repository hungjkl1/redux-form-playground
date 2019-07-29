import React, { Component } from "react";
import "./style.css";
export default class segmentItem extends Component {
onClick=e=>{
    console.log(e.target.value)
}
  render() {
    return (
      <div className="segment-items">
        <input
          type="radio"
          className="segment-input"
          name="segment-option"
          onClick={
              this.onClick
          }
          id={this.props.item.id}
          value={this.props.item.name}
        />
        <label className="segment-label" htmlFor={this.props.item.id}>
            {this.props.item.name}
        </label>
      </div>
    );
  }
}
