import React, { Component } from 'react'

class ClassClick extends Component {
    clickHandler (){
        console.log("Butttooonnnn clicke by class comp0nent")
    }
  render() {
    return (
      <div>
        <button onClick={this.clickHandler}>Click me </button>
      </div>
    )
  }
}

export default ClassClick
