import React from 'react'
import './Product.css'
export const Product = ({product}) => {
 
  const  name = product.name.length > 21 ? product.name.subString()

  return (
  <div className="product">
    <div className="img">
      <img src={product.pic} alt={product.name} />
    </div>
    <div className="details">
    <h3>{product.name}</h3>
    <p>Price is :{product.amt}</p>
    <button>Add To Cart</button>
    </div>
    
  </div>
  )
}
