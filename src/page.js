import { useEffect, useReducer } from "react";
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
      default:
        throw new Error();
    }
  }


  

  const initialState = { count: 0, hidden: false, on: false };
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    document.body.style.backgroundColor=state.on ? 'yellow' : 'grey'
  }, [state.on])


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
      </div>
    </div>
  );
}

export default MyApp;
