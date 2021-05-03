

import React, {useContext} from 'react';

import {CounterContext} from '../storeA/CounterContext.jsx';


export default function CounterB(){
    const {
        incrementHandlerB,
        counterB,
        decrementHandlerB,
        resetHandlerB,
    } = useContext(CounterContext);
 
    return (
        <div>
            <div className="Container">
                <h2>Counter B </h2>
                <button className='Button' onClick={incrementHandlerB}> + </button>

                <span className='Counter'>Counter : {counterB}</span>

                <button className='Button' onClick={decrementHandlerB}> - </button>

                <span className='Reset' onClick={resetHandlerB}> Reset B</span>

            </div>


        </div>
    );
}
