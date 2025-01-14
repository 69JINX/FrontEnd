import { Poppins } from 'next/font/google';
import React from 'react'

const poppins_head = Poppins({
    subsets: ['latin'],
    weight: '700'
});
const poppins_sub = Poppins({
    subsets: ['latin'],
    weight: '300'
});
const poppins_small = Poppins({
    subsets: ['latin'],
    weight: '400'
});

function FreeTrial() {
    return (
        <div className="my-10 p-10 content-center bg-[url('/free_trial_bg_mobile.jpg')] md:bg-[url('/free_trial_bg.jpg')] text-black bg-no-repeat bg-[length:100%_100%]">
            <div className='flex justify-end'>
                <div className=' text-center lg:mx-20'>
                    <div>
                        <div className={`${poppins_sub.className} text-3xl`}>Screening Like a Pro with</div>
                        <div className={`${poppins_head.className} my-2 text-3xl`}>Nifty Trader</div>
                    </div>
                    <div className={`text-[#999999] ${poppins_small.className}`}>
                        Stop wasting time and start winning! Get access <br /> to  Nifty Trader's Stock Screeners today!
                    </div>
                    <div className={`cursor-pointer font-bold text-xl mt-8 py-3 px-5 bg-[#4399EB] inline-block rounded-lg text-white`}>
                        Start Free Trial Now
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FreeTrial