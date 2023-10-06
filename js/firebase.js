// Firebase SDK 라이브러리 가져오기
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";
import { collection, addDoc } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";
import { getDocs } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";

// Firebase 구성 정보 설정
export const firebaseConfig = {
    apiKey: "AIzaSyCmyTLmCx4ATTywUltIk7z86ubTahbIdLo",
    authDomain: "miniproject-2b242.firebaseapp.com",
    projectId: "miniproject-2b242",
    storageBucket: "miniproject-2b242.appspot.com",
    messagingSenderId: "648408536617",
    appId: "1:648408536617:web:0502deae8087abe4296e38",
    measurementId: "G-84D1WE1N6K"
};

// Firebase 인스턴스 초기화
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export {collection, addDoc};
export {getDocs};
