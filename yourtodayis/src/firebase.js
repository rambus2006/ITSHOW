// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import 'firebase/auth'; // TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBzCTJ-zy7S-1RWmN5ghk3KddHjbpWAGwc",
  authDomain: "yourtodayis.firebaseapp.com",
  projectId: "yourtodayis",
  storageBucket: "yourtodayis.appspot.com",
  messagingSenderId: "788232012425",
  appId: "1:788232012425:web:ccef0b2683d9f2bd54fc58",
  measurementId: "G-BQLHZKVM33"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = app.auth();

export { auth };