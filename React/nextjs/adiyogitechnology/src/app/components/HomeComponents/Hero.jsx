'use client'
import React, { useEffect, useRef, useState } from 'react'
import Slider from 'react-slick'

function Hero() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const slider1Ref = useRef(null);
    const slider2Ref = useRef(null);

    const handleDotClick = (index) => {
        setCurrentIndex(index); // Update the active index
        slider1Ref.current.slickGoTo(index);
        slider2Ref.current.slickGoTo(index);
    };

    const settings = {
        dots: false,
        fade: true,
        infinite: true,
        arrows: false,
        beforeChange: (_, next) => setCurrentIndex(next),
    };

    return (
        <>
            <div className='absolute top-0 m-20 ms-24 lg:leading-relaxed lg:text-5xl md:text-4xl font-normal font-Supera_700'>
                WE MAKE<br /> HOMES THAT<br /> UNDERSTAND <br />YOU
            </div>

            <div className='flex'>
                <div className="hidden lg:block w-2/5 bg-[url('../../public/assets/aa3adfea8ebb38b3b1b10f40dabc929a.png')]">

                    {/* Custom dots to control both sliders*/}
                    <ul className='mt-40 absolute z-10'>
                        {[0, 1, 2, 4].map((_, i) => (
                            <li className={` ${currentIndex === i ? "slick-active" : ""}`}>
                                <div className='buttons' onClick={() => handleDotClick(i)}
                                    style={{
                                        margin: '20px 50px', width: "7px", height: "15px", borderRadius: '30%', color: "blue", backgroundColor: '#13527E', cursor: 'pointer'
                                    }}>
                                    {/* {i + 1} */}
                                </div>
                            </li>
                        ))}
                    </ul>

                    <div className="slider-container relative">
                        <Slider {...settings} ref={slider1Ref}>
                            <div className='absolute bottom-0'>
                                <div>
                                    <video width="95%" autoPlay muted loop>
                                        <source src='assets/Create Next App_2.mp4' type='video/mp4' />
                                        Your browser does not support the video tag. Please upgrade your browser.
                                    </video>
                                </div>
                            </div>
                            {
                                ['LeftImg1.png', 'LeftImg2.png', 'LeftImg3.png']
                                    .map((img, i) => (
                                        <div key={i} className='absolute bottom-0'>
                                            <div>
                                                <img width="95%" src={`assets/${img}`} />
                                            </div>
                                        </div>
                                    ))
                            }
                        </Slider>
                    </div>
                </div>
                <div className='lg:w-3/5 w-full'>
                    <Slider {...settings} ref={slider2Ref}>
                        <div>
                            <div className='relative flex justify-center'>
                                <div className='lg:hidden absolute top-[30%] text-center text-5xl leading-loose font-bold font-Supera_700'>
                                    WE MAKE HOMES THAT<br /> UNDERSTAND YOU
                                </div>
                                <video className='h-screen object-cover' autoPlay muted loop>
                                    <source src='assets/Create Next App.mp4' type='video/mp4' />
                                    Your browser does not support the video tag. Please upgrade your browser.
                                </video>
                            </div>
                        </div>
                        {
                            ['RightImg1.png', 'RightImg2.png', 'RightImg3.png']
                                .map((img, i) => (
                                    <div key={i}>
                                        <div className='h-screen'>
                                            <img width="100%" className='h-full' src={`assets/${img}`} />
                                        </div>
                                    </div>
                                ))
                        }
                    </Slider>
                </div>
            </div>
        </>

    )
}

export default Hero