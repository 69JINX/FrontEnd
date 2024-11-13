import { useContext, useState } from 'react'
import './App.css'
import { counterContext } from './Context/Context';

function App() {
  const {count,setCount}=useContext(counterContext);
  return (
    <>
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
        </div>
    </>
  )
}

export default App
