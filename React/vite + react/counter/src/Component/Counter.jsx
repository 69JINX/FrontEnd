import React, { useState } from 'react';

function Counter() {
    const [counter, settext] = useState(0);
    const inc = () => {settext(counter+1)};
    const des = () => {if(counter>0)settext(counter-1)};
    return (
        <>
            <div className="Box mx-auto">
                <button onClick={inc}>+</button>
                <span>{counter}</span>
                <button onClick={des}>–</button>
            </div>
        </>
    )
}

export default Counter