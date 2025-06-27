import  { useState } from 'react'
import '../css/RegForm.css'
export const RegForms = () => {
    const [user,setUser] = useState({
        name:"Ram",
        age:32,
        gender: "Female",
        isMarried: false,
        country:"Norway",
        bio:"Write anything about yourself"
    });
    function handleClick(e){
        const name = e.target.name;
        // console.log(name);
        const value  = e.target.type === "checkbox" ? e.target.checked : e.target.value;
        setUser({...user,[name]:value});

    }
  return (
    <>
     <table>
        <tbody>
            <tr>
                <td>Name</td>
                <td>{user.name}</td>
            </tr>
             <tr>
                <td>Age</td>
                <td>{user.age}</td>
            </tr>
            <tr>
                <td>Gender</td>
                <td>{user.gender}</td>
            </tr>
            <tr>
                <td>isMarried</td>
                <td>{user.isMarried ? "Married" : "Not Married"}</td>
            </tr>
            <tr>
                <td>Country</td>
                <td>{user.country }</td>
            </tr>
             <tr>
                <td>Bio</td>
                <td>{user.bio }</td>
            </tr>
        </tbody>
     </table>
     <form >
        <input type="text" name="name" id="name" placeholder='Full Name' onChange={handleClick} value={user.name}/>
        <input type="text" name='age' id='age' placeholder='Age' onChange={handleClick}  value={user.age}/>
        <div className='gender'>
          <label htmlFor="male">
            <input type="radio" name="gender" id="male" onChange={handleClick} checked ={user.gender == "Male"} value="Male" /> Male
          </label>
          <label htmlFor="female">
            <input type="radio" name="gender" id="female" onChange={handleClick} checked ={user.gender == "Female"} value="Female"/> Female
          </label>
          <label htmlFor="isMarried">
            <input type="checkbox" name="isMarried" onChange={handleClick}  id='isMarried' checked = {user.isMarried == true} value={user.isMarried} /> isMarried
          </label>
          <div>
            <label htmlFor="country">Select Country</label>
            <select className='select-div' name="country" id="country" value={user.country} onChange={handleClick}>
                <option value="India">India</option>
                <option value="Finland">Finland</option>
                <option value="Norway">NorWay</option>
            </select>
          </div>
          <textarea name="bio" value={user.bio} onChange={handleClick} id="bio" rows='5' cols='30'></textarea>
        </div>
     </form>

    </>
  )
}
