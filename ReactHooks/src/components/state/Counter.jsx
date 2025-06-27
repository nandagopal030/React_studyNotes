import React, { useState } from 'react'

export const Counter = () => {
  
    const [count, setCounter] = useState(0);

    const handleIncrement = () =>{
     setCounter((prevState) =>{
        return prevState + 1;
     })
    }
    const handleDecrement = () =>{
        setCounter ((prevState) =>{
            return prevState -1;
        })
    }
    const handleReset = () =>{
        setCounter(0);
    }
  
    return (
    <div>
        <h1> count : {count}</h1>
        <button onClick={handleIncrement} >Increment</button>
        <button onClick={handleDecrement}>Decrement</button>
        <button onClick={handleReset}>Reset</button>


    </div>
  )
}






























// import React, { useState } from 'react'

// export const Counter = () => {
  
//     const [count, setCounter] = useState(0);
  
//     return (
//     <div>
//         <h1> count : {count}</h1>
//         <button onClick={()=>{setCounter(count  + 1)}}>Increment</button>
//         <button onClick={()=>{setCounter(count - 1)}}>Decrement</button>
//         <button onClick={()=>{setCounter(0)}}>Reset</button>


//     </div>
//   )
// }
