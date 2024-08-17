import { useEffect, useReducer,useMemo} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function MyApp() {
  function reducer(state, action) {
    switch (action.type) {
      case 'increment':
        return { ...state, count: state.count + 1 };
      case 'decrement':
        return { ...state, count: state.count>0 ? state.count-1 : state.count=0 };
      case 'reset':
        return { ...state, count: 0 };
      case 'toggle':
        return { ...state, on: !state.on };
      case 'show':
        return { ...state, hidden: !state.hidden };
      case 'changeText':
        return {...state,number:action.payload}
      default:
        throw new Error();
    } 
  }


  

  const initialState = { count: 0, hidden: false, on: false,number:0 };
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    document.body.style.backgroundColor=state.on ? 'yellow' : 'grey'
  }, [state.on])
  
  

  const fact=useMemo(()=>{
    let num = state.number;
    let result = 1;

    for (let i = num; i > 1; i--) {
      result *= i;
      
    }

    return result;

},[state.number])

const handlesubmit=(e)=>{
  e.preventDefault()
  console.log("Factorial is", fact);

}

  const handleInputChange = (e) => {   
    dispatch({ type: 'changeText', payload: e.target.value });
  };
  console.log(state.number)
  return (
    <div className="container mt-5">
      <div className="text-center">
        {!state.hidden && (
          <div className="mb-4">
            <h2>Counter: {state.count}</h2>
            <button 
              className="btn btn-success mx-2"
              onClick={() => dispatch({ type: 'increment' })}
            >
              Increment
            </button>
            <button 
              className="btn btn-danger mx-2"
              onClick={() => dispatch({ type: 'decrement' })}
            >
              Decrement
            </button>
            <button 
              className="btn btn-secondary mx-2"
              onClick={() => dispatch({ type: 'reset' })}
            >
              Reset
            </button>
          </div>
        )}
        <button 
          className="btn btn-info mx-2"
          onClick={() => dispatch({ type: 'show' })}
        >
          {state.hidden ? 'Show Counter' : 'Hide Counter'}
        </button>

        <button 
          className={`btn ${state.on ? 'btn-warning' : 'btn-dark'} mx-2`}
          onClick={() => dispatch({ type: 'toggle' })}
        >
          {state.on ? 'Light is On' : 'Light is Off'}
        </button>
      <form onSubmit={handlesubmit}>
        <h3 className="mt-5">Enter a number to check factorial </h3>
     <input type="number"  value={state.number} placeholder="Enter number"  onChange={handleInputChange} /> 
     <button type="submit">Submit</button>
       </form>   
      </div>
      <h1>Factiorial is {fact}</h1>
    </div>

    
  );

}
export default MyApp;
