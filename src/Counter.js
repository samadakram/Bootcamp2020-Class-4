import React from 'react';
import './App.css';

function Counter(props){
    return(
        <div>
            <div className="counter-box">{props.process}</div>
        </div>
    );
}

export default Counter;