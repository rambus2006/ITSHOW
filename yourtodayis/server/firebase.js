import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

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

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };