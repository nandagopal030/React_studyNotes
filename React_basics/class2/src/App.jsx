import './css/App.css'
import { ArraySample2 } from './components/ArraySample2'
import { ArraySample } from './components/ArraySample'
import { OneOfSample } from './components/OneOfSample'
import { TwoOfSample } from './components/TwoOfSample'
import { MultiTypeComponent } from './components/MultiTypeComponent'
import { FunctionSample } from './components/FunctionSample'
import { Students } from './components/Students'
import { Teacher } from './components/Teacher'
import { ChildComponent } from './components/ChildComponent'
import { Child2 } from './components/Child2'
function App() {
  const items = [
    {id : 1, name : "item1"},
    {id : 2, name : "item2"},
    {id : 3, name : "item2"},
  ]
  const click = () =>{
    alert("Ouch I am clicked by you");
  }

  return (
    <>
      <h1>Hello world</h1> */
     {/* <Students  name ="nanda" age = {21} ismarried = {false}/> */}
      <Students  name ="banda" age = {31} ismarried = {true}/>
      <Students  name ="Raanga" age = {41} ismarried = {true}/> 
     <Teacher firstname ="nanda" lastname = "gopal" age = {21} rollno = {543} /> 
      <Teacher />
      <ChildComponent>
        <p>THis is a child1 from the ChildComponent</p>
        <p>This is a child2 from the ChildComponent</p>
      </ChildComponent>
      <Child2>
        <h2>Hello form child2 </h2>
        <h2>Hello </h2>
      </Child2> */
      <ArraySample items = {items}/>
      <ArraySample2 cosnt items = {items}/>
      <TwoOfSample color = "black"/> 
       <MultiTypeComponent   value = {"Hellp"}/>
       <MultiTypeComponent   value = {11}/>
      <MultiTypeComponent   value = {true}/> 
      <FunctionSample handleClick = {click}/>
   
    </>
  )
}

export default App
