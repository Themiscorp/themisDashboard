// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAY_CMGdemVGQpyR_StLjITJmAUhI9bih0",
  authDomain: "sacred-choir-353619.firebaseapp.com",
  projectId: "sacred-choir-353619",
  storageBucket: "sacred-choir-353619.appspot.com",
  messagingSenderId: "748407800994",
  appId: "1:748407800994:web:9509ce4b54b440d451c3fb",
  measurementId: "G-QXETCZ5C6V"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const db = getFirestore();