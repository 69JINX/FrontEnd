import React, { useState } from 'react'
import { createContext } from 'react'
export const counterContext = createContext();


function Context({ children }) {

    const [count, setCount] = useState(0);

    return (
        <counterContext.Provider value={{count,setCount}}>
            {children}
        </counterContext.Provider>
    )
}

export default Context
