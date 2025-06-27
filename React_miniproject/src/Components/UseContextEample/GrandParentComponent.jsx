import { createContext } from 'react'
import { ParentComponent } from './ParentComponent'

export const GrandContext = createContext();

export const GrandParentComponent = () => {
   const data = " i am a accasc from grandparent"
    return (
    <div className='box'>
        <GrandContext.Provider value ={data} >
        <h2>Grandparent</h2>
        <ParentComponent />
        </GrandContext.Provider>
       
    </div>
  )
}
