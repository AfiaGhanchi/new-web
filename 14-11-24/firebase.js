

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.18.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.18.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.18.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCUVZFjzfU1z-UcUjw_QmmXV486P9xwPnQ",
  authDomain: "login-signup-c1ba4.firebaseapp.com",
  projectId: "login-signup-c1ba4",
  storageBucket: "login-signup-c1ba4.appspot.com",
  messagingSenderId: "135940275445",
  appId: "1:135940275445:web:e59899c6be8eeb0156d9bc",
  measurementId: "G-3MT36B22S1"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
    




