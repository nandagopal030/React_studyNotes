import { useState } from "react"

const [user, setUser] = useState({name: "nanda", age : 21});
const handleUserName = () =>{
    // setUserName("Gopal")   // normal function call change of data 
    // userName == "Nanda"  ? setUserName("Gopal") : setUserName("Nanda")  //using ternary operater by using onClick events all the name data is being changed again and again
    setUser({...user,name:"Gopal"});   //This spread operator ...user describes that all the previous values will be fetched from the user object which was been created in the useState of user and setUser
};
const handleUserAge = () => {
    // setUserAge(30)
    // userAge == 21 ? setUserAge(25) : setUserAge(21);
    setUser({...user,age:77});     //This spread operator ...user describes that all the previous values will be fetched from the user object which was been created in the useState of user and setUser
};

export const UserDetails = () => {
  return (<>
    <h1>Username</h1>
    <h3>{user.name}</h3>

    <h1> UserAge</h1>
    <h3>{user.age}</h3>

    <button onClick={handleUserName}>Click to change the userName</button>
    <button onClick={handleUserAge}>Click to change the Age</button>
  
  </>)
}