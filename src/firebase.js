// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCjNY7oE5-3Qt9vTzQ1DS7pJdu07SLfB1A",
  authDomain: "retlink-11bd6.firebaseapp.com",
  projectId: "retlink-11bd6",
  storageBucket: "retlink-11bd6.appspot.com",
  messagingSenderId: "83289468838",
  appId: "1:83289468838:web:321f20fa88e1f947fc6967",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
