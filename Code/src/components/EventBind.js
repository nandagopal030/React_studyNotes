import React, { Component } from 'react'

class EventBind extends Component {
   constructor(props) {
     super(props)
   
     this.state = {
        message:"Hello",
     }
     this.handleClick = this.handleClick.bind(this); // Binding in the constructor
   }
   handleClick(){
        this.setState({
            message: "worlds"
        })
        console.log(this);
    }
   
  render() {
    return (
      <div>
        <p>{this.state.message}</p>
          {/* <button onClick={this.handleClick.bind(this)}>Click me</button>  Binding Method */}
          {/* <button onClick={()=> this.handleClick()}>Click me</button>  arrow function and render*/} 
          {/* <button onClick= {this.handleClick}>Click me</button>  binding in the constructor */}
            
      </div>
    )
  }
}

export default EventBind
