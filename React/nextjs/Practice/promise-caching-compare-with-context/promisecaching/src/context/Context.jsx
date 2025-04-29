'use client'
import { getData1 } from '@/api/api';
import React, { createContext, useEffect, useState } from 'react'
export const dataContext = createContext(null);

function Context({ children }) {
    const [data, setData] = useState(null);

    const fetchData = async () => {
        const data = await getData1('https://jsonplaceholder.typicode.com/users/1');
        console.log(data);
        setData(data);
    }

    useEffect(() => {
        fetchData();
    }, [])

    return (
        <dataContext.Provider value={[data]}>
            {children}
        </dataContext.Provider>
    )
}

export default Context