import React, { Component } from 'react'


class LifeCycleB extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: "nanda"
        }
        console.log("LifeCycleB from Constructor")
    }
    static getDerivedStateFromProps(props, state) {
        console.log("LifeCycleB from getDerivedStateFromProps")
    }
     componentDidMount(){
        console.log('LifeCycleB componentDidMount')
    }
    shouldComponentUpdate(){
        console.log("LifeCycleB shouldComponentUpdate")
        return true;
    }
    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log("LifeCycleB getSnapShotBeforeUpdate")
        return null
    }
    componentDidUpdate(){
        console.log('LifeCycleB CompoenntDidUpdate ')
    }
    render() {
        console.log('LifeCycleB render')
        return <div> LifeCycleB render   </div>

    }
}

export default LifeCycleB;