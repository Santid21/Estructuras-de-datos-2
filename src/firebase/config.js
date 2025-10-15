import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBIah4vGmjUUIGdDh0wPRjQoaDmZ8iFsvI",
  authDomain: "sssss-56d92.firebaseapp.com",
  projectId: "sssss-56d92",
  storageBucket: "sssss-56d92.firebasestorage.app",
  messagingSenderId: "454501714271",
  appId: "1:454501714271:web:84d17c77c64831304c8eea",
  measurementId: "G-BBMC0KBV1H"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
