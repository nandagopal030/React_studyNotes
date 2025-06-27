import React from 'react'
import { ChildComponent } from './ChildComponent'

export const ParentComponent = () => {
    const handleClick = () =>{
        console.log(" i am clicke from parent")
    }
  return (
    <div className='box'>
        <h3>ParentComponent</h3>
        <ChildComponent  handleClick = {handleClick}  />
    </div>
  )
}
