// App.js
import React, { useState } from 'react';
import { CounterContext } from './component1';
import Page from './page';

function App() {
  
  const [count,setCount]=useState(0)
  const increment=()=>{
    setCount(count+1)
    
  }
  const decrement=()=>{
    setCount(count-1)
    
  }
  return (
    <CounterContext.Provider value={{ count, increment, decrement }}>  
       <Page/>
    </CounterContext.Provider>
  );
}
export default App;