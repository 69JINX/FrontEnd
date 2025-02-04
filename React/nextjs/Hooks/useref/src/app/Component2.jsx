'use client'
import React, { useRef } from 'react'

function Component2() {
    let a = useRef(0);
    a.current = a.current + 1;
    return (<>
        <div className='m-3'>Count with a ref variable = {a.current} (count increases on every re-render because initialization occure on only 1st time because of ref and doesn't initialize on every render) [increasing by 2 because of strict mode]</div> 
    </>
    )
}

export default Component2