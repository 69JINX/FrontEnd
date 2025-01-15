import { Poppins } from 'next/font/google';
import React from 'react'
import { FaRegCopyright } from "react-icons/fa6";

const poppins_head = Poppins({
    subsets: ['latin'],
    weight: '700'
});
const poppins_sub = Poppins({
    subsets: ['latin'],
    weight: '400'
});

function Footer() {
    return (
        <div className="overflow-hidden bg-[url('/trading_bg.jpeg')] bg-[length:100%_800%]">
            <div className="lg:p-5 relative w-full">
                {/* <!-- Background Layer --> */}
                <div className="absolute inset-0 blur-sm bg-[url('/trading_bg.jpeg')] bg-[length:100%_800%] bg-center bg-no-repeat"></div>
                {/* <!-- Content Layer --> */}
                <div className="relative text-white">
                    <div className='p-4 lg:p-8 flex flex-col-reverse lg:flex-row justify-between'>
                        <div className='flex lg:hidden m-auto'>
                            <img src="/google_play.png" width={150} />
                            <img src="/App_Store.svg" width={125} />
                        </div>
                        <div className='flex justify-between'>
                            <div>
                                <div className={`${poppins_head.className} lg:text-xl text-md`}>HELPFUL LINKS</div>
                                <div className='pt-2'>
                                    <ul className={`${poppins_sub.className} text-[#DADADA] text-[12px] lg:text-[16px]`}>
                                        <li className='hover:text-[#4399EB] cursor-pointer'>&gt; About Us</li>
                                        <li className='hover:text-[#4399EB] cursor-pointer'>&gt; Blog</li>
                                        <li className='hover:text-[#4399EB] cursor-pointer'>&gt; News</li>
                                        <li className='hover:text-[#4399EB] cursor-pointer'>&gt; Terms & Conditions</li>
                                        <li className='hover:text-[#4399EB] cursor-pointer'>&gt; Privacy Policy</li>
                                        <li className='hover:text-[#4399EB] cursor-pointer'>&gt; Disclaimer</li>
                                        <li className='hover:text-[#4399EB] cursor-pointer'>&gt; Limitation of Liablity</li>
                                        <li className='hover:text-[#4399EB] cursor-pointer'>&gt; Refund & Cancellation Policy</li>
                                        <li className='hover:text-[#4399EB] cursor-pointer'>&gt; Contact US</li>
                                    </ul>
                                </div>
                            </div>
                            <div className='ms-10 lg:ms-20'>
                                <div className={`${poppins_head.className} lg:text-xl text-md`}>OTHER LINKS</div>
                                <div className='pt-2'>
                                    <ul className={`${poppins_sub.className} text-[#DADADA] text-[12px] lg:text-[16px]`}>
                                        <li className='hover:text-[#4399EB] cursor-pointer'>&gt; Broker Directory</li>
                                        <li className='hover:text-[#4399EB] cursor-pointer'>&gt; Opening Price Clues</li>
                                        <li className='hover:text-[#4399EB] cursor-pointer'>&gt; Stock Screener</li>
                                        <li className='hover:text-[#4399EB] cursor-pointer'>&gt; Stock Options Chain</li>
                                        <li className='hover:text-[#4399EB] cursor-pointer'>&gt; Gift Nifty</li>
                                        <li className='hover:text-[#4399EB] cursor-pointer'>&gt; IPO</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className='my-5 lg:my-0'>
                            <div className={`${poppins_head.className} lg:text-xl text-md`}>OUR TOP BROKERS</div>
                            <div className='pt-2'>
                                <ul className={`${poppins_sub.className} text-[#DADADA] flex justify-between lg:block w-full md:w-[50vw] lg:w-full text-[12px] lg:text-[16px]`}>
                                    <li className='hover:text-[#4399EB] cursor-pointer'>5paisa</li>
                                    <li className='hover:text-[#4399EB] cursor-pointer'>Zerodha</li>
                                    <li className='whitespace-nowrap hover:text-[#4399EB] cursor-pointer'>Angel One</li>
                                    <li className='hover:text-[#4399EB] cursor-pointer'>Upstox</li>
                                    <li className='hover:text-[#4399EB] cursor-pointer'>Fyers</li>
                                </ul>
                            </div>
                        </div>
                        <div>
                            <div className={`${poppins_head.className} text-xl`}>SUBSCRIBE TO OUR NEWSLETTER</div>
                            <div className='mt-1 mb-5 text-[#CECECE]'>Sign up & receive the latest tips via email</div>
                            <div className=' lg:flex'>
                                <input type="email" className={`rounded-md lg:rounded-e-none lg:rounded-s-md p-5 w-[90vw] lg:w-[300px] text-black ${poppins_sub.className}`} placeholder="Email Address" />
                                <div className='mt-3 lg:mt-0 text-xl inline-block content-center p-3 lg:ms-2 bg-[#4399EB] rounded-md lg:rounded-s-none lg:rounded-e-md font-semibold'>
                                    Subscribe
                                </div>
                            </div>
                            <div className='hidden lg:flex my-5'>
                                <img src="/google_play.png" width={150} />
                                <img src="/App_Store.svg" width={125} />
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className='flex justify-around m-auto w-[400px]'>
                            <div className='cursor-pointer'>
                                <img src="/social/Facebook.svg" />
                            </div>
                            <div className='cursor-pointer'>
                                <img src="/social/Twitter.svg" />
                            </div>
                            <div className='cursor-pointer'>
                                <img src="/social/Youtube.svg" />
                            </div>
                            <div className='cursor-pointer'>
                                <img src="/social/LinkedIn.svg" />
                            </div>
                            <div className='cursor-pointer'>
                                <img src="/social/Instagram.svg" />
                            </div>
                            <div className='cursor-pointer'>
                                <img src="/social/Telegram.svg" />
                            </div>
                        </div>
                        <div className='py-5 m-auto'>
                            <hr width="50%" className='m-auto' />
                        </div>
                        <div className='text-center text-[#C0C0C0] mb-5'>
                            <div>Copyright <FaRegCopyright size={10} className='mx-1 inline-block' /> <a href="#" className='text-[#2889E7]'>NiftyTrader</a></div>
                            <div>All rights reserved ver 5.7.3</div>
                        </div>
                    </div>
                </div>

            </div>




        </div>
    )
}

export default Footer