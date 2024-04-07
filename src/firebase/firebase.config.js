// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDM_5CGCTOIV_HDogAHDKpuojcse6SByTg",
    authDomain: "dragon-news-abrar.firebaseapp.com",
    projectId: "dragon-news-abrar",
    storageBucket: "dragon-news-abrar.appspot.com",
    messagingSenderId: "503002113877",
    appId: "1:503002113877:web:6d8e49217b3714f0ecf1dc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;