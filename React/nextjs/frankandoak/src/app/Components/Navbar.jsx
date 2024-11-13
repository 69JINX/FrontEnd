'use client'

import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
import './../Css/Navbar.css'
import { CiSearch, CiHeart } from "react-icons/ci";
import { PiUserCircle } from "react-icons/pi";
import { IoBagHandleOutline } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import Link from 'next/link';
import ThisJustIn from './NavbarDropdowns/ThisJustIn';
import Women from './NavbarDropdowns/Women'
import Men from './NavbarDropdowns/Men';
import OurStory from './NavbarDropdowns/OurStory';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import OffCanvas_data from './OffCanvas_data';


function Navigbar() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <div className="Navbar ">
                <div className='web-view d-flex justify-content-between pe-4'>
                    <div className="Menu">
                        <ul className='m-0'>
                            <li className='fs-4'><Link href="#" className="logo">Frank And Oak</Link></li>
                            <li><Link href="#"> This Just In</Link>
                                <div className="this-just-in" style={{ marginLeft: '-240px' }}>
                                    <ThisJustIn />
                                </div>
                            </li>
                            <li><Link href="#"> Women</Link>
                                <div className="Women" style={{ marginLeft: '-365px' }}>
                                    <Women />
                                </div></li>
                            <li><Link href="#"> Men</Link>
                                <div className="Men" style={{ marginLeft: '-460px' }}>
                                    <Men />
                                </div>
                            </li>
                            <li><Link href="#"> OurStory</Link>
                                <div className="OurStory" style={{ marginLeft: '-540px' }}>
                                    <OurStory />
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="controls fs-3">
                        <ul className='m-0'>
                            <li><CiSearch /></li>
                            <li><PiUserCircle /></li>
                            <li><CiHeart /></li>
                            <li><IoBagHandleOutline /></li>
                        </ul>
                    </div>
                </div>
                <div className='mobile-view d-flex justify-content-between pe-4 flex-wrap-reverse'>
                    <div className="Menu">
                        <ul className='m-0 d-flex align-items-center'>
                            <li >
                                <RxHamburgerMenu size={30} onClick={handleShow} />
                                <Offcanvas show={show} onHide={handleClose}>
                                    <OffCanvas_data />
                                </Offcanvas>
                            </li>
                            <li className='fs-4 fw-bold'><Link href="#" className="logo">Frank And Oak</Link></li>
                        </ul>
                    </div>
                    <div className="controls fs-3">
                        <ul className='m-0'>
                            <li><CiSearch /></li>
                            <li><PiUserCircle /></li>
                            <li><CiHeart /></li>
                            <li><IoBagHandleOutline /></li>
                        </ul>
                    </div>
                </div>
            </div>
            {/* <Navbar collapseOnSelect expand="lg" className="px-5 Navbar">
                <Navbar.Brand href="#home" className='logo fw-bold fs-4'>Frank And Oak</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <div className="Menu">
                            <ul className='m-0'>
                                <Link href="#" className="logo p-0"><li></li></Link>
                                <li><Link href="#"> This Just In</Link>
                                    <div className="this-just-in" style={{ marginLeft: '-18vw' }}>
                                        <ThisJustIn />
                                    </div>
                                </li>
                                <li><Link href="#"> Women</Link>
                                    <div className="Women" style={{ marginLeft: '-26vw' }}>
                                        <Women />
                                    </div></li>
                                <li><Link href="#"> Men</Link>
                                    <div className="Men" style={{ marginLeft: '-32vw' }}>
                                        <Men />
                                    </div>
                                </li>
                                <li><Link href="#"> OurStory</Link>
                                    <div className="OurStory" style={{ marginLeft: '-36.5vw' }}>
                                        <OurStory />
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </Nav>
                    <Nav>
                        <div className="controls fs-3">
                            <ul className='m-0'>
                                <li><CiSearch /></li>
                                <li><PiUserCircle /></li>
                                <li><CiHeart /></li>
                                <li><IoBagHandleOutline /></li>
                            </ul>
                        </div>
                    </Nav>
                </Navbar.Collapse>

            </Navbar> */}
        </>
    )
}

export default Navigbar