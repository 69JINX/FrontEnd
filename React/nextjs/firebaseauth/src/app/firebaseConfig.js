import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDjA9J4cw1JMro-4kkEi440g8nlSkRCnwE",
  authDomain: "test01-authentication.firebaseapp.com",
  projectId: "test01-authentication",
  storageBucket: "test01-authentication.firebasestorage.app",
  messagingSenderId: "921202444390",
  appId: "1:921202444390:web:7708e83b56cb494b0605a7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
