import React, { useEffect, useState } from 'react'

export const Timer = () => {
    const [toggle,setToggle]  = useState(false);
    console.log("Timer component mounted",{toggle});
 
    return (
    <div>
        <button
        onClick={() =>{
            setToggle(!toggle);
        }}>
            click me
        </button>
        {toggle && <DemoComponent />}
    </div>
  )
}

function DemoComponent(){
    console.log("This is a demo component and it is loaded as a induvidual funtion");
    
    useEffect(()=>{
       const task1 = setInterval(()=>{
        console.log("testing");
       },1000);
       return () =>{
        clearInterval(task1);
        console.log("Clearrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr");
       }
    },[])

    return <h1>Democomponent from h1</h1>
}
