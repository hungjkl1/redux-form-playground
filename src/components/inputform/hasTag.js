import React, { Component } from "react";
import Tag from "./tag";
import { data } from "../../MOCK_DATA";
export default class HasTag extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tagArray: []
    };
  }
  addTag = content => {
    const tagArray = this.state.tagArray;
    if (!tagArray.includes(content)) {
      this.setState(
        {
          tagArray: [...tagArray, content]
        },
        () => {
          this.props.input.onChange(this.state.tagArray)
        }
      );
    } else {
      this.setState({
        tagArray: tagArray.filter(item => item !== content)
      },()=>{this.props.input.onChange(this.state.tagArray)});
    }
  };
  render() {
    return (
      <div className="hastag-box">
        {data.map((tag, index) => {
          return (
            <Tag item={tag} isActive={false} addTag={this.addTag} key={index} />
          );
        })}
      </div>
    );
  }
}
