import React from 'react'

function Component1() {
    let a = 0;
    a = a + 1;
    return (
        <div className='m-3'>Count with a normal variable = {a} (count stays the same accross re-renders because it is initialized with 0 on every render)</div>
    )
}

export default Component1