'use client'
import Component1 from "./Component1";
import Component2 from "./Component2";
import { useState } from "react";

export default function Home() {
  const [temp, setTemp] = useState(false);
  return (
    <>
      <Component1 />
      <Component2 />
      <button className="bg-white text-black p-2 rounded-lg" onClick={() => setTemp(!temp)}>click to re-render parent</button>
    </>
  );
}
