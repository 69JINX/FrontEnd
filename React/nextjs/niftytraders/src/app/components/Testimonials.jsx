import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import { Poppins } from 'next/font/google';
import Testmo1 from './Testimonials/Testmo1';

const poppins_head = Poppins({
    subsets: ['latin'],
    weight: '500'
});

const poppins_sub = Poppins({
    subsets: ['latin'],
    weight: '300'
});

function Testimonials() {
    var settings = {
        // dots: true,
        infinite: true,
        speed: 5000,
        slidesToShow: 2.5,
        slidesToScroll: 2,
        autoplay: true,
        autoplaySpeed: 5000,
        mobileFirst: true,//add this one
        responsive: [
            {
                breakpoint: 1420,
                settings: {
                    slidesToShow: 2.5,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 1029,
                settings: {
                    slidesToShow: 1.5,
                    slidesToScroll: 1
                }
            },
        ]
    };
    return (
        <>
            <div className='w-[100%] text-black py-2 px-5'>
                <Slider {...settings}>
                    <div className='my-10 py-10 lg:py-0 px-5'>
                        <div className='p-5 lg:flex items-center relative text-center lg:text-left min-w-[300px]s max-w-[600px] shadow-lg rounded-3xl'>
                            <div className='lg:w-[450px] w-[100px] absolute lg:static top-[-20%] left-[30%] m-auto'>
                                <img src="testimony_slide1_1.svg" />
                            </div>
                            <div className='ms-3 pt-10 lg:pt-0'>
                                <div className={`py-3 text-xl ${poppins_head.className}`}>
                                    Bhavya Narotambhai
                                </div>
                                <div className={`text-[12px] ${poppins_sub.className}`}>
                                    Superb app! You guys are great. Everything's at my fingertips now: option analysis, EMA, pivot points, company profiles, gaps up/down, Fll & Dll data, ban lists... What's not here?! You keep nothing hidden. Thank you very much, guys! Thanks a lot!
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='my-10 py-10 lg:py-0 px-5'>
                        <div className='p-5 lg:flex items-center relative text-center lg:text-left min-w-[300px]s max-w-[600px] shadow-lg rounded-3xl'>
                            <div className='lg:w-[450px] w-[100px] absolute lg:static top-[-20%] left-[30%] m-auto'>
                                <img src="testimony_slide1_2.svg" />
                            </div>
                            <div className='ms-3 pt-10 lg:pt-0'>
                                <div className={`py-3 text-xl ${poppins_head.className}`}>
                                    Rajkumari Sahani
                                </div>
                                <div className={`text-[12px] ${poppins_sub.className}`}>
                                    The website and app are incredibly intuitive and easy to navigate. Whether you’re a seasoned trader or a beginner, you’ll find everything you need right at your fingertips. Overall, NiftyTrader has exceeded my expectations in every way.
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='my-10 py-10 lg:py-0 px-5'>
                        <div className='p-5 lg:flex items-center relative text-center lg:text-left min-w-[300px]s max-w-[600px] shadow-lg rounded-3xl'>
                            <div className='lg:w-[450px] w-[100px] absolute lg:static top-[-20%] left-[30%] m-auto'>
                                <img src="testimony_slide2_1.svg" />
                            </div>
                            <div className='ms-3 pt-10 lg:pt-0'>
                                <div className={`py-3 text-xl ${poppins_head.className}`}>
                                    Gowtham Rajamani
                                </div>
                                <div className={`text-[12px] ${poppins_sub.className}`}>
                                    Very informative and handy tool for trading. Kudos to the developers. Keep rocking with new enhancements. All data streaming without manual refreshment will be the milestone for this app. Best wishes
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='my-10 py-10 lg:py-0 px-5'>
                        <div className='p-5 lg:flex items-center relative text-center lg:text-left min-w-[300px]s max-w-[600px] shadow-lg rounded-3xl'>
                            <div className='lg:w-[450px] w-[100px] absolute lg:static top-[-20%] left-[30%] m-auto'>
                                <img src="testimony_slide1_1.svg" />
                            </div>
                            <div className='ms-3 pt-10 lg:pt-0'>
                                <div className={`py-3 text-xl ${poppins_head.className}`}>
                                    Vibha Hegde
                                </div>
                                <div className={`text-[12px] ${poppins_sub.className}`}>
                                    Thanks team for providing such an awesome app! You provide voice to open interest data, we don't need to understand what it wants to tell us. It clearly says long buildups or short unwinds. You made options trading more profitable now, thanks again!
                                </div>
                            </div>
                        </div>
                    </div>
                </Slider>
                <Testmo1 />
            </div>
        </>
    )
}

export default Testimonials