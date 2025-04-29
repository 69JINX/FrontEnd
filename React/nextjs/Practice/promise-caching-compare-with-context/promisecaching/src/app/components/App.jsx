'use client'
import React, { useState } from 'react'
import P1 from './withPromiseCaching/P1'
import P2 from './withPromiseCaching/P2'
import P3 from './withPromiseCaching/P3'
import P4 from './withPromiseCaching/P4'
import P5 from './withPromiseCaching/P5'
import C1 from './withoutPromiseCaching/C1'
import C2 from './withoutPromiseCaching/C2'
import C3 from './withoutPromiseCaching/C3'
import C4 from './withoutPromiseCaching/C4'
import C5 from './withoutPromiseCaching/C5'

function App() {

    const [show1, setShow1] = useState(false);
    const [show2, setShow2] = useState(false);

    return (
        <div className='flex'>
            <div className='w-[700px]'>
                <div className='m-5 flex gap-3'>
                    <label className="inline-flex items-center cursor-pointer">
                        <input type="checkbox" value="" className="sr-only peer" onChange={() => setShow1(!show1)} />
                        <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600 dark:peer-checked:bg-blue-600"></div>
                    </label>
                    <div className='text-green-600 font-bold '>With Promise Caching</div>
                </div>
                {
                    show1 && <div>
                        <P1 />
                        <P2 />
                        <P3 />
                        <P4 />
                        <P5 />
                    </div>
                }
            </div>
            <div>
                <div className='m-5 flex gap-3'>
                    <label className="inline-flex items-center cursor-pointer">
                        <input type="checkbox" value="" className="sr-only peer" onChange={() => setShow2(!show2)} />
                        <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600 dark:peer-checked:bg-blue-600"></div>
                    </label>
                    <div className='text-red-600 font-bold '>Without Promise Caching</div>
                </div>
                {
                    show2 && <div>
                        <C1 />
                        <C2 />
                        <C3 />
                        <C4 />
                        <C5 />
                    </div>
                }
            </div>
        </div>
    )
}

export default App