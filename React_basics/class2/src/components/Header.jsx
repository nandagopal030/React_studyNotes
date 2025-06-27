import React from 'react'

export const Header = () => {
    let customCss = "error";
    const isLoggedIn = false;
    const greeting  = isLoggedIn ? <p>Welcome user succesful loggin</p> : <p>Login once again</p>
    const items = ["apple", "Mango", "leomen", "Dragonfruit"];
    return (
    <div>
        <h1 className='header'>Tutor joes</h1>
        <p className='solgan'>Learn more and be smart</p>
        <p className={customCss} style = {{fontSize:"40px"}}> THis is a addition of 25 + 35 = {25 + 35}</p>
        {greeting}
        <ul>
           {items.map((item,index) =>(<li key={index}>{item}</li>))}
        </ul>
        
    </div>
  )
}
