import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [count,setCount]=useState(0)
  
  const handleInc=()=>{
    setCount(count+1)
  }
  const handleDec=()=>{
    setCount(count-1)
  }
  
  return (
    <div className="App">
      <h1>counter={count}</h1>
      <button onClick={handleInc}>+</button>
      <button onClick={handleDec}>-</button>
    </div>
  );
}

export default App;
