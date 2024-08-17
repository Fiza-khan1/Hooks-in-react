
import { useState,useMemo,useCallback } from "react";
import Todo from './todosApp'

const expensiveCalculation = (num) => {
  console.log("Calculating...");
  for (let i = 0; i < 1000000000; i++) {
    num += 1;
  }
  return num;
};
function App(){
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);
  const calculation = useMemo(() => expensiveCalculation(count), [count]);

  const increment = () => {
    setCount((c) => c + 1);
  };
  const addTodo =useCallback( () => {
    setTodos((t) => [...t, "New Todo"])
  },[todos]);

  return (
    <div>
     <Todo todos={todos} addTodo={addTodo} ></Todo>
      <div>
        Count: {count}
        <button onClick={increment}>+</button>
        <h2>Expensive Calculation</h2>
        {calculation}
      </div>
    </div>
  );
};

export default App;