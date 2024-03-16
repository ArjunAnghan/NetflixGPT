// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCmHhcHAzoWqHQQ1r7BHlYsqCRazTtG-dk",
  authDomain: "netflixgpt-6b397.firebaseapp.com",
  projectId: "netflixgpt-6b397",
  storageBucket: "netflixgpt-6b397.appspot.com",
  messagingSenderId: "688156295499",
  appId: "1:688156295499:web:7effb54c7ab5d86818a8ce",
  measurementId: "G-Y5EQKNWGB0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();