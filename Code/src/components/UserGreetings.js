import React, { Component } from 'react'

class UserGreetings extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isLoggesIn: true

        }
    }

    render() {
         //ShortCircuit method
         return this.state.isLoggesIn && <div>Welcome Nanda</div>

        //Ternanary Operator approach

    //    return (
    //     this.state.isLoggesIn ?
    //     <div>Welcome Nanda</div> :
    //     <div>Welcome Guest</div>
    //    )

        //element variables approach

        // let message;
        // if(this.state.isLoggesIn){
        //     message =<div>Welcome nanda</div>
        // }else{
        //     message =<div>welcome Guest</div>
        // }
        // return <div>{message}</div>;
        // -------------------------------------------
        //Basic if else approach

        // if (this.state.isLoggesIn) {
        //     return (
        //         <div>
        //             Welcome nanda
        //         </div>
        //     )
        // } else {
        //     return (
        //         <div>
        //             Welcome Guest
        //         </div>
        //     )
        // }
    }
}

export default UserGreetings
