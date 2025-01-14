import React from 'react'
import { FaLongArrowAltRight } from "react-icons/fa";
import { Assistant } from 'next/font/google';

const assistant = Assistant({
    subsets: ['latin']
});

function ExploreFeatures() {
    return (
        <div className='bg-[#E1E1E1] p-10 text-center text-black'>
            <h1 className='text-2xl font-semibold'>THE ULTIMATE DESTINATION FOR STOCK MARKET INSIGHT</h1>
            <div className={`py-3 text-[#333333] ${assistant.className}`}>
                Join 1 million Traders & Investors who trust Nifty Trader for smart trading & real-time stock insights.
            </div>
            <div className='px-10 py-3 border inline-block border-black items-center justify-center cursor-pointer'>
                <span>Explore Features</span>  <FaLongArrowAltRight color='black' className='ms-2 inline' />
            </div>
        </div>
    )
}

export default ExploreFeatures