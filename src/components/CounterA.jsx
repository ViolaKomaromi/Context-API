

import React, {useContext} from 'react';
import {CounterContext} from '../storeA/CounterContext.jsx';

export default function CounterA() {

    const {
        incrementHandlerA,
        counterA,
        decrementHandler,
        resetHandlerA,
    } = useContext(CounterContext);


    return (
        <div>
            <h2>Counter A </h2>
            <div className="Container">
        <button className='Button' onClick={incrementHandlerA}>+</button>
        <span className='Counter'>Counter : {counterA}</span>
        <button className='Button' onClick={decrementHandler}>-</button>
        <span className='Reset' onClick ={resetHandlerA}> Reset A </span>

      </div>


        </div>
    );
}

