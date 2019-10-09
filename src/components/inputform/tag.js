import React, { Component } from 'react'

export default class Tag extends Component {
    constructor(props) {
        super(props)
        this.state={
            isActive:false
        }  
    }
    activeTag=()=>{
        if(!this.state.isActive)
        this.setState({
            isActive:true
        })
        else{
            this.setState({
                isActive:false
            })
        }
    }
    render() {
        return (
            <div className={`tag ${this.state.isActive?'tag-active':''}`} onClick={()=>{
                this.props.addTag(this.props.item.content)
                this.activeTag();
            }}>
                {`#${this.props.item.content}`}
            </div>
        )
    }
}
