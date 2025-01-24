'use client'
import { createContext, useEffect, useState } from 'react'
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
} from 'firebase/auth'
import { auth } from '../firebaseConfig';

export const userAuthContext = createContext();

export default function AuthContext({ children }) {

    const [user, setUser] = useState('');

    function signUp(email, password) {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    function logIn(email, password) {
        return signInWithEmailAndPassword(auth, email, password);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => { // explanation : 
            setUser(currentUser);
        })
        return () => {
            unsubscribe();
        }
    }, [])

    return (
        <>
            <userAuthContext.Provider value={null}>
                {children}
            </userAuthContext.Provider>
        </>
    )
}