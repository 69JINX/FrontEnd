import { Accordion } from 'flowbite-react';
import { Poppins } from 'next/font/google';
import React from 'react'

const poppins_head = Poppins({
    subsets: ['latin'],
    weight: '700'
});
const poppins_sub = Poppins({
    subsets: ['latin'],
    weight: '400'
});

function FAQ() {
    return (
        <div>
            <div className={`text-black text-3xl py-5 ${poppins_head.className} text-center`}>
                FAQ
            </div>
            <div className={`w-[90vw] lg:w-[60vw] m-auto text-black ${poppins_sub.className}`}>
                <Accordion collapseAll className='border-none'>
                    <Accordion.Panel>
                        <Accordion.Title>What is NiftyTrader Prime Plan?</Accordion.Title>
                        <Accordion.Content className='text-sm text-[#999999] bg-[#f5f5f5]'><p>NiftyTrader Prime Plan.</p></Accordion.Content>
                    </Accordion.Panel>
                    <Accordion.Panel>
                        <Accordion.Title>What are the premium features included with the prime plan?</Accordion.Title>
                        <Accordion.Content className='text-sm text-[#999999] bg-[#f5f5f5]'><p>Prime Plans</p></Accordion.Content>
                    </Accordion.Panel>
                    <Accordion.Panel>
                        <Accordion.Title>Can i try the premium features before I subscribe to the prime plan?</Accordion.Title>
                        <Accordion.Content className='text-sm text-[#999999] bg-[#f5f5f5]'><p>YES</p></Accordion.Content>
                    </Accordion.Panel>
                    <Accordion.Panel>
                        <Accordion.Title>How do I subscribe the prime plan?</Accordion.Title>
                        <Accordion.Content><p></p></Accordion.Content>
                    </Accordion.Panel>
                    <Accordion.Panel>
                        <Accordion.Title>Can I upgrade my subscription level?</Accordion.Title>
                        <Accordion.Content><p></p></Accordion.Content>
                    </Accordion.Panel>
                    <Accordion.Panel>
                        <Accordion.Title>What payment methods do you accept?</Accordion.Title>
                        <Accordion.Content><p></p></Accordion.Content>
                    </Accordion.Panel>
                    <Accordion.Panel>
                        <Accordion.Title>Do you offer any discount or promotions.</Accordion.Title>
                        <Accordion.Content><p></p></Accordion.Content>
                    </Accordion.Panel>
                </Accordion>
            </div>
        </div>
    )
}

export default FAQ