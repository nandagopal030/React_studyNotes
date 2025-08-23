import React, {Component} from "react";

class Welcome extends Component {
    render(){
        const {name, heroName} = this.props // method to destructure props in class components
        // const {state1, state2} = this.state // syntax for destructure states
        return(
        <div>
        <h1>I am from Class COmponent</h1>
        <h2>Welcome {name} AKA {heroName}</h2>
        </div>
        )    
    }
}
export default Welcome
 