import React, { Component } from 'react'
import axios from 'axios'
import './style.css'
export default class ImgForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
          imgFile: "",
          src: ""
        };
        this.fileinput = React.createRef(this.fileinput);
      }
      onChange = e => {
        this.setState(
          {
            imgFile: e.target.files[0]
          },
          () => {
            let formData = new FormData();
            formData.append("commonImage", this.state.imgFile);
            return axios({
              method: "POST",
              url: `https://img-up.fasshon.cf/upload`,
              data: formData,
              config: {
                headers: { "Content-Type": "multipart/form-data" }
              }
            })
              .then(result => {
                this.setState({ src: result.data });
                this.props.input.onChange(result.data);
              })
              .catch(err => console.log(err));
          }
        );
      };
      onClickImg = () => {
        this.fileinput.current.click();
      };
    render() {
        return (
            <div>
          <input
            ref={this.fileinput}
            id="file-Input"
            className="file-Input"
            name="commonImage"
            type="file"
            onChange={this.onChange}
            accept="image/*"
          />
          <img
            className="avatar"
            onClick={this.onClickImg}
            alt="none"
            src={`${this.state.src ? this.state.src : "img/giphy.gif"}`}
          />
            </div>
        )
    }
}
