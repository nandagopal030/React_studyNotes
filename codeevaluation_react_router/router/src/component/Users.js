import React from 'react'
import { Outlet,Link, useSearchParams } from 'react-router-dom'

const Users = () => {
  const  [searchParams, setSearchParams] = useSearchParams();
  const  showActiveUSers = searchParams.get('filter') === 'active'
  return (
    <>
      <h1> <Link to ='1' >USer 1</Link> </h1>
      <h1> <Link to= '2'>USer 2</Link> </h1>
      <h1> <Link to='3'>USer 3</Link> </h1>
        <Outlet />
      <div>
        <button onClick={()=> setSearchParams({filter:'active' })}>Active Users</button>
        <button onClick={()=> setSearchParams({})}>Reset Filters</button>
      </div>
      { showActiveUSers ? (
        <h2>Showing the active users</h2>
      ) : (
        <h2>showing all the users </h2>
      )
       
      }
      
    </>
  )
}

export default Users