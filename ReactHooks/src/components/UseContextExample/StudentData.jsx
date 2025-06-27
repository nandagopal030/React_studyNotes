import React, { useCallback, useEffect, useState } from 'react'

export const StudentData = () => {
    const [count, setCount] =  useState(0);
    const [text, setText] = useState(''); 
    const handleClick =useCallback(()  =>{
        setCount((prev) => prev + 1);
     },[]);
    useEffect (()=>{
      console.log("Use Effect triggered when my handlefunction triggers")
    },[handleClick]);

  return (
    <div>StudentData
    <h1>Use Call backExample</h1>
    <h1>Counter : {count}</h1>
    <button onClick= {handleClick}> click me</button>
    <label htmlFor="text"> Text </label>
    <br />
    <input type="text" 
    value = {text}
    onChange={(e)=>{setText(e.target.value)}} /> <br />
    <p>Text : {text}</p>

    </div>
  )
}
