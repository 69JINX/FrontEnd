import React, { useEffect } from 'react'

function Comp2() {
    useEffect(()=>{
        console.log('Component 2 mounted')
        return ()=>{
            console.log('Component 2 unmounted')
        }
    },[])
    return (
        <div
            className='Comp2'
            style={{ height: '50px', width: '50px', backgroundColor: 'green', textAlign: 'center', padding: '10px' }}>
            <p>Comp2</p>
        </div>
    )
}

export default Comp2