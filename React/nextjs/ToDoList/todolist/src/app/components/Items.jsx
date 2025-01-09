'use client'
import React, { useState } from 'react'

function Items({ items, newItems, refs, index, item, arr, deleteItem, setItems, setnewItems, deletingItemInProgress }) {
    const [editMode, seteditMode] = useState(false);
    return (
        <li key={index} ref={refs.current[index]}>
            <div className=" mb-3 flex justify-between">
                <div className="flex flex-grow">
                    <div className="content-center bg-slate-600 px-2 rounded-s-xl">{arr.length - index}</div>
                    <input
                        disabled={!editMode}
                        className={`p-2 text-black w-[100%] overflow-x-scroll font-semibold ${!editMode?'bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500':'bg-white border border-black'}`}
                        type="text"
                        onChange={(e) => {
                            setnewItems(() => {
                                const updatedItems = [...newItems];
                                updatedItems[arr.length - (index + 1)] = e.target.value;
                                return updatedItems;
                            })
                            // setItems(() => {
                            //     const updatedItems = [...items];
                            //     updatedItems[arr.length - (index + 1)] = e.target.value;
                            //     return updatedItems;
                            // })
                        }}
                        value={newItems[arr.length - (index + 1)]}
                    // value={item}
                    />
                    <button
                        onClick={() => seteditMode(!editMode)}
                        className={` ${!editMode ? 'block' : 'hidden'} content-center px-2 cursor-pointer  text-2xl bg-gradient-to-b from-blue-400 to-blue-600 select-none`}>
                        &#128393;
                    </button>
                    <div className={`mx-2 flex ${editMode ? 'block' : 'hidden'}`}>

                        <button
                            onClick={() => {
                                seteditMode(!editMode)
                                setItems(newItems);
                            }}
                            className="content-center px-2 cursor-pointer rounded-xl my-2 text-xl bg-gradient-to-b from-green-400 to-green-600 select-none"
                        >
                            Save
                        </button>
                        <button
                            onClick={() => {
                                seteditMode(!editMode)
                                setnewItems(items);
                            }}
                            className="content-center px-2 cursor-pointer rounded-xl m-2 text-xl bg-gradient-to-b from-red-400 to-red-600 select-none"
                        >
                            Cancel
                        </button>
                    </div>
                </div>
                <button
                    className="bg-red-500 select-none rounded-e-xl text-2xl px-2 content-center cursor-pointer bg-gradient-to-b from-red-400 to-red-600 hover:bg-red-600"
                    data-value={(arr.length - index) - 1}
                    // onClick={(e) => setItems(items.filter((_, index) => !(index == e.target.dataset.value)))}
                    onClick={(!deletingItemInProgress) && deleteItem}
                >
                    &#128465;
                </button>
            </div>
        </li>
    )
}

export default Items