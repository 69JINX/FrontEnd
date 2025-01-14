import React from 'react'
import { FaPlayCircle } from "react-icons/fa";

import { Assistant } from 'next/font/google';

const assistant = Assistant({
    subsets: ['latin']
});

function Hero() {
    return (
        <>
            <div className='pt-24 overflow-hidden relative w-full bg-gradient-to-r from-[#FFC7C7] to-[#0AA6D7]'>
                <div className='mix-blend-color-burn  border-[30px] md:border-[60px] absolute left-[-100px] top-10 rounded-full w-[300px] h-[300px] md:w-[600px] md:h-[600px]'>
                </div>
                <div className='lg:flex justify-around text-black text-center lg:text-left items-center w-full h-full lg:py-20'>
                    <div>
                        <h1 className='hero-para-head text-2xl md:text-5xl font-semibold text-white'>STOCK SCREENING SIMPLIFIED</h1>
                        <div className={`tracking-wider font-light py-6 text-white text-sm md:text-xl ${assistant.className}`}>Find Winning Stock Faster with Nifty Trader's<br /> Advanced Stock Screening Tool</div>
                        <div className='p-3 px-10 bg-[#13A8D7] font-semibold text-white inline-block rounded'>
                            Free Trial
                        </div>
                    </div>
                    <div className='relative h-[30vh] mt-10 lg:my-10'>
                        <img className='h-full m-auto' src='/ytthumbnail.png' />
                        <div className='content-center absolute top-[45%] left-[45%] w-[50px] h-[50px] bg-white rounded-full'>
                        <FaPlayCircle className='m-auto' size={50} color='#ED93B7' />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero