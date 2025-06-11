// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAMPSU2nFTyXWhz-Pab586ryeKnBr6xXfI",
  authDomain: "pam-posts-joao-henrique-a0e2c.firebaseapp.com",
  projectId: "pam-posts-joao-henrique-a0e2c",
  storageBucket: "pam-posts-joao-henrique-a0e2c.firebasestorage.app",
  messagingSenderId: "171483911853",
  appId: "1:171483911853:web:7fef2b2e456630e544d824"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);