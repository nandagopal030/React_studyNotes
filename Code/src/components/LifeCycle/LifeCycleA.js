import React, { Component } from 'react'
import LifeCycleB from './LifeCycleB'


class LifeCycleA extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: "nanda"
        }
        console.log("LifeCycleA from Constructor")
    }
    static getDerivedStateFromProps(props, state) {
        console.log("LifeCycleA from getDerivedStateFromProps")
    }
    componentDidMount() {
        console.log('LifeCycleA componentDidMount')
    }
    shouldComponentUpdate() {
        console.log("LifeCycleA shouldComponentUpdate")
        return true;
    }
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("LifeCycleA getSnapShotBeforeUpdate")
        return null
    }
    componentDidUpdate() {
        console.log('LifeCycleA CompoenntDidUpdate ')
    }
    handleClick = () =>{
        this.setState({
            name:'gopal'
        })
    }

    render() {
        console.log('LifeCycleA render')
        return (<>
            <div> LifeCycleA render
                <button onClick={this.handleClick}>Click</button>
            </div>
            <LifeCycleB />
        </>
        )

    }
}

export default LifeCycleA;