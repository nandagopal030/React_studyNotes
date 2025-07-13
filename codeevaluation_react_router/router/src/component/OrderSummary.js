import React from 'react'
import { useNavigate } from 'react-router-dom'

const OrderSummary = () => {
    const navaigate = useNavigate();
  return (
    <div>
        <h1>Order confiremd !!!</h1>
        <button onClick={()=> navaigate(-1)}>Go back</button>
    </div>
  )
}

export default OrderSummary