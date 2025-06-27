import { useState } from "react"

export const Cart = () => {
  const [cartCount,setCartCount] = useState(0);
 const handleClick = () => setCartCount(cartCount + 1);
 const decrement = () => setCartCount(cartCount -1);
 const multiplyByTwo = () => setCartCount(cartCount * 2);
  return (<>
    <h2>This is a cart componet working : {cartCount}</h2>
    <button onClick={handleClick}>click me to increase</button>
    <button onClick={decrement}>Decrease button</button>
    <button onClick={multiplyByTwo}> {cartCount}click me to multiply by 2</button>
  </>)
}
