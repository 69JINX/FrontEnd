import React from 'react'
import { Link } from 'react-router-dom'

function About() {
    return (
        <>
            <span>
                <Link to={'/'}>Home</Link> <b>About</b> <Link to={'/gallery'}>Gallery</Link>
            </span>
            <h1>About Page</h1>
        </>
    )
}

export default About