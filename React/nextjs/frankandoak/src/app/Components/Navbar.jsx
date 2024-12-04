'use client'

import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
import './../Css/Navbar.css'

import { CiSearch, CiHeart } from "react-icons/ci";
import { PiUserCircle } from "react-icons/pi";
import { IoBagHandleOutline } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaFacebookF } from "react-icons/fa";
import { MdLabelImportant } from "react-icons/md";
import { FaHeart } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";

import Link from 'next/link';
import ThisJustIn from './NavbarDropdowns/ThisJustIn';
import Women from './NavbarDropdowns/Women'
import Men from './NavbarDropdowns/Men';
import OurStory from './NavbarDropdowns/OurStory';
import Offcanvas from 'react-bootstrap/Offcanvas';
import OffCanvas_data from './OffCanvas_data';
import OffCanvas_Cart from './OffCanvas_Cart';
import { Modal } from 'react-bootstrap';

import { logo_dark } from './../../Public/images.jsx'

import { Roboto_Condensed } from '@next/font/google'
import Image from 'next/image';


const robotoCondensed = Roboto_Condensed({ subsets: ['latin-ext'], width: ['500'] });

function Navigbar() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [showCart, setShowCart] = useState(false);
    const handleCloseCart = () => setShowCart(false);
    const handleShowCart = () => setShowCart(true);

    const [showCartOnSmallScreen, setShowCartOnSmallScreen] = useState(false);
    const handleCloseCartOnSmallScreen = () => setShowCartOnSmallScreen(false);
    const handleShowCartOnSmallScreen = () => setShowCartOnSmallScreen(true);

    const [LoginModalShow, setLoginModalShow] = useState(false);
    const [SignUpModalShow, setSignUpModalShow] = useState(false);

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
                            <li>
                                <PiUserCircle role='button' onClick={() => setLoginModalShow(true)} />
                                <LogInModal show={LoginModalShow} onHide={() => setLoginModalShow(false)} onSignUp={() => setSignUpModalShow(true)} />
                                <SignUpModal show={SignUpModalShow} onHide={() => setSignUpModalShow(false)} onLogin={() => setLoginModalShow(true)} />
                            </li>
                            <li><CiHeart /></li>
                            <li role='button'>
                                <IoBagHandleOutline onClick={handleShowCart} />
                                <Offcanvas style={{ width: '35vw' }} placement='end' show={showCart} onHide={handleCloseCart}>
                                    <OffCanvas_Cart />
                                </Offcanvas>
                            </li>
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
                            <li role='button'>
                                <IoBagHandleOutline onClick={handleShowCartOnSmallScreen} />
                                <Offcanvas style={{ width: '60vw' }} placement='end' show={showCartOnSmallScreen} onHide={handleCloseCartOnSmallScreen}>
                                    <OffCanvas_Cart />
                                </Offcanvas></li>
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

function LogInModal(props) {
    return (
        <Modal
            {...props}
            size="md"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            className='LoginModal'
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter" className='m-auto'>
                    <strong className={`${robotoCondensed.className} fs-2`}>Welcome Back!</strong><br />
                    <strong className={`${robotoCondensed.className} fs-6`}>Log in to enjoy your perks</strong>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body >
                <div>
                    <div className='d-flex justify-content-around'>
                        <div className='mb-2 bg-black m-auto' style={{ width: '50px' }}>
                            <Image src={logo_dark} width={40}></Image>
                        </div>
                        <div className='mb-2 ps-4 m-auto' style={{ width: '50px' }}>
                            <FaHeart size={30} />
                        </div>
                        <div className='mb-2 m-auto' style={{ width: '50px' }}>
                            <MdLabelImportant size={30} />
                        </div>
                    </div>
                    <div className='Offers d-flex justify-content-around mb-4 text-center'>
                        <div>
                            <div>Frank's Club</div>
                            <div>Earn points, get rewards</div>
                        </div>
                        <div>
                            <div>Wishlist</div>
                            <div>Save your favourites</div>
                        </div>
                        <div>
                            <div>Early access</div>
                            <div>Exclusive sale perks</div>
                        </div>
                    </div>
                    <div className='px-4'>
                        <form>
                            <div><input className='w-100 my-2 p-2' type='email' placeholder='Email Address' /></div>
                            <div><input className='w-100 my-2 p-2' type='password' placeholder='Password' /></div>
                            <div><Link href="#" className='text-decoration-underline'>Forgot Password ?</Link></div>
                            <div><button className='w-100 my-2 p-2 fw-bold text-white bg-black' style={{ border: '2px solid white' }}>Log In</button></div>
                        </form>
                        <hr />
                        <div>
                            <div className='text-center pb-2'>Social Login</div>
                            <div className='d-flex justify-content-around'>
                                <div role='button' className='border border-2 border-black p-2 text-center'>
                                    <FaFacebookF className='pb-1' size={20} />
                                    <span className='ms-1'>Sign in with Facebook</span>
                                </div>
                                <div role='button' className='border border-2 border-black p-2 text-center'>
                                    <FaGoogle className='pb-1' size={20} />
                                    <span className='ms-1'>Sign in with Google</span>
                                </div>
                            </div>
                        </div>
                        <hr />
                        <div className='text-center'>
                            Don't have an account?
                            <span role='button' onClick={() => { props.onHide(); props.onSignUp() }} className='text-decoration-underline'>
                                &nbsp;Sign up &#8594;
                            </span>
                        </div>
                    </div>
                </div>
            </Modal.Body>
            {/* <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer> */}
        </Modal>
    );
}

function SignUpModal(props) {
    console.log(props);
    return (
        <Modal
            {...props}
            size="md"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            className='LoginModal'
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter" className='m-auto'>
                    <strong className={`${robotoCondensed.className} fs-2`}>Welcome Back!</strong><br />
                    <strong className={`${robotoCondensed.className} fs-6`}>Log in to enjoy your perks</strong>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body >
                <div>
                    <div className='d-flex justify-content-around'>
                        <div className='mb-2 bg-black m-auto' style={{ width: '50px' }}>
                            <Image src={logo_dark} width={40}></Image>
                        </div>
                        <div className='mb-2 ps-4 m-auto' style={{ width: '50px' }}>
                            <FaHeart size={30} />
                        </div>
                        <div className='mb-2 m-auto' style={{ width: '50px' }}>
                            <MdLabelImportant size={30} />
                        </div>
                    </div>
                    <div className='Offers d-flex justify-content-around mb-4 text-center'>
                        <div>
                            <div>Frank's Club</div>
                            <div>Earn points, get rewards</div>
                        </div>
                        <div>
                            <div>Wishlist</div>
                            <div>Save your favourites</div>
                        </div>
                        <div>
                            <div>Early access</div>
                            <div>Exclusive sale perks</div>
                        </div>
                    </div>
                    <div className='text-center'>
                        Already have an account?
                        <span role='button' onClick={() => { props.onHide(); props.onLogin() }} className='text-decoration-underline'>
                            &nbsp;Log in &#8594;
                        </span>
                    </div>
                    <div className='px-4'>
                        <form>
                            <div><input className='w-100 my-2 p-2' type='email' placeholder='Email Address' /></div>
                            <div><input className='w-100 my-2 p-2' type='password' placeholder='Password' /></div>
                            <div><button className='w-100 my-2 p-2 fw-bold text-white bg-black' style={{ border: '2px solid white' }}>Sign up</button></div>
                        </form>
                        <hr />
                        <div>
                            <div className='text-center pb-2'>Social SignUp</div>
                            <div className='d-flex justify-content-around'>
                                <div role='button' className='border border-2 border-black p-2 text-center'>
                                    <FaFacebookF className='pb-1' size={20} />
                                    <span className='ms-1'>Sign in with Facebook</span>
                                </div>
                                <div role='button' className='border border-2 border-black p-2 text-center'>
                                    <FaGoogle className='pb-1' size={20} />
                                    <span className='ms-1'>Sign in with Google</span>
                                </div>
                            </div>
                        </div>
                        <hr />
                    </div>
                </div>
            </Modal.Body>
            {/* <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer> */}
        </Modal>
    );
}

export default Navigbar



