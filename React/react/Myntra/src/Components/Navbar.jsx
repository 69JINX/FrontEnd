import Myntra from './../../src/images//Myntra.png';
import './Css/Navbar.css';
import Nav_items from './Nav-items.jsx'
import Nav_user_items from './Nav-user-items.jsx';
import { CiUser } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { BsHandbag } from "react-icons/bs";
import React, { useState } from 'react';


function Navbar({change_opacity}) { 
  
  return (
    <nav className="navbar mynavbar navbar-expand-lg bg-white px-2 shadow-sm">
      <div className="container-fluid d-flex justify-content-between nav-items">
        <a className="navbar-brand logo" href="#"><img src={Myntra} /></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent" >
          <ul className="navbar-nav nav-menu me-auto mb-2 mb-lg-0 position-relative" onMouseEnter={change_opacity} onMouseLeave={change_opacity}>
            <Nav_items name="MEN" />
            <Nav_items name="WOMEN" />
            <Nav_items name="KIDS" />
            <Nav_items name="HOME & LIVING" />
            <Nav_items name="BEAUTY" />
            <Nav_items name="STUDIO" sup="NEW" />
          </ul>
          <form className="d-flex align-items-center search-bar" role="search">
            <input className=" me-2" type="search" placeholder="Search" aria-label="Search" />
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <Nav_user_items name="Profile" icon={<CiUser size={20} />} />
              <Nav_user_items name="Wishlist" icon={<CiHeart size={20} />} />
              <Nav_user_items name="Bag" icon={<BsHandbag size={20} />} />
            </ul>
          </form>
        </div>
      </div>
    </nav>
  );
}



export default Navbar;