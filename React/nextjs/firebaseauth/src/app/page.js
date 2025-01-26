"use client";
import { useContext, useEffect, useState } from "react";
import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import { useRouter, redirect } from "next/navigation";
import Link from "next/link";
import { userAuthContext } from "./Context/AuthContext";

export default function Home() {
  const [formData, setFormData] = useState({});
  const [error, setError] = useState("");
  const { logIn, googleSignIn } = useContext(userAuthContext);
  const router = useRouter();

  const handleLogIn = async (e) => {
    e.preventDefault();
    try {
      setError("");
      await logIn(formData.email, formData.password);
      router.push("/dashboard");
    } catch (err) {
      setError(err.message);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
      router.push("/dashboard");
    }
    catch (err) {
      console.log(err);
    }
  }

  return (
    <>
      <div className="h-[80vh] content-center">
        <form
          className="flex m-auto max-w-md flex-col gap-4"
          onSubmit={handleLogIn}
        >
          <div>
            <div
              className={`bg-red-500 p-2 text-center font-semibold  ${error ? "block" : "hidden"}`}
            >
              {error}
            </div>
            <div className="mb-2 block">
              <Label htmlFor="email" value="Email" />
            </div>
            <TextInput
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              id="email"
              type="text"
              placeholder="name@example.com"
              required
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="password" value="Password" />
            </div>
            <TextInput
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
              id="password"
              type="password"
              required
            />
          </div>
          <div className="flex items-center gap-2">
            <Checkbox id="remember" />
            <Label htmlFor="remember">Remember me</Label>
          </div>
          <Button type="submit">Log In</Button>
          <div className="flex justify-center">
            Create a new Account{" "}
            <Link className="text-blue-600 ms-3" href="/signup">
              Sign Up
            </Link>
          </div>
          <a href="#" type="button" className="login-with-google-btn m-auto" onClick={handleGoogleSignIn}>
            Sign in with Google
          </a>
        </form>
      </div>
    </>
  );
}
