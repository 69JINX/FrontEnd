'use client'
import React, { useEffect } from 'react'
import { Button, Modal } from "flowbite-react";
import { useState } from "react";
import { FaRegCirclePlay } from "react-icons/fa6";

function VideoModal() {
    
    const [openModal, setOpenModal] = useState(false);

    return (
        <div className='my-20'>
            <div className='flex justify-center lg:mx-40 mx-10 sm:mx-20 relative items-center h-[350px]'>
                <div className='absolute lg:left-0 lg:top-16 top-[-50px] p-1 z-20 ps-3 bg-[#1E6DA4]'>
                    <div className='bg-black lg:text-6xl text-3xl leading-snug font-bold lg:p-14 px-10'>
                        PASSION FOR
                        <div className='text-[#1E6DA4]'>PERFECTION</div>
                    </div>
                </div>
                <div className="h-full rounded-md lg:ms-80 lg:w-[60%] w-[100%] bg-[url('/assets/685ddec8f310242e1fd0a6a4bc54c0c8.7502ef0c.png')] ">
                    <FaRegCirclePlay size={130} className='absolute top-[30%] lg:left-[60%] left-[40%] cursor-pointer'
                        onClick={() => setOpenModal(true)}
                    />
                </div>
            </div>
            <Modal show={openModal} className='flex justify-start'>
                <Modal.Body className='w-[90vw] h-[90vh] bg-transparent max-w-[90vw]'>
                    <div className='relative  bg-transparent'>
                        <video width='100%' autoPlay controls loop>
                            <source src='assets/sushmavideosec.mp4' type='video/mp4' />
                            Your browser does not support the video tag. Please upgrade your browser.
                        </video>
                        <div className='absolute top-0 right-0 mx-2 text-xl cursor-pointer' onClick={() => setOpenModal(false)}>X</div>
                    </div>
                </Modal.Body>
            </Modal>
        </div>
    )
}

export default VideoModal