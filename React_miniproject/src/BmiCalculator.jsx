import './css/BmiCalculator.css'

import { useState } from 'react';

export const BmiCalculator = () => {
    const [height, setHeight] = useState("");
    const [weight, setWeight] = useState("");
    const [bmi, setBmi] = useState(null);
    const [bmiStatus, setBmiStatus] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

const calculateBmi = () => {
    const validHeight = /^\d+$/.test(height);
    const validWeight = /^\d+$/.test(weight);

   if(validHeight && validWeight){
    const heightInMeters = height/ 100;
    const bmiValue = weight /(heightInMeters * heightInMeters);
    setBmi(bmiValue.toFixed(2));
    if(bmiValue < 18.5){
        setBmiStatus("UnderWeight");
    }else if(bmiValue >=18.5 && bmiValue < 24.9){
        setBmiStatus("Normal Weight");
    }else if(bmiValue >=25 && bmiValue < 29.9){
        setBmiStatus("OverWeight");
    }else{
        setBmiStatus("Obese");
    }
    setErrorMessage("");
   }else{
    setBmi(null);
    setBmiStatus("");
    setErrorMessage("*Please enter valid numeric value for height and weight")
   }
}

const clearAll = (e) =>{
    // const heightValue = e.target.value("");
    // const weightValue = e.target.value("");
    setHeight("");
    setWeight("");
    setBmi(null);
    setBmiStatus("");
    
}
  return (
  <>
   <div className="bmi-calculator">
     <div className="box"></div>
     <div className="data">
        <h1>BMI Calculator</h1>

       {errorMessage && <p className="error">*Please enter valid numeric value for height and weight</p>}
        <div className="input-container">
            <label htmlFor="height">Height (cm): </label>
            <input type="text" value={height} onChange={(e)=>setHeight(e.target.value)} id='height'/>
        </div>
         <div className="input-container">
            <label htmlFor="weight">weight (kg): </label>
            <input type="number"  value={weight} onChange={(e)=>setWeight(e.target.value)} id='weight'/>
        </div>
        <button onClick={calculateBmi}>CalCulate BMI</button>
          <button onClick={clearAll} style={{backgroundColor:"red",  margin : "20px" }}>Clear BMI</button>
        {bmi !==null && (<div className="result">
            <p>Your BMI is: {bmi}</p>
            <p>Status: {bmiStatus}</p>
        </div>)}
     </div>
    </div>  
  </>
  
)
}
