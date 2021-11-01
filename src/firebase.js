
import { initializeApp } from "firebase/app";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDIN3JrZgu6V-i99Ah75Er9Dj5wC8bfPHo",
  authDomain: "e-commerce-a41a2.firebaseapp.com",
  projectId: "e-commerce-a41a2",
  storageBucket: "e-commerce-a41a2.appspot.com",
  messagingSenderId: "1054741397252",
  appId: "1:1054741397252:web:89bb2fe5bf9114bb105a51"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

export {firebaseApp}