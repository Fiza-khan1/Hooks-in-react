// Page.js
import React, { useContext } from 'react';
import { ThemeContext } from './component1';
 //value={light}
function Page() {
  const themes = useContext(ThemeContext); 
  return (
    <div style={{ background: themes === 'light' ? '#fff' : '#333', color: themes=== 'light' ? '#000' : '#fff' }}>
      <p>Current Theme: {themes}</p>
    </div>
  );
}

export default Page;
