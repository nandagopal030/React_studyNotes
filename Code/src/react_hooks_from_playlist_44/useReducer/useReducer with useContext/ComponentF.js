import React from 'react'
import { useContext } from 'react'
import { CountContext } from '../../../App'
function ComponentF() {
    const countContext = useContext(CountContext)

    return (
        <div>ComponentF
            <h1>
                {countContext.countState}
            </h1>
            <div>
                <button onClick={() => countContext.countDispatch('increment')}>Increment</button>
                <button onClick={() => countContext.countDispatch('decrement')}>Decrement</button>
                <button onClick={() => countContext.countDispatch('reset')}>Reset</button>
            </div>
        </div>
    )
}

export default ComponentF