import React, { useEffect, useRef, useState } from 'react'
import './LoginForm.css';

export const LoginForm = () => {
  const [email, setEmail] = useState();
  const [password, setpassword] =  useState();

  
 const refContainer = useRef(null);

 useEffect(()=>{
   console.log(refContainer);
   console.log(password);
   console.log("useEffect triggered");
 },[])

  const handlePassword =(e) =>{
   const passwordInput = e.target.value;
   console.log(passwordInput);
   setpassword(passwordInput);
  }

  const handleLogin = (e) =>{
       e.preventDefault();
       const emailAddress = refContainer.current.value;
       console.log({email: emailAddress, password : password});
       refContainer.current.value = "";
  }

  const [count, setCount] = useState(0);
  let initialRender = useRef(true);
   
  useEffect(()=>{
     if(initialRender){
       initialRender =false;
     }
    console.log("Use effect - 2 is triggered ", count);
  },[count]);

    return (
    <>
    <div className='container'>
        <h1>Login Form</h1>

        <form  onSubmit={handleLogin}>
        <label htmlFor="email">Email :</label>
        {/* UnControlled Input */}
        <input type="email"  
         ref={refContainer} />
        <label htmlFor="password">Password : </label>
        {/* Controlled Input */}
        <input type="text" 
        value={password}
        onChange=
        {handlePassword}
        />
        <button>Submit</button>
        </form>
        <p>Counter function : {count}</p>
        <button onClick={() =>{setCount(count + 1)}}>Click me </button>

    </div>
    
    </>
  )
}
