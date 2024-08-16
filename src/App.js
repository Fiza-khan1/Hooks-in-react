// App.js
import React, { useState } from 'react';
import { ThemeContext } from './component1';
import Page from './page';

function App() {
  const [theme, setTheme] = useState('dark');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={theme}>  
      <button onClick={toggleTheme}>Toggle Theme</button>
      <Page />
    </ThemeContext.Provider>
  );
}

export default App;
