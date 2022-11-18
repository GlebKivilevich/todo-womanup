import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";


// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyBwfgWFga749SB8E471qhBF9nd-RHKyJV8",
//   authDomain: "todo-womanup-6d6f0.firebaseapp.com",
//   databaseURL: "https://todo-womanup-6d6f0-default-rtdb.europe-west1.firebasedatabase.app",
//   projectId: "todo-womanup-6d6f0",
//   storageBucket: "todo-womanup-6d6f0.appspot.com",
//   messagingSenderId: "1042175396422",
//   appId: "1:1042175396422:web:9da174dceb77bbd4579847",
//   measurementId: "G-F3PX59HK1G"
// };

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);