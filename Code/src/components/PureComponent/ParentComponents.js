import React, { Component } from 'react'
import PureChild from './PureChild'
import RegularComponent from './RegularComponent'
import MemoComp from './MemoComp'

 class ParentComponents extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name: 'nanda'
      }
    }

  componentDidMount(){
    setInterval(()=>{
      this.setState({
        name:'nanda'
      })
    },2000)
  }

  render() {
    console.log("parentComponent Render")
    return (
      <div>
        Parent Component
        <MemoComp name ={this.state.name}/>
        {/* <PureChild  name={this.state.name}/> */}
        {/* <RegularComponent  name ={this.state.name}/> */}
      </div>
    )
  }
}

export default ParentComponents
