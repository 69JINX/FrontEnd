'use client'

import React, { createRef, useEffect, useRef, useState } from "react";
import Items from "./components/Items";
// import logo from 'logo.png'

export default function Home() {
  const refs = useRef([]);
  const [refslength, setrefslength] = useState(0);
  const [deletingItemInProgress, setdeletingItemInProgress] = useState(false);
  const [newItems, setnewItems] = useState([]);
  const [items, setItems] = useState(() => {
    if (typeof window !== "undefined") {
      if(localStorage.getItem("ToDoListItems")) refs.current = JSON.parse(localStorage.getItem("ToDoListItems")).map((_, i) => refs.current[i] || React.createRef());
      setnewItems(JSON.parse(localStorage.getItem("ToDoListItems")) ?? []);
      return JSON.parse(localStorage.getItem("ToDoListItems")) ?? [];
    }
    return [];
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('ToDoListItems', JSON.stringify(items));
    }
    setnewItems(items);
    refs.current = items.map((_, i) => refs.current[i] || React.createRef());
    setrefslength(refs.current.length);
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

  const deleteItem = (e) => {
    setdeletingItemInProgress(true);
    refs.current[(refs.current.length - e.target.dataset.value - 1)].current.classList.add('remove-item-animation');
    setTimeout(() => {
      setItems(items.filter((_, index) => !(index == e.target.dataset.value)))
      setdeletingItemInProgress(false);
    }, 500)

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
          className="block rounded group my-2 text-right bg-red-500 p-2 text-3xl cursor-pointer relative"
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
            items.length === refslength && [...items].reverse().map((item, index, arr) => (
              <Items items={items} newItems={newItems} refs={refs} index={index} item={item} arr={arr} deleteItem={deleteItem} setItems={setItems} setnewItems={setnewItems} deletingItemInProgress={deletingItemInProgress} />
            ))
          }
        </ul>
      </div>
    </div>

  );
}
