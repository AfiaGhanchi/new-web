// app.js

import { auth, db } from './firebase.js';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.18.0/firebase-auth.js";
import { setDoc, doc } from "https://www.gstatic.com/firebasejs/9.18.0/firebase-firestore.js";

// Signup Functionality
const signupForm = document.getElementById('signupForm');
signupForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const email = document.getElementById('signupEmail').value;
  const password = document.getElementById('signupPassword').value;

  createUserWithEmailAndPassword(auth, email, password)
    .then(async (userCredential) => {
      const user = userCredential.user;
      console.log('Signup successful:', user);

      await setDoc(doc(db, "users", user.uid), {
        email: user.email,
        createdAt: new Date(),
      });

      window.location.href = 'dashboard.html';
    })
    .catch((error) => {
      alert(`Signup failed: ${error.message}`);
    });
});

// Login Functionality
const loginForm = document.getElementById('loginForm');
loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const email = document.getElementById('loginEmail').value;
  const password = document.getElementById('loginPassword').value;

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      window.location.href = 'dashboard.html';
    })
    .catch((error) => {
      alert(`Login failed: ${error.message}`);
    });
});

// Sign Out Functionality
const signOutButton = document.getElementById('signOutButton');
signOutButton.addEventListener('click', () => {
  signOut(auth)
    .then(() => {
      window.location.href = 'index.html';
    })
    .catch((error) => {
      console.error('Error signing out:', error);
    });
});

// Redirect if user is already signed in
onAuthStateChanged(auth, (user) => {
  if (user) {
    window.location.href = 'dashboard.html';
  }
});
