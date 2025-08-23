import React, { Component } from 'react'

class Counter extends Component {
    constructor(){
        super();
        this.state = {
            count: 1,
        }
    }
    handleChange() {
    //  this.setState({
    //     count: this.state.count + 1,
    //  }, () => console.log("THis is  a ca;;back", this.state.count));
    //  console.log(this.state.count)
     this.setState( prevState => ({
        count: prevState.count  + 1
     }))
     console.log(this.state.count)
    }
    handleDecrement(){
        this.setState({
            count: this.state.count -1,
        })
    }
    handleReset(){
        this.setState({
            count:this.state.count = 0,
        })
    }
  render() {
    return (
      <div>
         <h1>Count {this.state.count}</h1>
         <button onClick={()=>this.handleChange()}>Increment</button>
         <button onClick={()=>this.handleDecrement()}>Decrement</button>
         <button onClick={()=>this.handleReset()}>Reset</button>
      </div>
    )
  }
}

export default Counter
