import React, { useContext } from 'react'
import { counterContext } from './Context/Context';

function Component() {
  const [count, abc, xyz, negcount, setnegcount] = useContext(counterContext);
  return (<>
    <h1>Count is : {count} & {
      console.log(abc)
    } & {xyz}</h1>
    
    <div className="card">
      <button onClick={() => setnegcount((count) => count + 1)}>
        Component count is {negcount}
      </button>
    </div>
  </>
  )
}

export default Component