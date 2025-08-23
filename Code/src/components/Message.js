import React, { Component } from "react";

class Message  extends Component{
    constructor(){
        super();
        this.state ={
            message: 'nanda'
        }
    }
    handleChange(){
        this.setState({
            message:"babnda"
        })
    }

    render(){
        return (
            <>
            <h1>Welcome {this.state.message}</h1>
            <button onClick={()=>this.handleChange()}>Click me to CHnage</button>
            </>
        )
    }
}
export default Message;