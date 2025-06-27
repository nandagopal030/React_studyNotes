import { useState } from 'react';

import '../css/PasswordGenerator.css'


export const PasswordGenerator = () => {
  const [length,setLength] = useState(8);
  
  const[includeUppercase, setUppercase] = useState(true);
  const[includeLowercase, setLowercase] = useState(true);
  const[includeNumbers, setNumbers] = useState(true);
  const[includeSymbols, setSymbols] = useState(true);

  const[password, setPassword] = useState("");

  const generatePassword = () =>{
    let charset = "";
    if(includeUppercase) charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if(includeLowercase) charset += "abcdefghijklmnopqrstuvwxyz";
    if(includeNumbers) charset += "12345678910";
    if(includeNumbers) charset += "!@#$%^&*()-_=+[]{}|;:'";
    let generatePassword = "";
    for(let i =0; i< length; i++){
        const randomIndex = Math.floor(Math.random() *charset.length);
        generatePassword += charset[randomIndex];
    }
    setPassword(generatePassword);

  }
  const copyToClipBoard = ()=>{
    navigator.clipboard.writeText(password);
    alert("password copied")
  }


    return (
    <>
    <div className="password-generator">
        <h2>Strong Password Generator</h2>
   
    <div className="input-group">
        <label htmlFor="num"> Password Length</label>
        <input type="number" id='num' value={length} onChange={(e) => setLength(parseInt(e.target.value))}/>
    </div> 
    <div className="checkbox-group">
        <input type="checkbox" id='upper' checked ={includeUppercase}
        onChange={(e)=> setUppercase(e.target.checked)}
        />
        <label htmlFor="upper">Include UpperCase</label>
    </div>
     <div className="checkbox-group">
        <input type="checkbox" id='lower' checked ={includeLowercase} 
         onChange={(e)=> setLowercase(e.target.checked)}
        />
        <label htmlFor="lower">Include LowerCase</label>
    </div>
     <div className="checkbox-group">
        <input type="checkbox" id='numbers' checked ={includeNumbers} 
          onChange={(e)=> setNumbers(e.target.checked)}
        />
        <label htmlFor="numbers">Include Numbers</label>
    </div>
     <div className="checkbox-group">
        <input type="checkbox" id='symbol' checked ={includeSymbols} 
          onChange={(e)=> setSymbols(e.target.checked)}
        />
        <label htmlFor="symbol">Include symbol</label>
    </div>
    <button className='generate-btn' onClick={generatePassword}>Generate Password</button>
    <div className="generate-password">
        <input type="text" value={password} readOnly />
        <button className='copy-btn' onClick={copyToClipBoard}>Copy</button>
    </div>
     </div>
    </>
  )
}
