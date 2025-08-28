import React from 'react';
import { useReducer } from 'react';
// import { Greet } from './components/Greet';
// import Welcome from './components/Welcome'
// import Hello from './components/Hello';
// import Message from './components/Message'
// import Counter from './components/Counter'
import './App.css';
// import FunctionClick from './components/FunctionClick';
// import ClassClick from './components/ClassClick';
// import EventBind from './components/EventBind';
// import ParentComponent from './components/ParentComponent';
// import UserGreetings from './components/UserGreetings';
// import NameList from './components/NameList';
// import Stylesheets from './components/Stylesheets';
// import Inline from './components/Inline';
import styles from './appStyles.module.css'
// import ComponentC from './react_hooks_from_playlist_44/useContextHooks/ComponentC';
// import CounterOne from './react_hooks_from_playlist_44/useReducer/CounterOne';
// import CounterTwo from './react_hooks_from_playlist_44/useReducer/CounterTwo';
// import CounterThree from './react_hooks_from_playlist_44/useReducer/CounterThree';
import ComponentA from './react_hooks_from_playlist_44/useReducer/useReducer with useContext/ComponentA';
import ComponentB from './react_hooks_from_playlist_44/useReducer/useReducer with useContext/ComponentB';
import ComponentC from './react_hooks_from_playlist_44/useReducer/useReducer with useContext/ComponentC';
// import FunctionalArrayHooks from './react_hooks_from_playlist_44/statehooks/FunctionalArrayHooks';
// import DataFetching from './react_hooks_from_playlist_44/useeffecthooks/DataFetching';
// import './appStyles.css';
// import Form from './components/Form/Form';
// import LifeCycleA from '../src/components/LifeCycle/LifeCycleA'
// import FragmentDemo from './components/Fragments/FragmentDemo';
// import Table from './components/Fragments/Table';
// import ParentComponents from './components/PureComponent/ParentComponents';
// import ClassCounter from './react_hooks_from_playlist_44/statehooks/ClassCounter';
// import FunctionalCounter from './react_hooks_from_playlist_44/statehooks/FunctionalCounter';
// import FunctionalCounterTwo from './react_hooks_from_playlist_44/statehooks/FunctionalCounterTwo';
// import FunctionalInputHooks from './react_hooks_from_playlist_44/statehooks/FunctionalInputHooks';
// import HookCounterOne from './react_hooks_from_playlist_44/useeffecthooks/HookCounterOne';
// import HookMouse from './react_hooks_from_playlist_44/useeffecthooks/HookMouse';
// import HookMouseContainer from './react_hooks_from_playlist_44/useeffecthooks/HookMouseContainer';
// import IntervalHookCounter from './react_hooks_from_playlist_44/useeffecthooks/IntervalHookCounter';
// export const userContext = React.createContext();
// export const channelContext = React.createContext();

const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case 'increment':
      return state + 1
    case 'decrement':
      return state - 1
    case 'reset':
      return initialState
    default:
      return state
  }
}
export const CountContext = React.createContext();
function App() {
  const [count, dispatch] = useReducer(reducer, initialState)

  return (
    <div className='App'>

      {/* codeevalution react_hooks_playlist_44 */}

      {/* <ClassCounter /> */}
      {/* <FunctionalCounter /> */}
      {/* <FunctionalCounterTwo /> */}
      {/* <FunctionalInputHooks /> */}
      {/* <FunctionalArrayHooks /> */}
      {/* <HookCounterOne /> */}
      {/* <HookMouse /> */}
      {/* <HookMouseContainer /> */}
      {/* <IntervalHookCounter /> */}
      {/* <DataFetching /> */}

      {/* <userContext.Provider value={'nanda------'}>
        <channelContext.Provider value={'channel context props'}>
          <ComponentC />
        </channelContext.Provider>
      </userContext.Provider> */}

      {/* <CounterOne /> */}
      {/* <CounterTwo />  */}
      {/* <CounterThree /> */}

      {/* nested component A - F and useReducer with useContext */}
      <CountContext.Provider value={{ countState: count, countDispatch: dispatch }}>
        Count - {count}
        <ComponentA />
        <ComponentB />
        <ComponentC />
      </CountContext.Provider>


      {/* <Greet name ="Ram" heroName ="Developer" >
   <ParentComponents />
    <Table />
    <FragmentDemo />
    <LifeCycleA />
     <Form />
    <h1 className={styles.success}>success</h1>
    <h1 className='error'>Error</h1>
      <Inline />   
      <Stylesheets primary ={true} />
     <NameList />
     <UserGreetings />
      <ParentComponent />
      <EventBind />
      <ClassClick />
      <FunctionClick />
      <Greet name="Lokesh " heroName="Product Owner" />
      <Counter />
      <Message />
      <p>I am a children</p>  
      </Greet >
      <Greet name ="dinesh" heroName ="Product Manager">
      <button>Click me</button>
      </Greet>
      <Greet name ="Lokesh  " heroName = "Product Owner" />
      <Welcome name="pragades" heroName ="tech Expert" /> 
         <Welcome name="Siva" heroName = "Friend"/> 
         <Welcome name= "Nanda" heroName="Web Dev React"/> 
         <Hello /> */}
    </div>
  );
}

export default App;
