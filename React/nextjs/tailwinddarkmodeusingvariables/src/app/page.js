'use client'
import { useState } from "react";

export default function Home() {z

  const [darkMode, setDarkMode] = useState(false);
  // Process of using tailwind variables :-
  // 1. define variables in global.css in :root{} || --primary: #aedcfa;
  // 2. use those variables in tailwind.config.mjs to define new classes so those can be used with tailwind classes || primary: "var(--primary)",
  // 3. use those classes in your code || bg-primary

  // Process of using tailwind darkMode :-
  // 1. define darkMode in tailwind.config.mjs || darkMode: "class"
  // 2. use className="dark" in your code to enable dark mode
  // 3. use dark:bg-black to give black color in backgound if className="dark" dark mode

  return (
    <>
      <div className={`${darkMode && 'dark'}`}>
        <div
          className="
        w-[50vw] h-[50vh] 
        bg-white dark:bg-backgroundColor 
        text-black dark:text-primary
        text-center content-center">
          <input type="checkbox" onChange={() => setDarkMode(!darkMode)} /> Toggle Dark Mode
        </div>
      </div>
    </>

  );
}
