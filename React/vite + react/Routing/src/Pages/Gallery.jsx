import React from 'react'
import { Link } from 'react-router-dom'

function Gallery() {
    return (
        <>
            <span>
                <Link to={'/'}>Home</Link> <Link to={'/about'}>About</Link> <b>Gallery</b>
            </span>
            <h1>Gallery Page</h1>
        </>
    )
}

export default Gallery