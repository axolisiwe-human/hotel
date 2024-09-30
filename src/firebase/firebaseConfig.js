// src/firebase/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyC4uMSHTn3lUSZVJWLPGgkIQmsr-BfavQQ",
    authDomain: "hotel-7915f.firebaseapp.com",
    projectId: "hotel-7915f",
    storageBucket: "hotel-7915f.appspot.com",
    messagingSenderId: "269588970562",
    appId: "1:269588970562:web:06011bff870307d18bc1db",
    measurementId: "G-TT2RRLK3GT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
