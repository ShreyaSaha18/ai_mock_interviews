// import { initializeApp, getApp, getApps } from "firebase/app";
// import { getAuth } from "firebase-admin/auth";
// // import { getFirestore } from "firebase-admin/firestore";
// // Import the functions you need from the SDKs you need
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"; // ✅ client SDK, NOT firebase-admin

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBg1tU6INDXV_rMhi4ujygBTXvaQ9ymMy8",
  authDomain: "prepwise-b4085.firebaseapp.com",
  projectId: "prepwise-b4085",
  storageBucket: "prepwise-b4085.firebasestorage.app",
  messagingSenderId: "451976508654",
  appId: "1:451976508654:web:2b1f363f9dcd6e567a2fff",
  measurementId: "G-VDS29PXLMZ"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);