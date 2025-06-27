import React from 'react'
import { useState } from 'react';
// this full set of code is filled with objectType variable functionality

export const UserForms = () => {
   
    const [user,setUser] = useState({fname:"nanda",lname:"kumar",  age: 32});

    // the below functions are used for particular change of name and age events

    // function changeName(e){
    //     // alert(e.target.value);
    //     setUser((oldState)=>{
    //         return {...oldState,name:e.target.value};  //by using the spread operator all the useState Objects will be carried upon and then particularly selecting the name:e.target.value; where e is the passed parameter value from the input field
    //     })
    // }
    // function changeAge(e){
    //      setUser((oldState)=>{
    //     return {...oldState,age:e.target.value};
    //     })
    // }

    //instead of creating a particular name and age as an induvidual component it can be done in a single function
    function changeEverything(e){
        setUser({...user,[e.target.name]:e.target.value});  //the ...user describes the previous object value and the object type data can be accesed through the dot(.) type notation and also can be accessed through the [](square bracket side notation aswell )
    }
  return (
    <>
     <form action="">
        <h1>{user.fname}</h1>
        <input type="text" placeholder='Enter your fname'name='fname' onChange={changeEverything} />
        <h1>{user.lname}</h1>
        <input type="text" placeholder='Enter your lname'name='lname' onChange={changeEverything} />
         <h1>{user.age}</h1>
        <input type="number" placeholder='Enter your Age' name='age' onChange={changeEverything} />
     </form>
    </>
  )
}
