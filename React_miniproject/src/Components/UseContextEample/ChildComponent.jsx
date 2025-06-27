import { useContext } from "react"
import { GrandContext } from "./GrandParentComponent";

export const ChildComponent = ({data, handleClick}) => {
   const value = useContext(GrandContext);
  
    return (  
   <div className='box'>
        <h4>ChildComponent</h4>
          <p>{value}</p>
        <button onClick={handleClick}>CLick</button>
    </div>
  )
}
