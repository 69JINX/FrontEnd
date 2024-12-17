import React from 'react'
import Navbar from './../../Navbar.jsx'
import CB from './../../public/pizza/cheeseburst.jpg'
import Image from 'next/image.js'

function CB_Pizza() {
    return (
        <>
            <Navbar /> 
            <div class="position-relative start-50 text-center w-50">
                <h1>Cheese Burst Pizza</h1>
                <Image src={CB} width={600}/>
                <p>Order Domino's Cheese Burst Pizza ? filled with oodles of yummy liquid cheese. Order Cheese Burst Pizza today for an exquisite experience.</p>
            </div>
        </>
    )
}

export default CB_Pizza