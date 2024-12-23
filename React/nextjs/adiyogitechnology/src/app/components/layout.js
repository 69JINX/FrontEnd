import React from 'react'
import Header from './Common/Header'

function Common({ children }) {
    return (
        <>
            <Header />
            {children}
        </>
    )
}

export default Common