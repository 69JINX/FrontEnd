"use client";
import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,

  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../firebaseConfig";

export const userAuthContext = createContext();

export default function AuthContext({ children }) {
  const [user, setUser] = useState("");

  function signUp(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
  }

  function logIn(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }
  function logOut() {
    return signOut(auth);
  }

  function googleSignIn() {
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth, provider);
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      // explanation : https://github.com/69JINX/FrontEnd/blob/main/Notes/firebase-explanation-of-onAuthStateChanged.png
      setUser(currentUser);  // however we login(email-password / googlePopupSignIn), the loggedIn user will be stored in user state
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <>
      <userAuthContext.Provider
        value={{ user, setUser, signUp, logIn, logOut, googleSignIn }}>
        {children}
      </userAuthContext.Provider>
    </>
  );
}
