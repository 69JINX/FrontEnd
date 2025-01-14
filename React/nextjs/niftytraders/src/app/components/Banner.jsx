import { Poppins } from 'next/font/google';
import React from 'react'

const poppins_head = Poppins({
    subsets: ['latin'],
    weight: '700'
});
const poppins_sub = Poppins({
    subsets: ['latin'],
    weight: '500'
});

function Banner() {
    return (
        <div className="banner-shadow lg:m-10 p-6 lg:ps-40 pe-10 border rounded-md shadow-xl text-center lg:text-left lg:flex justify-between items-center text-black bg-[url('/banner1.png')] bg-right bg-no-repeat bg-[length:80%_100%] lg:bg-[length:50%_100%]" style={{ boxShadow: '-2px -1px 5px 1px rgba(0, 0, 0, 0.1)' }}>
            <div>
                <div className={`text-2xl ${poppins_head.className}`}>
                    Missing Trades Because of Outdated Data?
                </div>
                <div className={`pt-3 text-[#333333] text-lg ${poppins_sub.className}`}>
                    Get the Live Market Screening with Dynamic Filters
                </div>
            </div>
            <div>
                <div className='mt-5 p-3 inline-block px-8 text-white font-semibold bg-gradient-to-r from-[#537E95] to-[#004063] rounded-md'>
                    Get Free Trial
                </div>
            </div>
        </div>
    )
}

export default Banner