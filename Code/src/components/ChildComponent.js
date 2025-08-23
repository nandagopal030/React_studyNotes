import React from 'react'

const ChildComponent = (props) => {
  return (                 // Method as props 
    <div>
        <button onClick={() => props.greetHandler("nanda child")}>
            click me
        </button>
    </div>
  )
}

export default ChildComponent