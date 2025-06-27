
import data from "./Products.json"
import { useState } from 'react';
import {Product} from './Product';
import "./Home.css";
export const Home = () => {
    // console.log(data);
   const [products] = useState(data);
 
  return (
    <div className='product-container'>
        {products.map((product)=>(
            <div key={product.id}>
                <Product key ={product.id} product ={product} />
            </div>
        ))}
        
    </div>
  )
}
