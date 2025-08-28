import React from 'react'
import { userContext, channelContext } from '../../App'

function ComponenetF() {
    return (
        <div>
            <userContext.Consumer>
                {
                    user => {
                        return (
                            <channelContext.Consumer>
                                {
                                    channel => {
                                        return (
                                            <div><h1>Hello i am inside the usercontext and inside the channelContext</h1> <h3> This is {user} and my channle message is {channel} </h3></div>
                                        )
                                    }
                                }
                            </channelContext.Consumer>
                        )
                    }
                }
            </userContext.Consumer>
        </div>
    )
}

export default ComponenetF