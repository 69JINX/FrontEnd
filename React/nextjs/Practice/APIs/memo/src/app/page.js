'use client'
import Component1 from "./Component1";
import { useState } from "react";
import Component2 from "./Component2";

export default function Home() {
  const [parentCount, setParentCount] = useState(0);
  const [childCount, setChildCount] = useState(0);
  return (
    <div>
      <div style={{ margin: "10px" }}>{parentCount}</div>
      <button onClick={() => setParentCount((prev) => prev + 1)}>Increase count to trigger re-render of Parent Component</button><br /><br />
      <button onClick={() => setChildCount((prev) => prev + 1)}>Increase count to trigger re-render of Child Components</button>
      <Component1 value={childCount} />
      <Component2 value={childCount} />
    </div>
  );
}
