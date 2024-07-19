// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB5TpzWr3xe9C-QkXubPYPAxraPhIra3WU",
  authDomain: "medease-9da50.firebaseapp.com",
  projectId: "medease-9da50",
  storageBucket: "medease-9da50.appspot.com",
  messagingSenderId: "270779840722",
  appId: "1:270779840722:web:fc531be7d874e1354d150b",
  measurementId: "G-S1ZH49DBK9"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
// const analytics = getAnalytics(app);