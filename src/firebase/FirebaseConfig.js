// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
import {getDatabase} from "firebase/database";
import {getStorage} from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyDvtzI_5xeZCU-noMfSthmMN1tz6glkBZ0",
  authDomain: "e-commerce-pp909.firebaseapp.com",
  projectId: "e-commerce-pp909",
  storageBucket: "e-commerce-pp909.appspot.com",
  messagingSenderId: "642281377870",
  appId: "1:642281377870:web:1768f7a4bf4eb9e28bf31f",
  measurementId: "G-50B8J39WEG"
};

// Initialize Firebase
const FIREBASE_APP = initializeApp(firebaseConfig);

export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIREBASE_FIRESTORE = getFirestore(FIREBASE_APP);
export const FIREBASE_REALTIME_DB = getDatabase(FIREBASE_APP);
export const FIREBASE_STORAGE = getStorage(FIREBASE_APP);