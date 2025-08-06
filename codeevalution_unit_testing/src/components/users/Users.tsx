// import { useEffect, useState } from "react"

// export const Users = () =>{
//     const [users, setUsers] = useState<string[]>([]);
//     const [error, setError] = useState<string | null>(null);
//     useEffect(()=>{
//         fetch("https://jsonplaceholder.typecode.com/users")
//         .then((res)=> res.json())
//         .then((data)=> setUsers(data.map((user:{name: string}) => user.name)))
//         .catch(()=> setError("Error Fetching Users"));
//     })
//     return(
//         <div>
//             {error && <p>{error}</p>}
//             <ul>
//                 {users.map((user) =>(
//                     <li key = {user}>{user}</li>
//                 ))}
//             </ul>
//         </div>
//     )
// }