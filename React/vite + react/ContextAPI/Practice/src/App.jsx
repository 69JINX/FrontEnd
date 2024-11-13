import { useState,useContext } from 'react'
import './App.css'
import Component from './component.jsx';
import {counterContext} from './Context/Context.jsx'

function App() {

  const [count,setCount,abc] = useContext(counterContext);

  return (
    <>
        <Component/>
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
        </div>
    </>
  )
}

export default App
