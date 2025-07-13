import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Products = () => {
  return (
   <>
   <input type='search'
          placeholder='search producs'
   />
   <nav>
     <Link to='featured'>Featured</Link>
     <Link to='new'>new</Link>
   </nav>
   <Outlet />
   </>
  )
}

export default Products