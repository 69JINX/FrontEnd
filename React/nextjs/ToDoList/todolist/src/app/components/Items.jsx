'use client'
import React, { useRef, useState } from 'react'

function Items({ items, newItems, refs, index, item, arr, deleteItem, setItems, setnewItems, deletingItemInProgress }) {
    const [editMode, seteditMode] = useState(false);
    const elementRef = useRef(null);
    const [size, setSize] = useState(false);

    const scrollToElement = (e) => {
        elementRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    const save = () => {
        seteditMode(!editMode)
        setItems(newItems);
    }
    const cancel = () => {
        seteditMode(!editMode)
        setnewItems(items);
    }

    return (
        <li key={index} ref={refs.current[index]}>
            <div className={`mb-3 flex justify-between ${size ? 'h-[80vh]' : 'h-[10vh]'}`} ref={elementRef}>
                <div className="flex flex-grow" >
                    <div className='flex flex-col'>
                        <div className="content-center grow bg-slate-600 px-2 rounded-ss-xl">{arr.length - index}</div>
                        <div className='bg-slate-400 grow grid  place-items-center' onClick={() => setSize(!size)}>
                            {!size ? <>&#x1f867;</> : <>&#129125;</>}
                        </div>
                    </div>
                    <button
                        onClick={(e) => {

                            seteditMode(!editMode)
                            scrollToElement(e);
                            setSize(true)
                        }}
                        className={` ${!editMode ? 'block' : 'hidden'} content-center px-2 cursor-pointer text-s,m md:text-2xl bg-gradient-to-b from-blue-400 to-blue-600 select-none`}>
                        &#9998; {/* edit */}
                    </button>
                    <textarea
                        className={` ${editMode ? 'block' : 'hidden'} p-2 text-black w-[100%] text-xs md:text-base font-semibold h-full overflow-scroll bg-white border border-black`}
                        type="text"
                        onChange={(e) => {
                            setnewItems(() => {
                                const updatedItems = [...newItems];
                                updatedItems[arr.length - (index + 1)] = e.target.value;
                                return updatedItems;
                            })
                        }}
                        value={newItems[arr.length - (index + 1)]}
                    />
                    <div
                        className={`${!editMode ? 'block' : 'hidden'} whitespace-pre-line h-full text-sm md:text-base p-2 text-black w-[100%] overflow-scroll font-semibold bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500`}
                    >
                        {newItems[arr.length - (index + 1)]}
                    </div>

                </div>
                <div className='flex flex-col'>
                    {editMode && <button
                        onClick={save}
                        className="content-center grow px-2 cursor-pointer rounded-se-xl text-xl bg-gradient-to-b from-green-400 to-green-600 select-none"
                    >
                        Save
                    </button>}
                    {editMode && <button
                        onClick={cancel}
                        className="content-center px-2 cursor-pointer text-xl bg-gradient-to-b from-red-400 to-red-600 select-none"
                    >
                        Cancel
                    </button>}
                    <button
                        className="bg-red-500 select-none rounded-ee-xl text-sm md:text-2xl px-2 content-center cursor-pointer bg-gradient-to-b from-red-400 to-red-600 hover:bg-red-600"
                        data-value={(arr.length - index) - 1}
                        onClick={(!deletingItemInProgress) && deleteItem}
                    >
                        &#128465; {/* delete */}
                    </button>
                </div>
            </div>
        </li>
    )
}

export default Items