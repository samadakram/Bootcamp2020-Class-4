import React, { useState } from 'react';

function App(){

  let [count, setCount] = useState(0);

  return(
    <div>
      <h1>Value of counter is: {count}</h1>
      <button onClick={() => setCount(++count)}>Increment</button>
      <button onClick={() => setCount(--count)}>Decrement</button>
    </div>
  );
}

export default App;