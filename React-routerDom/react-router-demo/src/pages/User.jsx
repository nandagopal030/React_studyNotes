import { Link, useLoaderData } from "react-router-dom";


const User = () => {
    const users = useLoaderData();
  return (
   <div className="container">
    <h1>Users</h1>
    <div className="users">
          {users.map((user) =>{
        return(
            <Link to={user.id.toString()} key={user.id}>
        <div  className="user">
            <h4>{user.name}</h4>
            <p>{user.email}</p>
        </div>
            </Link>
        );
    })}
    </div>
   </div>
  )
}

export default User

