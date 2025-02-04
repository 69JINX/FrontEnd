'use client'
import { useRef, useCallback } from 'react';

const TableView1 = () => {
    const headerRef = useRef(null);
    const contentRef = useRef(null);

    const handleScroll = useCallback((e) => {
        if (headerRef.current) {
            headerRef.current.scrollLeft = e.currentTarget.scrollLeft;
        }
    }, []);

    return (

        <>
            <div className='w-[100vw] h-[60vh] bg-pink-400'>
            </div>
            <div className="relative text-black mx-5">
                {/* Sticky Header Container */}
                <div
                    ref={headerRef}
                    className="header sticky top-0 z-10 bg-white overflow-hidden shadow-sm"
                >
                    <div className="flex min-w-[1000px]">
                        {[...Array(50)].map((_, index) => (
                            <div
                                key={index}
                                className="w-[100px] flex-shrink-0 p-4 border-b border-r font-semibold"
                            >
                                Header {index + 1}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Scrollable Content Container */}
                <div
                    ref={contentRef}
                    onScroll={handleScroll}
                    className="overflow-x-auto"
                >
                    <div className="flex min-w-[1000px] text-white">
                        {[...Array(50)].map((_, rowIndex) => (
                            <div key={rowIndex} className="flex flex-wrap">
                                {[...Array(30)].map((_, colIndex) => (
                                    <div
                                        key={colIndex}
                                        className="w-[100px] flex-shrink-0 p-4 border-b border-r h-20"
                                    >
                                        Item {rowIndex + 1}-{colIndex + 1}
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default TableView1;