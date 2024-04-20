// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "react-firebase-tailwind-frame.firebaseapp.com",
  projectId: "react-firebase-tailwind-frame",
  storageBucket: "react-firebase-tailwind-frame.appspot.com",
  messagingSenderId: "361718491986",
  appId: "1:361718491986:web:48c61cb1424dd03320688b",
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();
