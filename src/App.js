
import './App.css';
import { useState } from 'react';
import CounterA from './components/CounterA.jsx';
import CounterB from './components/CounterB.jsx';

function App() {



  return (
    <div className="App">
      <h1>Context api </h1>

      <CounterA />

      <CounterB />


    </div>
  );
}

export default App;
