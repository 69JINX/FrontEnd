import { useState } from 'react'
import './App.css'
import {counterContext} from './Context/Context.jsx'
import Component from './component.jsx';

function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <counterContext.Provider value={count}>
        <Component/>
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
        </div>
      </counterContext.Provider>
    </>
  )
}

export default App
