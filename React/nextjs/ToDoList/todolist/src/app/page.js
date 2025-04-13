'use client'

import React, { useEffect, useRef, useState } from "react";
import Items from "./components/Items";

export default function Home() {
  const refs = useRef([]);
  const [refslength, setrefslength] = useState(0);
  const [deletingItemInProgress, setdeletingItemInProgress] = useState(false);
  const [inputSize, setInputSize] = useState(true);
  const [newItems, setnewItems] = useState([]);
  const [items, setItems] = useState(() => {
    if (typeof window !== "undefined") {
      if (localStorage.getItem("ToDoListItems")) refs.current = JSON.parse(localStorage.getItem("ToDoListItems")).map((_, i) => refs.current[i] || React.createRef());
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
    <div className="p-5 w-full m-auto">
      <img className="m-auto my-2" src="/logo1.png" width="20%" />
      <form className="text-center" onSubmit={addItem}>
        <div className="flex">
          <textarea name='item' className={`p-2 text-black rounded-s-2xl text-xs md:text-4xl ${!inputSize && 'h-[70vh]'} w-[90%] border border-black`} />
          <button className="p-2 md:p-5 ms-2 rounded-e-2xl cursor-pointer bg-red-600 text-sm md:text-4xl"> Add </button>
        </div>
      </form>
      <div className="flex justify-between">
        <button
          onClick={() => setInputSize(!inputSize)}
          className="block rounded my-2 text-sm text-right bg-blue-500 p-2 cursor-pointer relative"
        >
          {inputSize ? <>&#x1f867;</> : <>&#129125;</>}
        </button>
        <button
          onClick={() => setItems([])}
          className="block rounded my-2 text-sm text-right bg-red-500 p-2 cursor-pointer relative"
        >
          Delete All
        </button>
      </div>
      <div className="max-h-[72vh] overflow-scroll">
        <ul>
          {
            items.length === refslength && [...items].reverse().map((item, index, arr) => (
              <Items key={index}
                items={items} newItems={newItems} refs={refs} index={index} item={item}
                arr={arr} deleteItem={deleteItem} setItems={setItems} setnewItems={setnewItems}
                deletingItemInProgress={deletingItemInProgress} />
            ))
          }
        </ul>
      </div>
    </div>

  );
}
