import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyChoFfqYCwyTjCwkMXC4Fg6rPzgcJACaNE",
  authDomain: "password--manager-5ed0a.firebaseapp.com",
  projectId: "password--manager-5ed0a",
  storageBucket: "password--manager-5ed0a.firebasestorage.app",
  messagingSenderId: "215520315152",
  appId: "1:215520315152:web:b1fa68605a2f1b16508795"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getDatabase(app);