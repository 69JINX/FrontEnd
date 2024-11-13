import Image from 'next/image'
import React from 'react'
import './../../Css/NavbarDropdowns/NavbarDropdown.css'
import Link from 'next/link'

function Women() {
  return (
    <div className='DropDown Women-navdropdown fw-medium m-4 d-flex'>
            <div>
                <ul className='list-unstyled pe-5'>
                    <li><span className='heading mb-4 d-block fs-6 fw-medium'>Features</span></li>
                    <li><Link href="#">New In</Link></li>
                    <li><Link href="#">Best Sellers</Link></li>
                    <li><Link href="#">Coming Soon</Link></li>
                    <li><Link href="#">The Skyline</Link></li>
                    <li><Link href="#">The Originals</Link></li>
                    <li><Link href="#">Workwear</Link></li>
                    <li><Link href="#">Gift Cards</Link></li>
                    <li><Link href="#" className='text-danger'>Sale</Link></li>
                </ul>
            </div>
            <div>
                <ul className='list-unstyled ps-5'>
                    <li><span className='heading mb-4 d-block fs-6 fw-medium'>Clothing</span></li>
                    <li><Link href="#">Shop All</Link></li>
                    <li><Link href="#">T-shirts & Tops</Link></li>
                    <li><Link href="#">Blouses & Shirts</Link></li>
                    <li><Link href="#">Sweaters & Cardigans</Link></li>
                    <li><Link href="#">Blazers & Overshirts</Link></li>
                    <li><Link href="#">Jackest & Coats</Link></li>
                    <li><Link href="#">Denim</Link></li>
                    <li><Link href="#">Pants</Link></li>
                    <li><Link href="#">Dresses</Link></li>
                    <li><Link href="#">Skirts & Shorts</Link></li>
                </ul>
            </div>
            <div>
                <ul className='list-unstyled ps-5 pe-5 me-5'>
                    <li><span className='heading mb-4 d-block fs-6 fw-medium'>Accessories</span></li>
                    <li><Link href="#">Shop All</Link></li>
                    <li><Link href="#">Caps & Hats</Link></li>
                    <li><Link href="#">Shoes & Boots</Link></li>
                    <li><Link href="#">Bags</Link></li>
                </ul>
            </div>
            <div className="ps-5 images">
            <div className="image1 me-5 position-relative">
                    <div className="position-absolute bottom-0 p-3 text-white fs-5 ">Denim</div>
                </div>
                <div  className="image2  position-relative">
                <div className="position-absolute bottom-0 p-3 text-white fs-5 ">Blouses</div>
                </div>
            </div>
        </div>
  )
}

export default Women