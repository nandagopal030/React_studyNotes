
import { useEffect, useState } from 'react'
import '../css/Advice.css'
export const Advice = () => {
    const [advice,setAdvice] = useState("Please wait untill the advice loads");
    const [count,setCount] = useState(0);

async function getAdvice(){
    const res = await fetch("https://api.adviceslip.com/advice");
    // console.log(res);
    const data = await res.json();
    // console.log(data);
    setAdvice(data.slip.advice);
    setCount((c)=>c + 1);
}

useEffect (function(){
    getAdvice();
},[])
  return (
    <div>
        <h1>{advice}</h1>
        <button onClick={getAdvice}>Click me</button>
       <Counter count = {count}/> 
    </div>
  )
 function Counter(props){
    return (
           <p>You have got <b style={{color : "black"}}>{props.count}</b> pieces of advice today</p>
    )
 }
}
