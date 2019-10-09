import React, { Component } from 'react'
const noStar="https://www.pinclipart.com/picdir/big/498-4985244_transparent-black-star-outline-clipart.png";
const haveStar='https://www.pinclipart.com/picdir/big/33-337440_stars-star-transparent-background-star-clipart-png.png'
export default class Star extends Component {
    render() {
        return (
            <img
            onClick={this.props.onClick.bind(this,this.props.star.value)}
            src={this.props.currentStars >= this.props.star.value ? haveStar:noStar}
          alt="error"
        />
        )
    }
}
