// pages/index.jsx
'use client'
import { useEffect, useRef, useState } from "react";



export default function TableView() {


    const scrollContainerRef = useRef(null);
    const stickyHeaderRef = useRef(null);
    const [scrollLeft, setScrollLeft] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            if (scrollContainerRef.current) {
                setScrollLeft(scrollContainerRef.current.scrollLeft);
            }
        };

        const container = scrollContainerRef.current;
        container?.addEventListener("scroll", handleScroll);

        return () => container?.removeEventListener("scroll", handleScroll);
    }, []);


    return (
        <>
            {/* <div className="p-4">
                <div className="grid grid-cols-[200px_200px_200px_200px_200px_200px_200px_200px_200px_200px] sticky top-0 bg-white z-10 border-b border-gray-300">
                    {
                        [...Array(10)].map((col, index) => (
                            <div key={index} className="p-2 font-bold text-gray-700 border-r border-gray-300 last:border-r-0 bg-white">
                                {col}
                                HELLO
                            </div>
                        ))}
                </div>
                <div className="overflow-x-auto">
                    <div className="min-w-[800px]">
                        <div className="grid grid-cols-[200px_200px_200px_200px_200px_200px_200px_200px_200px_200px] sticky top-0 bg-white z-10 border-b border-gray-300">
                            {
                                [...Array(10)].map((col, index) => (
                                    <div key={index} className="p-2 font-bold text-gray-700 border-r border-gray-300 last:border-r-0 bg-white">
                                        {col}
                                        HELLO
                                    </div>
                                ))}
                        </div>
                        {[...Array(40)].map((row, rowIndex) => (
                            <div
                                className="grid grid-cols-[200px_200px_200px_200px_200px_200px_200px_200px_200px_200px] border-gray-200"
                            >
                                {[...Array(10)].map((col, colIndex) => (
                                    <div
                                        className="p-2 text-gray-600 border-r border-gray-200 last:border-r-0 border-b"
                                    >
                                        Content
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            </div> */}

            <div className="relative w-full overflow-hidden border border-gray-300 p-4">
                {/* Sticky Header */}
                <div
                    ref={stickyHeaderRef}
                    className="fixed left-4 top-0 flex bg-blue-500 text-white"
                    style={{ transform: `translateX(-${scrollLeft}px)` }}
                >
                    {["ID", "Name", "Price", "Category", "Stock", "Rating", "Brand", "Supplier", "Date"].map((header, index) => (
                        <div key={index} className="min-w-[200px] p-3 text-center font-bold border-r last:border-r-0">
                            {header}
                        </div>
                    ))}
                </div>

                {/* Scrollable Table */}
                <div
                    ref={scrollContainerRef}
                    className="mt-12 w-full overflow-x-auto whitespace-nowrap bg-gray-100"
                >
                    <div className="flex flex-wrap text-black">
                        {[...Array(40)].map((_, rowIndex) => (
                            <div key={rowIndex} className="flex w-max">
                                {["101", "Product A", "$50", "Electronics", "In Stock", "4.5", "Brand X", "Supplier Y", "01/02/2025"].map((data, colIndex) => (
                                    <div key={colIndex} className="min-w-[200px] p-3 text-center border border-gray-300">
                                        {data}
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </>
    );
}
