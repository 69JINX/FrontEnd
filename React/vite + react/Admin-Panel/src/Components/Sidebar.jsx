import React, { useContext, useEffect } from 'react'
import './Css/Sidebar.css'
import { IoSpeedometerOutline } from "react-icons/io5";
import { IoIosSettings } from "react-icons/io";
import { Nav_Context } from '../Context/MyContext';
import { MdOutlineTouchApp } from "react-icons/md";
import { CiDroplet } from "react-icons/ci";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { PiBabyCarriageThin } from "react-icons/pi";
import { GrHistory } from "react-icons/gr";
import Accordion_arrow from './../../public/Accordion_arrow.svg'
import { FaBox } from "react-icons/fa6";
import { AiFillEdit } from "react-icons/ai";
import { Link } from 'react-router-dom';
import { LuNewspaper } from "react-icons/lu";

function Sidebar() {
    const { Nav_State, setNav_State } = useContext(Nav_Context);

    let Sidebar_width;
    if (Nav_State == true) {
        Sidebar_width = '0px';
    }
    else {
        Sidebar_width = '20%';
    }


    return (
        <>
            <div style={{ width: Sidebar_width }} className='Sidebar text-white text-center pt-4'>
                <h3>Frank and Oak</h3>
                <hr />
                <div className='Menu'>
                    <ul className='list-unstyled text-center'>
                        <Link to={'/Dashboard'}><li className='Dashboard-btn mx-2 px-3 p-2 d-flex rounded-3' >
                            <div className='px-3'>
                                <IoSpeedometerOutline size={20} />
                            </div>
                            <div>
                                Dashboard
                            </div>
                        </li></Link>
                        <Link to={'/Dashboard/Profile'}><li className='Profile-btn mx-2 px-3 p-2 d-flex rounded-3'>
                            <div className='px-3'>
                                <IoIosSettings size={20} />
                            </div>
                            <div>
                                Profile
                            </div>
                        </li></Link>
                        <li className='m-2 ecommerce rounded-3 text-center fw-bold'>
                            ECOMMERCE COMPONENTS
                        </li>
                        <li className='Accordion m-2 d-flex'>
                            <div style={{ '--bs-accordion-btn-icon': `url('${Accordion_arrow}')`, '--bs-accordion-btn-active-icon': `url('${Accordion_arrow}')` }} class="accordion accordion-flush w-100" id="accordionFlushExample">
                                <div class="Size accordion-item">
                                    <h2 class="accordion-header">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                            <div className='px-2 pe-3'>
                                                <MdOutlineTouchApp size={20} />
                                            </div>
                                            <div>
                                                Size
                                            </div>
                                        </button>
                                    </h2>
                                    <div id="flush-collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                        <div class="accordion-body py-0 text-start ms-4 pb-2">
                                            <ul>
                                                <Link to={"/Dashboard/Size/Size_Details"}><li className='mb-3'>Size Details</li></Link>
                                                <Link to={"/Dashboard/Size/View_Sizes"}><li>View Sizes</li></Link>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div class="Color accordion-item">
                                    <h2 class="accordion-header">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                            <div className='px-2 pe-3'>
                                                <CiDroplet size={20} />
                                            </div>
                                            <div>
                                                Color
                                            </div>
                                        </button>
                                    </h2>
                                    <div id="flush-collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                        <div class="accordion-body py-0 text-start ms-4 pb-2">
                                            <ul>
                                                <Link to={"/Dashboard/Color/Add_Color"}><li className='mb-3'>Add Color</li></Link>
                                                <Link to={"/Dashboard/Color/View_Color"}><li>View Color</li></Link>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div class="Parent-Category View accordion-item">
                                    <h2 class="accordion-header">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseTwo">
                                            <div className='px-2 pe-3'>
                                                <HiOutlineMenuAlt1 size={20} />
                                            </div>
                                            <div>
                                                Parent Category
                                            </div>
                                        </button>
                                    </h2>
                                    <div id="flush-collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                        <div class="accordion-body py-0 text-start ms-4 pb-2">
                                            <ul>
                                                <Link to={"/Dashboard/Category/Add_Category"}><li className='mb-3'>Add Category</li></Link>
                                                <Link to={"/Dashboard/Category/View_Category"}><li>View Category</li></Link>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div class="Product-Category accordion-item">
                                    <h2 class="accordion-header">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseThree">
                                            <div className='px-2 pe-3'>
                                                <PiBabyCarriageThin size={20} />
                                            </div>
                                            <div>
                                                Product Category
                                            </div>
                                        </button>
                                    </h2>
                                    <div id="flush-collapseFour" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                        <div class="accordion-body py-0 text-start ms-4 pb-2">
                                            <ul>
                                                <Link to={"/Dashboard/Products/Add_Product_Category"}><li className='mb-3'>Add Product Category</li></Link>
                                                <Link to={"/Dashboard/Products/View_Product_Category"}><li>View Product Category</li></Link>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div class="Product accordion-item">
                                    <h2 class="accordion-header">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseThree">
                                            <div className='px-2 pe-3'>
                                                <FaBox size={20} />
                                            </div>
                                            <div>
                                                Product
                                            </div>
                                        </button>
                                    </h2>
                                    <div id="flush-collapseFive" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                        <div class="accordion-body py-0 text-start ms-4 pb-2">
                                            <ul>
                                                <Link to={"/Dashboard/Products/Add_Product"}><li className='mb-3'>Add Product</li></Link>
                                                <Link to={""}><li>View Product</li></Link>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div class="Story accordion-item">
                                    <h2 class="accordion-header">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSix" aria-expanded="false" aria-controls="flush-collapseThree">
                                            <div className='px-2 pe-3'>
                                                <GrHistory size={20} />
                                            </div>
                                            <div>
                                                Story
                                            </div>
                                        </button>
                                    </h2>
                                    <div id="flush-collapseSix" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                        <div class="accordion-body py-0 text-start ms-4 pb-2">
                                            <ul>
                                                <Link to={""}><li className='mb-3'>Story Details</li></Link>
                                                <Link to={""}><li>Story View</li></Link>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div class="Story accordion-item">
                                    <h2 class="accordion-header">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSeven" aria-expanded="false" aria-controls="flush-collapseThree">
                                            <div className='px-2 pe-3'>
                                                <GrHistory size={20} />
                                            </div>
                                            <div>
                                                Slider
                                            </div>
                                        </button>
                                    </h2>
                                    <div id="flush-collapseSeven" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                        <div class="accordion-body py-0 text-start ms-4 pb-2">
                                            <ul>
                                                <Link to={""}><li className='mb-3'>Slider Details</li></Link>
                                                <Link to={""}><li>Slider View</li></Link>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className='Order mx-2 px-3 d-flex rounded-3'>
                            <div className='px-3'>
                                <AiFillEdit size={20} />
                            </div>
                            <div>
                                Order
                            </div>
                        </li>
                        <li className='Order m-2 p-3 d-flex rounded-3'>
                            <div className='px-3'>
                                <LuNewspaper size={20} />
                            </div>
                            <div>
                                Terms & Conditions
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Sidebar