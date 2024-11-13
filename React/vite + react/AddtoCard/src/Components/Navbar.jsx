import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { wishlist } from '../Context/Context';

function Navbar() {
    const {Wishlist,setWishlist,Cart,setCart} = useContext(wishlist);
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-5 me-auto mb-2 mb-lg-0">
                            <li className="nav-item me-5">
                                <Link className="nav-link active" to={"/"}>Home</Link>
                            </li>
                            <li className="nav-item me-5">
                                <Link className="nav-link" to={"/wishlist"}>Wishlist({Wishlist.length})</Link>
                            </li>
                            <li className="nav-item me-5">
                                <Link className="nav-link" to={"/cart"}>Cart({Cart.length})</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav >
        </>
    )
}

export default Navbar