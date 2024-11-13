import React from 'react'
import './Css/Navbar.css'
import Pizza from './public/pizza.png'
import CB_Pizza from './public/cheese-burst-pizza.png'
import M_Pizza from './public/mushroom-pizza.png'
import P_Pizza from './public/paneer-pizza.png'
import PP_Pizza from './public/pepperoni-pizza.png'
import Image from 'next/image'
import Link from 'next/link'

function Navbar() {
    return (
        <>
            <ul class="tree position-fixed start-0 m-0 d-inline">
                <li class="">
                    <details open class="details">
                        <summary class="d-inline border"><Image src={Pizza} width={100} /></summary>
                        <ul class="nested-list">
                            <Link href="/PizzaDetails/CheeseBurstPizza" class="text-decoration-none"><li class="nested-item"> <span
                                class="label"><Image src={CB_Pizza} width={100} /></span>Cheese Burst Pizza</li></Link>
                            <Link href="/PizzaDetails/MushroomPizza" class="text-decoration-none"><li class="nested-item"> <span
                                class="label"><Image src={M_Pizza} width={100} /></span>Mushroom Pizza</li></Link>
                            <Link href="/PizzaDetails/PaneerPizza" class="text-decoration-none"><li class="nested-item"> <span
                                class="label"><Image src={P_Pizza} width={100} /></span>Paneer Pizza</li></Link>
                        </ul>
                    </details>
                </li>
            </ul>
        </>
    )
}

export default Navbar