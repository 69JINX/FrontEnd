import React from 'react'
import { IoMdSearch } from "react-icons/io";
import Link from "next/link";
import { Navbar } from "flowbite-react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { MdOutlineNotificationsActive } from "react-icons/md";
// import '../styles/toggledark.css'
import './../../../styles/toggledark.css'

function MyNavbar() {
    return (
        <div>
            <Navbar fluid className='fixed top-0 z-10 w-full'>
                <Navbar.Brand as={Link} href="#" className="p-2 xl:ms-5">
                    <img src="/Logo.png" className="h-8 block" />
                    <div className="ms-1 relative text-3xl text-black">
                        <span className="font-bold">Nifty</span><span>Trader</span>
                        {/* <img src="/Nifty Trader.png" className="h-8" alt="Flowbite Logo" /> */}
                        <span className="text-[6px] font-bold absolute right-0 top-4">Find yourself & Trade that way</span>
                    </div>
                    <div className="hidden sm:flex ms-5">
                        <div className="bg-[#ECF5FE] rounded-s py-2 px-1 content-center"><IoMdSearch size={25} color="black" /></div>
                        <input type='text' className="bg-[#ECF5FE] py-1 w-[20vw] rounded-e text-black px-2 outline-none border-none" placeholder="Search Stock" />
                    </div>
                </Navbar.Brand>
                <div className='block md:hidden'>
                    <div id="dm-switch">
                        <a href="#" className="buttonNub"></a>
                        <div className="buttonGlow"></div>
                        <div className="buttonClouds"></div>
                        <div className="buttonStars">
                            ✨ ✨ ✨<br />
                            &nbsp;&nbsp;&nbsp;✨ ✨
                        </div>
                        <div className="buttonBackground"></div>
                    </div>
                </div>
                <Navbar.Toggle />
                <Navbar.Collapse>
                    {
                        ["Backtesting", "Screener", "Options", "Resources"]
                            .map((item, index) => (
                                <div key={index} className='text-black cursor-pointer border-b-2 md:border-none md:border-b-2 py-2'>
                                    <div className="relative group flex text-sm text-black">
                                        {item}
                                        <div className="content-center"><svg className="w-2.5 h-2.5 ms-2.5 duration-300 group-hover:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                                        </svg></div>
                                        <ul className='hidden group-hover:block group-hover:z-10 absolute top-[100%] pt-3'>
                                            <li className='px-2 py-1 bg-gradient-to-r from-[#7aabfa] hover:to-[#7aabfa] hover:from-[#a2c4fc] to-[#a2c4fc] rounded'>item #1</li>
                                            <li className='px-2 mt-1 py-1 bg-gradient-to-r from-[#7aabfa] hover:to-[#7aabfa] hover:from-[#a2c4fc] to-[#a2c4fc] rounded'>item #2</li>
                                            <li className='px-2 mt-1 py-1 bg-gradient-to-r from-[#7aabfa] hover:to-[#7aabfa] hover:from-[#a2c4fc] to-[#a2c4fc] rounded'>item #3</li>
                                            <li className='px-2 mt-1 py-1 bg-gradient-to-r from-[#7aabfa] hover:to-[#7aabfa] hover:from-[#a2c4fc] to-[#a2c4fc] rounded'>item #4</li>
                                        </ul>
                                    </div>
                                </div>
                            ))
                    }
                    <Navbar.Link className='cursor-pointer'>
                        <div className="flex text-black  text-sm">
                            <div className="pe-2"><img src="/premium.png" /></div>
                            <div className="text-[#4399EB] font-semibold">Refer and Earn</div>
                        </div>
                    </Navbar.Link>
                    <Navbar.Link className='cursor-pointer'>
                        <AiOutlineShoppingCart size={25} color="black" />
                    </Navbar.Link>
                    <Navbar.Link className='cursor-pointer'>
                        <MdOutlineNotificationsActive size={25} color="black" />
                    </Navbar.Link>
                    <Navbar.Link className='cursor-pointer'>
                        <div className="relative rounded-3xl text-[#4399EB] bg-[#ECF5FE] p-2 font-semibold">
                            AA
                            <div className="absolute right-1 bottom-8">
                                <img src="/premium.png" />
                            </div>
                        </div>
                    </Navbar.Link>
                    <Navbar.Link className='cursor-pointer'>
                        <div className='hidden md:block'>
                            <div className='overflow-hidden' id="dm-switch">
                                <a href="#" className="buttonNub"></a>
                                <div className="buttonGlow"></div>
                                <div className="buttonClouds"></div>
                                <div className="buttonStars">
                                    ✨ ✨ ✨<br />
                                    &nbsp;&nbsp;&nbsp;✨ ✨
                                </div>
                                <div className="buttonBackground"></div>
                            </div>
                        </div>
                    </Navbar.Link>
                </Navbar.Collapse>
            </Navbar>
        </div >
    )
}

export default MyNavbar