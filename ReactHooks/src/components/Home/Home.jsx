import React, { useState } from 'react'
import './home.css'
import  {Cart} from '../state/Cart';
export const Home = () => {
  const [productName, setProductName] = useState('');
  const [price, setPrice] = useState();
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (e) =>{
    e.preventDefault();
    if(productName && price){
      const newProducts = [{
         id : Date.now(),
         name : productName,
         price :price
    }]
   setCartItems([...cartItems, {
   id: Date.now(),
   name: productName,
   price: price
}]);

    setPrice('');
    setProductName('');
    }
  
  }

  return (
    <div>
        <h1>shopping cart</h1>
        <form className='form' onSubmit={handleAddToCart}>
            <label htmlFor="productname">Product Name</label>
            <input type="text"  id="productname"  value={productName} onChange={(e) =>setProductName(e.target.value)}/>
              <label htmlFor="price">Price</label>
            <input type="text"  id="price" value={price}   onChange={(e) =>setPrice(e.target.value)}/>
            <button type='submit' className='btn-submit'>
               Add to Cart
            </button>
            
        </form>
        <Cart products={cartItems} setProducts={setCartItems}/>
    </div>
  )
}
