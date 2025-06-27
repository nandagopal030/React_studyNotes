
import { useEffect, useState } from 'react';
import './GitHubUsers.css';


export const GitHubUsers = () => {

    const [users, setUsers] = useState([]);
    const [loading, setLoading]  = useState(true);
     async function fetchUser (){
        try{
            const api = await fetch('https://api.github.com/users');
            const result = await api.json();
            setUsers(result);
            setLoading(false);
        }catch(error){
            setLoading(true);
        }
    } 
    
    useEffect(() =>{
      setTimeout(()=>{ fetchUser()}, 4000);
    },[]);
    if(loading){
        return <p>Loading.....</p>
    }

    if(!loading){


  return (
       
       <div className="users">
        <h1>GitHub Users List</h1>
        <ul>
            {users.map((user) => {
                const {id,avatar_url, login, html_url} = user;
                return (
                <li key={id}>
                <img src={avatar_url} alt={login}/>
                <p>{login}</p>
                <a href={html_url} className='profile-btn'>Profile</a>
                </li>
                )
            })}
        </ul>
       </div>
           
  )
  }
}
