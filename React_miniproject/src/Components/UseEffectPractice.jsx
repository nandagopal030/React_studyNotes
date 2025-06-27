import React, { useEffect } from 'react'
import { useState } from 'react';

export const UseEffectPractice = () => {
   const [count, setCount] = useState(0);
   const [times, setTimes] = useState(0);
 
  /* main syntax for useEffect
  useEffect(()=>{
    //1 The main code that we want to run
    //3.Optional return function
    },[]) //2.Dependency Array
  */

   //useEffect with no dependency array where it does not contains the [] array
   /*useEffect(()=>{
    console.log("I am a No dependency Array")
   });*/
   //useEffect with empty dependency array
  /* useEffect(()=>{
      console.log("i have a dependency array with me [] and which is empty")
   },[]);
   //state dependency array
   useEffect(()=>{
     console.log("I am a state dependency Array");
   },[times]);
 
   //on mount Cleanup code
   useEffect(()=>{
     console.log("Mounted");
     return ()=>console.log("Un-Mounted");
     },[]);
   
   //re-render cleanUp
   useEffect(()=>{
     console.log("Re-render ");
     return () => console.log("Rerender clean up");
   });
   

   //state counter cleanup
   useEffect(()=>{
     console.log("I am a state counter");
     return () => console.log("State counter clean up");
    },[count]);
     
    
    useEffect(()=>{
      const random = Math.floor(Math.random() * 1000);
     const timer =  setInterval(()=>{
        console.log(`${random}- Re-render`)
      },1000);   
      return () => clearInterval(timer);
    })
*/
  
  return ( <>
   <div>
     <h1>Count : {count}</h1>
     <button onClick={() => setCount((value) => value - 1)}>-</button>
     <button onClick={() => setCount((value) => value + 1)}>+</button>
     <h2>Times: {times}</h2>
     <button onClick={()=>setTimes((value) => value + 1)}>T</button>
    </div>   
  
  </>);
}
