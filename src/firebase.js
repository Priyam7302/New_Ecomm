// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics"
const firebaseConfig = {
    apiKey: "AIzaSyBIkChOsJHYFOzTDNV-YzJoKvR4g9fQJKU",
    authDomain: "ecomm-react01.firebaseapp.com",
    projectId: "ecomm-react01",
    storageBucket: "ecomm-react01.firebasestorage.app",
    messagingSenderId: "321882295008",
    appId: "1:321882295008:web:1364418e9004bf9f169e85",
    measurementId: "G-9XM87HVRNZ"
};

const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app)
export const auth = getAuth(app);
export const db = getFirestore(app);
