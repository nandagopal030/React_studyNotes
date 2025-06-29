import { useLoaderData } from 'react-router-dom'

const Users = () => {

  const userDetail = useLoaderData();
  return (
    <div>{userDetail.name}
     {userDetail.email}
     </div>
  )
}

export default Users