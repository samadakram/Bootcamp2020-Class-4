import React, { useState } from 'react';
import Counter from './Counter';
import './App.css';

function App(){

  let [count, setCount] = useState(0)

  return(
    <div className="main">
      <Counter process={count} />
      <button className="increment" onClick={()=> setCount(++count)}>Increment</button>
      <button className="reset" onClick={()=> setCount(0)}>Reset</button>
      <button className="decrement" onClick={()=> setCount(--count)}>Decrement</button>
    </div>
  );
}

export default App;