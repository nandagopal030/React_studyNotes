import { Header } from "./Header"
import {BrowserRouter,Routes,Route} from "react-router-dom"
import {Home} from "./Home"
import {Cart} from "./Cart"
import './ShoppingCartApp.css'

export const ShoppingCartMain = () => {
  return (
    <>
    <BrowserRouter>
     <Header />
     <div className="container">
    <Routes>
        <Route path ="/" element = {<Home />}/>
    </Routes>
    <Routes>
        <Route path ="/Cart" element = {<Cart />}/>
    </Routes>
     </div>  
    </BrowserRouter>
    
    </>
  )
}
