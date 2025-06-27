 
import './App.css'
// import { GitHubUsers } from './components/useEffectExample/GitHubUsers'
// import { Timer } from './components/useEffectExample/Timer'
// import { Counter } from './components/state/Counter'
// import { Cart } from './components/state/Cart'
// import { UseEffectExample } from './components/useEffectExample/useEffectExample'
import {Home } from './components/Home/Home'
import { SortingMemo } from './components/memo/SortingMemo'
import { LoginForm } from './components/ref/LoginForm'
import { StudentData } from './components/UseContextExample/StudentData'
import { WithoutTransition } from './components/useTransition/WithoutTransition'
import { ListTransiton } from './components/useTransition/ListTransition'

function App() {


  return (
    <>
    {/* <Counter /> */}
    {/* <Cart /> */}
    {/* <UseEffectExample /> */}
    {/* <GitHubUsers /> */}
    {/* <Timer /> */}
    {/* <Home /> */}
    {/* <LoginForm /> */}
    {/* <StudentData /> */}
    {/* <SortingMemo /> */}
    {/* < WithoutTransition /> */}
    <ListTransiton />
    </>
  )
}

export default App
