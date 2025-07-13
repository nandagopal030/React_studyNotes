import logo from './logo.svg';
import React from 'react';
import './App.css';
import Home from './component/Home'
// import About from './component/About'
import {Routes, Route} from 'react-router-dom'
import { Navbar } from './component/Navbar';
import OrderSummary from './component/OrderSummary';
import NoMatch from './component/NoMatch';
import Products from './component/Products';
import Featured from './component/Featured';
import New from './component/New';
import Users from './component/Users';
import UserDetails from './component/UserDetails';
import Admin from './component/Admin';
import Profile from './component/Profile';
import { AuthProvider } from './component/Auth';
import { Login } from './component/Login';
import RequireAuth from './component/RequireAuth';
const LazyAbout = React.lazy(()=> import('./component/About'));

function App() {
  return (
    <>
    <AuthProvider >

    
    <Navbar />
   <Routes>
      <Route path='/' element= {<Home />}></Route>
      <Route path='*' element ={<NoMatch />} /> 
      <Route path='about' element= 
      {<React.Suspense fallback ="Loading...">
        <LazyAbout />
      </React.Suspense>}>
      </Route>
      <Route path='products' element ={<Products />}>
          <Route index element = {<Featured />} />
          <Route path='featured' element ={<Featured />}></Route>
          <Route path='new' element = {<New />}></Route>
      </Route>
      <Route path='order-summary' element = {<OrderSummary />}/>
      {/* Dynamic Routing */}
      <Route path ="/users" element ={<Users />} > 
      <Route path=':userId' element ={<UserDetails />}/>
      <Route path='admin' element= {<Admin />}/>
      </Route>
       <Route path='profile' element= {
        <RequireAuth>
           <Profile />
        </RequireAuth>}
       />
       <Route path='login' element ={<Login />} />

   </Routes>
   </AuthProvider>
    </>
  );
}

export default App;
