import React from 'react'
import Navbar from './../../Navbar.jsx'
import M from './../../public/pizza/mushroom.jpg'
import Image from 'next/image.js'

function M_Pizza() {
    return (
        <>
            <Navbar /> 
            <div class="position-relative start-50 text-center w-50">
                <h1>Mushroom Pizza</h1>
                <Image src={M} width={600}/>
                <p>This mouth-watering pizza has crunchy, crisp capsicum, succulent mushrooms and fresh tomatoes baked to perfection with a generous topping of mozzarella cheese.</p>
            </div>
        </>
    )
}

export default M_Pizza