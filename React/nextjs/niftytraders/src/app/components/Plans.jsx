import { Poppins } from 'next/font/google';
import React from 'react'
import { SiTicktick } from "react-icons/si";
import { RxCrossCircled } from "react-icons/rx";

const poppins_head = Poppins({
    subsets: ['latin'],
    weight: '700'
});
const poppins_sub = Poppins({
    subsets: ['latin'],
    weight: '500'
});



function Plans() {
    return (

        <div className='price-list overflow-scroll'>
            <div className={`text-black text-3xl py-5 ${poppins_head.className} text-center`}>
                Pricing Plan
            </div>
            <table className='p-10  text-black mx-10'>
                <tr>
                    <th className='p-5'>
                        <div className='flex'>
                            <div className={`text-lg ${poppins_head.className}`}>
                                Compare Plans
                            </div>
                            <div className={`border px-3 py-1 rounded-full text-sm ms-5 ${poppins_sub.className}`}>
                                60% Off
                            </div>
                        </div>
                        <div className='text-[#999999] py-4 text-sm font-light text-left leading-5'>
                            Choose your workspace plan according to your<br /> organization plan
                        </div>
                    </th>
                    {
                        [{ price: 'Free', duration: '/Lifetime', button: 'Create Free Account' },
                        { price: '₹ 849', duration: '/Month', button: 'Login to Buy' },
                        { price: '₹ 4310', duration: '/Year', button: 'Login to Buy' },
                        ].map((item, i) => (
                            <th key={i} className='pb-4 text-center m-auto'>
                                <div className='lg:flex items-end text-center py-2 lg:py-5 justify-center'>
                                    <div className={`${poppins_head.className} leading-none text-2xl lg:text-4xl`}>{item.price}</div>
                                    <div className={`${poppins_sub.className} ms-2 text-sm leading-6 text-[#999999]`}>{item.duration}</div>
                                </div>
                                <div className='cursor-pointer py-3 mx-10 px-2 lg:px-16 rounded-md text-white bg-[#236AD4]'>
                                    {item.button}
                                </div>
                            </th>
                        ))
                    }
                </tr>
                {
                    [
                        { topic: 'Number of Users', free: '1', month: '3', year: '1' },
                        { topic: 'Users Per Page', free: '5 pages', month: '50 pages', year: <div className='py-5'><div>Unlimited</div><div className='pt-2 text-[#999999]'>Pages Add-ons on Demand</div></div> },
                        { topic: 'Includes essintial features to get started', free: <SiTicktick className='m-auto' size={20} color='green' />, month: <SiTicktick className='m-auto' size={20} color='green' />, year: <SiTicktick className='m-auto' size={20} color='green' /> },
                        { topic: 'More advanced features for increased producivity', free: <RxCrossCircled className='m-auto' size={25} color='red' />, month: <SiTicktick className='m-auto' size={20} color='green' />, year: <SiTicktick className='m-auto' size={20} color='green' /> },
                        { topic: 'Designing & Development', free: <RxCrossCircled className='m-auto' size={25} color='red' />, month: <SiTicktick className='m-auto' size={20} color='green' />, year: <SiTicktick className='m-auto' size={20} color='green' /> },
                        { topic: 'Customizable options to meet your specific needs', free: <RxCrossCircled className='m-auto' size={25} color='red' />, month: <SiTicktick className='m-auto' size={20} color='green' />, year: <SiTicktick className='m-auto' size={20} color='green' /> },
                        { topic: 'Secure data storage', free: <RxCrossCircled className='m-auto' size={25} color='red' />, month: <SiTicktick className='m-auto' size={20} color='green' />, year: <SiTicktick className='m-auto' size={20} color='green' /> },
                        { topic: 'Email Support', free: <RxCrossCircled className='m-auto' size={25} color='red' />, month: <SiTicktick className='m-auto' size={20} color='green' />, year: <SiTicktick className='m-auto' size={20} color='green' /> },
                        { topic: '24/7 customer support', free: <RxCrossCircled className='m-auto' size={25} color='red' />, month: <SiTicktick className='m-auto' size={20} color='green' />, year: <SiTicktick className='m-auto' size={20} color='green' /> },
                        { topic: 'Analytics and reporting', free: <RxCrossCircled className='m-auto' size={25} color='red' />, month: <SiTicktick className='m-auto' size={20} color='green' />, year: <SiTicktick className='m-auto' size={20} color='green' /> },
                        { topic: 'Account Management', free: <SiTicktick className='m-auto' size={20} color='green' />, month: <SiTicktick className='m-auto' size={20} color='green' />, year: <SiTicktick className='m-auto' size={20} color='green' /> }
                    ].map((item, i) => (
                        <tr key={i}>
                            <td className={`p-5 text-[12px] lg:text-sm  ${poppins_sub.className}`}>
                                {item.topic}
                            </td>
                            <td className={`text-center text-[12px] lg:text-sm ${poppins_sub.className}`}>
                                {item.free}
                            </td>
                            <td className={`text-center text-[12px] lg:text-sm ${poppins_sub.className}`}>
                                {item.month}
                            </td>
                            <td className={`text-center text-[12px] lg:text-sm ${poppins_sub.className}`}>
                                {item.year}
                            </td>
                        </tr>
                    ))
                }
            </table>
        </div>

    )
}

export default Plans