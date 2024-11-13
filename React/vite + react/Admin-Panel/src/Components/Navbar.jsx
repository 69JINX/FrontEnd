import React, { useEffect } from 'react'
import './Css/Navbar.css'
import { GiHamburgerMenu } from "react-icons/gi";
import { useLocation } from 'react-router-dom';
import { useContext } from 'react';
import { Nav_Context } from '../Context/MyContext';


function Navbar() {
    const { Nav_State, setNav_State } = useContext(Nav_Context);

    let p = useLocation();
    console.log(p);

    return (
        <>
            <div className='Navbar d-flex justify-content-between px-3 py-2 overflow-hidden'>
                <div className='burger align-content-center'>
                    <GiHamburgerMenu size={30} onClick={() => setNav_State(!Nav_State)} />
                    <span className='ms-3 fs-5 fw-light'>Dashboard</span>
                    <div>
                        {p.pathname}
                    </div>
                </div>
                <div>
                    <div className='profile'>
                        <img src="http://bootdey.com/img/Content/avatar/avatar1.png" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar