import React, { createContext, useState } from 'react'
export const counterContext = createContext(0);

function Context({ children }) {
    const [count, setCount] = useState(0);
    const [negcount, setnegcount] = useState(50);
    const abc = 2;
    return (
        <counterContext.Provider value={[count,setCount,abc,negcount,setnegcount]}>
            {children}
        </counterContext.Provider>
    )
}

export default Context