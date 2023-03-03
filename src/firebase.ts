// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
//ADDED
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA-_QmZjL_aJEFBGVVMYge9OuA0Ecx2R7I",
  authDomain: "myfirstproject-d0289.firebaseapp.com",
  projectId: "myfirstproject-d0289",
  storageBucket: "myfirstproject-d0289.appspot.com",
  messagingSenderId: "941840182827",
  appId: "1:941840182827:web:42e0f766d8a084400bc46e",
  measurementId: "G-8T6TTQCFJE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
//ADDED
export const auth = getAuth(app);