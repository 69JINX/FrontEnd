'use client'
import React, { useState } from 'react'
import { motion } from 'framer-motion'

function App() {
    const [show, setShow] = useState(false);
    return (
        <div>
            <div className='p-2 bg-indigo-400 rounded-3xl m-auto table cursor-pointer' onClick={() => setShow(!show)}>CLICK</div>
            <Modal show={show} />
        </div>
    )
}

export default App


const Modal = ({ show }) => {
    return (
        <motion.div className={`fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-amber-300 w-[40vw] h-[70vh] rounded-4xl`}
            initial={{ scale: 0 }}
            animate={{ rotate: show ? 0 : 360, scale: show ? 1 : 0 }}
            transition={{
                type: "spring",
                stiffness: 260,
                damping: 20
            }}
        >
            MOTION
        </motion.div>
    )
}