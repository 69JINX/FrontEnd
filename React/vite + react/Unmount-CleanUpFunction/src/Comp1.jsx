import React, { useEffect } from 'react'

function Comp1() {
    useEffect(()=>{
        console.log('Component 1 mounted')
        return ()=>{
            console.log('Component 1 unmounted')
        }
    },[])
    return (
        <div
            className='Comp1'
            style={{ height: '50px', width: '50px', backgroundColor: 'red', textAlign: 'center', padding: '10px' }}>
            <p>Comp1</p>
        </div>
    )
}

export default Comp1