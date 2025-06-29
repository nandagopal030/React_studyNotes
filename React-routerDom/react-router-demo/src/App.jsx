import Home from "./pages/Home"
import './App.css'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider, Routes} from 'react-router-dom'
import Products from "./pages/Products"
import About from "./pages/About"
import RootLayout from "./layout/RootLayout"
import Login from "./pages/Login"
import ContactLayout from "./layout/ContactLayout"
import Info from "./components/info"
import Form from "./components/Form"
import NotFound from "./pages/NotFound"
import UserLayout from "./layout/UserLayout"
import User from "./pages/User"
import { UserLoader, UserSingleLoader } from "./utils/UserLoader"
import Users from "./components/Users"

function App() {
  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
          <Route index element={<Home />}></Route>
          <Route path= "products" element={<Products />}></Route>
          <Route path= "about" element={<About />}></Route>
           <Route path="contact" element={<ContactLayout/>}>
                <Route path="info" element={<Info />} />
                <Route path="form" element={<Form />} />
           </Route>
          <Route path= "login" element={<Login />}></Route>
          <Route path="*" element={<NotFound />}></Route>
          <Route path="users" element={<UserLayout />}>
              <Route index element={<User />} loader={UserLoader}></Route>
              <Route path=":id" element={<Users />} loader={UserSingleLoader}></Route>
          </Route>
    </Route>
  ))
  return <RouterProvider router={router}></RouterProvider>
}

export default App
