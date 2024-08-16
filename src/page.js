import {  useReducer } from "react";

function MyApp(){

  function reducer(state,action){
    console.log(action.type)
    console.log("ACTION",action)
      switch(action.type){
        case 'increment':
        return { count: state.count + 1 ,hidden:state.hidden=true};
      case 'decrement':
        return { count: state.count - 1 };
      case 'reset':
        return { count: 0  };
      default:
        throw new Error();
    }
  }

  const initialState = { count: 0 ,hidden:false};
  const [state,dispatch]=useReducer(reducer,initialState)

  return(
    <>
    <div>Counter {state.count}</div>
    <button onClick={() => dispatch({ type: 'increment' })}>Click to Increment</button>
    <button onClick={() => dispatch({ type: 'decrement' })}>Click to Decrement</button>
    {state.hidden ? 'Show Counter' : 'Hide Counter'}
    </>
  )



  
}


export default MyApp;