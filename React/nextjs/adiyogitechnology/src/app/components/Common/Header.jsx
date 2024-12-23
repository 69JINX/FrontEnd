'use client'
import React, { useEffect, useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi";

function Header() {
    const [bg, setbg] = useState(false);
    useEffect(() => {
        if (window) {
            window.onscroll = () => {
                if (window.scrollY >= 190) {
                    setbg(true);
                }
                else {
                    setbg(false);
                }
            }
        }
        return () => {
            window.onscroll = null;
        };
    }, [])
    return (
        <>
            <div className={`header items-center duration-500 ${bg ? 'bg-[#1b1c1d] h-[80px]' : 'bg-transparent h-[120px]'}  w-screen p-5 px-16 flex justify-between z-20 fixed top-0 `}>
                <div className='cursor-pointer'>
                    <img src='assets/logo.png' />
                </div>
                <div className='flex justify-between items-center'>
                    <div className='callnow bg-black p-1 text-[#1E6DA4] px-3 rounded-full text-xs font-semibold cursor-pointer'>
                        CALL NOW
                    </div>
                    <div className='ms-10 cursor-pointer'>
                        <GiHamburgerMenu size={40} />
                    </div>
                </div>

            </div>
        </>
    )
}

export default Header