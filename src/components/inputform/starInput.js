import React, { Component } from "react";
import "./style.css";
import Star from "./star";
export default class StarInput extends Component {
constructor(props) {
    super(props);
    this.state={
        currentStars:0
    }
}
onClick=(star)=>{
    this.setState({
        currentStars:star
    })
    this.props.input.onChange(star)
}
    render() {
    const stars = [
      { value: 1, star: 1 },
      { value: 2, star: 2 },
      { value: 3, star: 3 },
      { value: 4, star: 4 },
      { value: 5, star: 5 }
    ];
    return (
      <div id='all-stars'>
          {stars.reverse().map((star,index)=>{
              return <Star star={star} currentStars={this.state.currentStars} key={index} onClick={this.onClick} />
          })}
      </div>
    );
  }
}
