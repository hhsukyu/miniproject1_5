// Firebase SDK 라이브러리 가져오기
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";
import { collection, addDoc } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";
import { getDocs } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";

// Firebase 구성 정보 설정
export const firebaseConfig = {
    apiKey: "AIzaSyAz6p5Wza5KhbEqeTMFti77zc7wjfyciJg",
    authDomain: "miniproject1-5-book.firebaseapp.com",
    projectId: "miniproject1-5-book",
    storageBucket: "miniproject1-5-book.appspot.com",
    messagingSenderId: "665433573451",
    appId: "1:665433573451:web:6fb2e14433450e6a28a5ce",
    measurementId: "G-8TJ2GHPBR2"
};

// Firebase 인스턴스 초기화
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export {collection, addDoc};
export {getDocs};
export {getAuth, signInWithEmailAndPassword};

