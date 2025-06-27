import './cart.css'
import {data} from '../../data/dataset'
import { useState,useEffect } from 'react'
export const Cart = ({products, setProducts}) => {

const [totalNoOfProducts, setTotalNoOfProducts] = useState(products.length);

useEffect(() => {
  setTotalNoOfProducts(products.length);
},[products]);

const handleDeleteAll = () => {
    setProducts([]);
}

const handleDelete = (id) =>{
    const updated = products.filter((x) => x.id !== id);
    setProducts(updated)
}
const handleReset =() =>{
    setProducts([]);
}
if(products.length === 0){
  return <h1>Cart is initially empty</h1>
}
  return (
    <>
    <div className='cards'>
      <h1>items in cart : {totalNoOfProducts}</h1>
      {products.map((product) =>{
        return <div className='card' key={product.id}>
          <p>{product.name}, Rs. {product.price}</p>
          <button className='btn-delete' onClick={()=>{handleDelete(product.id)}}> Delete </button>
        </div>
      })}
      <button onClick={handleDeleteAll}>Delete all</button>
      <button onClick={handleReset}>Reset all</button>
    </div>
    
    </>
  )
}
