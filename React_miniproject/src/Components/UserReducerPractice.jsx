import { useReducer } from "react"

export const UserReducerPractice = () => {

  const TODO_LIST ={
    ADD_TASK:"ADD_TASK",
    DELETE_TASK:"DELETE_TASK"
  }
  
  const initialState = [];
  function reducer(state, action){
    switch(action.type){
      case TODO_LIST.ADD_TASK:
        return [...state,{id: state.length + 1, name : action.payload}];
      case TODO_LIST.DELETE_TASK:
        return state.filter((task)=> task.id !== action.payload);
      default:
        return state;
      }

  }

  const [todos, dispatch] = useReducer(reducer, initialState);

  const handleChange = (e) =>{
    if(e.key === "Enter"){
      dispatch({type:TODO_LIST.ADD_TASK, payload : e.target.value});
    }
  }
  const deleteTask  = (id) =>{
    dispatch({type:TODO_LIST.DELETE_TASK, payload:id});
  }

  return (
    <>
     <h3>Task List {todos.length}</h3>
     <label htmlFor="task">Enter the Task</label>
     <input type="text" id="task" onKeyDown={(e)=>{handleChange(e)}}  />
     <ul>
      {todos.map((todo) =>(
        <li key={todo.id}> {todo.name}
        <button onClick={() => deleteTask(todo.id)}>Delete</button>
        </li>
      ))}
     </ul>
     
    </>
  )
}
