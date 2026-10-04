// firebase.js

import { initializeApp } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-app.js";

import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/12.2.1/firebase-auth.js";

import {
    getDatabase,
    ref,
    set,
    push,
    get,
    update,
    remove,
    onValue
} from "https://www.gstatic.com/firebasejs/12.2.1/firebase-database.js";

const firebaseConfig = {
    apiKey: "AIzaSyBb_AghOEtVtYebyG82rkKa2ePyDBKKceU",
    authDomain: "atm-pulse-cloud.firebaseapp.com",
    projectId: "atm-pulse-cloud",
    storageBucket: "atm-pulse-cloud.firebasestorage.app",
    messagingSenderId: "573681425950",
    appId: "1:573681425950:web:67acfcaa4629fc9e69580f",
    measurementId: "G-WWXGCC927E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Authentication
const auth = getAuth(app);

// Realtime Database
const database = getDatabase(app);

export {
    app,
    auth,
    database,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
    ref,
    set,
    push,
    get,
    update,
    remove,
    onValue
};