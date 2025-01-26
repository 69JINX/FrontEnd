"use client";
import { Button } from "flowbite-react";
import React, { useContext, useEffect } from "react";
import { userAuthContext } from "../Context/AuthContext";
import { useRouter } from "next/navigation";

function page() {
  const { user, logOut } = useContext(userAuthContext);
  const router = useRouter();

  useEffect(() => {
    console.log(user);
    console.log(user.email);
  }, [])

  const handleLogOut = async () => {
    try {
      await logOut();
      router.push("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <h1>This is the home page</h1>
      <h2>{user && user.email}</h2>
      <Button type="button" onClick={handleLogOut}>
        Log Out
      </Button>
    </>
  );
}

export default page;
