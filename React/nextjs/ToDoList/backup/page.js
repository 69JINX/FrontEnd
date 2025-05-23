'use client'

import React, { useEffect, useRef, useState } from "react";
// import logo from 'logo.png'

export default function Home() {

  

  const [items, setItems] = useState(() => {
    if (typeof window !== "undefined") {
      return JSON.parse(localStorage.getItem("ToDoListItems")) ?? [];
    }
    return [];
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('ToDoListItems', JSON.stringify(items));
    }
    
  }, [items])

  const addItem = (e) => {
    e.preventDefault();
    if (!(e.target.item.value === "")) {
      setItems([...items, e.target.item.value]);
      e.target.item.value = "";
      localStorage.setItem('ToDoListItems', JSON.stringify(items));
    }
    else {
      alert("Please enter a value");
    }
  }

  
  return (
    <div className="p-5 md:w-[50%] m-auto">
      <img className="m-auto my-2" src="/logo1.png" width="50%" />
      <form className="text-center" onSubmit={addItem}>
        <div className="flex">
          <input name='item' className="p-2 text-black rounded-s-2xl text-4xl w-[90%] border border-black" />
          <button className="p-5 ms-2 rounded-e-2xl cursor-pointer bg-red-600 text-4xl"> Add </button>
        </div>
      </form>
      <div className="flex justify-end">
        <div
          onClick={() => setItems([])}
          className={` ${items.length ? 'block' : 'hidden'} rounded group my-2 text-right bg-red-500 p-2 text-3xl cursor-pointer relative`}
        >
          &#128465;
          <div className="mt-1 duration-300 opacity-0 overflow-hidden h-[0px] group-hover:opacity-100 group-hover:h-auto absolute left-[-60%] top-[100%] bg-white rounded text-black font-semibold text-[13px] px-1 whitespace-nowrap">
            Delete All
          </div>
        </div>
      </div>
      <div className="max-h-[72vh] overflow-scroll">
        <ul>
          {
            [...items].reverse().map((item, index, arr) => (

              <li key={index}>
                <div className=" mb-3 flex justify-between">
                  <div className="flex flex-grow">
                    <div className="content-center bg-slate-600 px-2 rounded-s-xl">{arr.length - index}</div>
                    <div
                      className="p-2 text-black w-[100%] overflow-x-scroll font-semibold bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500"
                    >
                      {item}
                    </div>
                  </div>
                  <div className="bg-red-500 rounded-e-xl text-2xl px-2 content-center cursor-pointer bg-gradient-to-b from-red-400 to-red-600 hover:bg-red-600"
                    data-value={(arr.length - index) - 1}
                    onClick={(e) => setItems(items.filter((_, index) => !(index == e.target.dataset.value)))}
                  >
                    &#128465;
                  </div>
                </div>
              </li>
            ))
          }
        </ul>
      </div>
    </div>

  );
}
