// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA0-m-l4xgNKZCO6EFuf9rLm4b6Lgfi6wg",
  authDomain: "logintest-800a2.firebaseapp.com",
  projectId: "logintest-800a2",
  storageBucket: "logintest-800a2.appspot.com",
  messagingSenderId: "139568778373",
  appId: "1:139568778373:web:51153c25e604a5a72eedec",
  measurementId: "G-R1M3Z42V9J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

console.log('hello world')
console.log(app)