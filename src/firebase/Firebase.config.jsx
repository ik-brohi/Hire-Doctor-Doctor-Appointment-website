// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyALRmgxM5meY7JWCYnpHLFfD3HUW8v1S44",
  authDomain: "doctor-appointment-6d01f.firebaseapp.com",
  projectId: "doctor-appointment-6d01f",
  storageBucket: "doctor-appointment-6d01f.appspot.com",
  messagingSenderId: "729954759635",
  appId: "1:729954759635:web:e4b1ad1418b1cacc03f526",
  measurementId: "G-VGWS2DVEN2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
