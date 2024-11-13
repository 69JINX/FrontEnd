import React, { useContext } from 'react'
import {counterContext} from './Context/Context';

function Component() {
    const count = useContext(counterContext);
  return (
    <h1>Count is : {count}</h1>
  )
}

export default Component