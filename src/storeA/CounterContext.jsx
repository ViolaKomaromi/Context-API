
import { createContext, useState } from 'react';


const CounterContext = createContext({
    counter: 0,
    incrementHandlerA: () => { },
    decrementHandlerA: () => { },
    resetHandlerA: () => { }

})

const CounterProvider = (props) => {

    const [counterA,  setCounterA] = useState(0);
    const [counterB,  setCounterB] = useState(0);
    const incrementHandlerA = () => setCounterA(counterA + 1);
    const incrementHandlerB = () => setCounterB(counterB + 1);

    const decrementHandlerA = () => setCounterA(prvCounter => prvCounter - 1);
    const decrementHandlerB = () => setCounterB(prvCounter => prvCounter - 1);

    const resetHandlerA = () => {
         setCounterA(0);
    }
    const resetHandlerB = () => {
        setCounterB(0);
   }  

        return (
            <CounterContext.Provider
                value={{
                    counterA,
                    counterB,
                    incrementHandlerA,
                    incrementHandlerB,
                    decrementHandlerA,
                    decrementHandlerB,
                    resetHandlerA,
                    resetHandlerB
                }}>

                {props.children}
            </CounterContext.Provider>

        );
    };


    export  { CounterContext, CounterProvider };




