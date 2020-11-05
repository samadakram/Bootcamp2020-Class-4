import React, { useState } from 'react';
import Counter from './Counter';
import './App.css';

function App(){

  let [count, setCount] = useState(0);

  let [isDarkMode, setDarkMode] = useState(false);

  return(
    <div className={`container ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
      <div className="mode">
        <h5 className={isDarkMode ? 'dark-h5' : 'light-h5'}> {isDarkMode ? 'DARK MODE' : 'LIGHT MODE'} : </h5>
        <button className={(isDarkMode ? 'mode-btn-dark' : 'mode-btn-light')} onClick={()=> setDarkMode(!isDarkMode)}>Switch to {isDarkMode ? 'Light Mode' : 'Dark Mode'} </button>
      </div>
      <div className="main">
        <Counter process={count} />
        <button className="increment" onClick={()=> setCount(++count)}>Increment</button>
        <button className="decrement" onClick={()=> setCount(--count)}>Decrement</button>
        <button className="reset" onClick={()=> setCount(0)}>Reset</button>
      </div>
    </div>
  );
}

export default App;