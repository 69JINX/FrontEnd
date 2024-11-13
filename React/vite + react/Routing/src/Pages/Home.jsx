import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
    return (
        <>
            <span>
                <b>Home</b> <Link to={'/about'}>About</Link> <Link to={'/gallery'}>Gallery</Link>
            </span>
            <h1>Home Page</h1>
        </>
    )
}

export default Home