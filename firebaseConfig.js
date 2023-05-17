// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDVz_1UdDjtWH-SMYqe1hwdZ_bNtC9SNwQ",
  authDomain: "regia-86a78.firebaseapp.com",
  projectId: "regia-86a78",
  storageBucket: "regia-86a78.appspot.com",
  messagingSenderId: "16856246859",
  appId: "1:16856246859:web:7bbdc8b1bc9049c21dfbce",
  measurementId: "G-NNT0PK7LSG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);