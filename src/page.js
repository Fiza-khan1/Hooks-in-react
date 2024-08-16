// Page.js
import React, { useContext } from 'react';
import { CounterContext } from './component1';
 //value={light}
function Page() {
  const { count, increment, decrement } = useContext(CounterContext);
  return (
   <div>
    <h2>Counter Value is :{count}  </h2>
    <button onClick={increment}>Increment</button>
    <button onClick={decrement}>Decrement</button>
   </div>
  );
}

export default Page;
