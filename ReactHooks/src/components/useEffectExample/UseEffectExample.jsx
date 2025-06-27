import React, { useState } from 'react'
import { useEffect } from 'react';

export const UseEffectExample = () => {
  const [count1, setCount1] = useState (0);
  const [count2, setCount2] = useState (0);
  
 useEffect(() => {
    console.log("Your component is loaded");
  },[count1]);

  const handleCount1 = () =>{
    setCount1 ((prevValue) => prevValue + 1);
  }
   const handleCount2 = () =>{
    setCount2 ((prevValue) => prevValue + 1);
  }
    return (
    <>
     <h1>Count 1 : {count1} </h1>
     <h1>Count 2 : {count2}</h1>
      <button onClick={handleCount1}>Button 1</button>
      <button onClick={handleCount2}>Button 2</button>    
    </>
  )
}
