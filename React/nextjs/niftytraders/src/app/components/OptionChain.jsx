import React from 'react'
import { Poppins } from 'next/font/google';
import { FaSearchengin } from "react-icons/fa";
import { BsGraphUpArrow } from "react-icons/bs";
import { HiOutlineDocumentSearch } from "react-icons/hi";
import { GiCrossedChains } from "react-icons/gi";



const poppins_head = Poppins({
    subsets: ['latin'],
    weight: '500'
});

const poppins_sub = Poppins({
    subsets: ['latin'],
    weight: '300'
});

function OptionChain() {
    return (
        <div className='option-chain p-10 border bg-[#F8FBFF] overflow-scroll flex gap-10 lg:bg-white text-black'>
            <div className='min-w-[200px] bg-[#FFFFFF] p-3 rounded-lg'>
                <div className='py-2'>
                    <FaSearchengin size={40} />
                </div>
                <div className={`text-xl py-3 lg:py-0 ${poppins_head.className}`}>
                    Advanced Stock Screener
                </div>
                <div className={`text-[12px] text-[#999999] ${poppins_sub.className}`}>
                    Access advanced filters like volume shockers, price actions, range breakout, opening price clues, and more for eficient stock screening
                </div>
            </div>
            <div className='min-w-[200px] bg-[#FFFFFF] p-3 rounded-lg'>
                <div className='py-2'>
                    <BsGraphUpArrow size={40} />
                </div>
                <div className={`text-xl py-3 lg:py-0 ${poppins_head.className}`}>
                    Live Market Screener
                </div>
                <div className={`text-[12px] text-[#999999] text-justify ${poppins_sub.className}`}>
                    Access real-time market data and dynamic filters to ensure timely trades without outdated information.
                </div>
            </div>
            <div className='min-w-[200px] bg-[#FFFFFF] p-3 rounded-lg'>
                <div className='py-2'>
                    <HiOutlineDocumentSearch size={45} />
                </div>
                <div className={`text-xl py-3 lg:py-0 ${poppins_head.className}`}>
                    Option Screener
                </div>
                <div className={`text-[12px] text-[#999999] text-justify ${poppins_sub.className}`}>
                    Quickly identify optimal trading opportunities in the option market with our real-time data and advanced filters.
                </div>
            </div>
            <div className='min-w-[200px] bg-[#FFFFFF] p-3 rounded-lg'>
                <div className='py-2'>
                    <GiCrossedChains size={40} />
                </div>
                <div className={`text-xl py-3 lg:py-0 ${poppins_head.className}`}>
                    Advanced Option Chain
                </div>
                <div className={`text-[12px] text-[#999999] text-justify ${poppins_sub.className}`}>
                    Stay ahead with highlighted data on Greeks, PCR, Vol PCR, and Expected Range for the Day feature for confident target setting
                </div>
            </div>
        </div>
    )
}

export default OptionChain