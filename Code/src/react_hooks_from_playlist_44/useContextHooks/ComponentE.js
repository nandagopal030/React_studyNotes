import React, { useContext } from 'react'
import { userContext, channelContext } from '../../App'
// import ComponenetF from './ComponenetF'

function ComponentE() {
    const user = useContext(userContext);
    const channel = useContext(channelContext);
    return (
        <div>
            {user} -------     - {channel}
        </div>
    )
}

export default ComponentE