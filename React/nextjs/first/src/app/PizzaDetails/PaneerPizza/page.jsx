import React from 'react'
import Navbar from './../../Navbar.jsx'
import Paneer from './../../public/pizza/paneer.webp'
import Image from 'next/image.js'

function P_Pizza() {
    return (
        <>
            <Navbar /> 
            <div class="position-relative start-50 text-center w-50">
                <h1>Paneer Pizza</h1>
                <Image src={Paneer} width={600}/>
                <p>Soft chunky paneer with crisp capsicum and fresh Tomatoes – a flavourful combination that will leave you wanting more!</p>
            </div>
        </>
    )
}

export default P_Pizza