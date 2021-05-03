

import React, {useContext} from 'react';
import {CounterContext} from '../storeA/CounterContext.jsx';

export default function CounterA() {

    const {
        incrementHandlerA,
        counterA,
        decrementHandlerA,
        resetHandlerA,
    } = useContext(CounterContext);


    return (
        <div>
            <h2>Counter A </h2>
            <div className="Container">
        <button className='Button' onClick={incrementHandlerA}>+</button>
        <span className='Counter'>Counter : {counterA}</span>
        <button className='Button' onClick={decrementHandlerA}>-</button>
        <span className='Reset' onClick ={resetHandlerA}> Reset A </span>

      </div>


        </div>
    );
}

