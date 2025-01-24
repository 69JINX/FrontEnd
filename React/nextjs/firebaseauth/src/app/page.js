'use client'
import { useContext, useEffect } from "react";
import { userAuthContext } from "./Context/AuthContext";

export default function Home() {
  const data = useContext(userAuthContext);
  console.log(data);
  useEffect(() => {
    const data1 = () => {
      console.log('hello');
    }
    return (() => data1());
  }, [])
  return (
    <>
      This is the main page
    </>
  );
}
