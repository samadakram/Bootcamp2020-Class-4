import React, { useState } from 'react';
import Counter from './Counter';

function App(){

  let [count, setCount] = useState(0)

  return(
    <div>
      <Counter process={count} />
      <button onClick={()=> setCount(++count)}>Increment</button>
      <button onClick={()=> setCount(--count)}>Decrement</button>
      <button onClick={()=> setCount(0)}>Reset</button>
    </div>
  );
}

export default App;