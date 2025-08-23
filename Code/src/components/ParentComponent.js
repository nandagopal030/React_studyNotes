import React, { Component } from 'react'
import ChildComponent from './ChildComponent';

 class ParentComponent extends Component {
     constructor(props) {
       super(props)
     
       this.state = {
          parent: "parent"
       }
       this.grandParent = this.grandParent.bind(this);
     }
    grandParent (ChildName){
        alert(`Hello ${this.state.parent} from ${ChildName}`);
    }
     
  render() {
    return (
      <div>
        <ChildComponent greetHandler ={this.grandParent} />
      </div>
    )
  }
}

export default ParentComponent
