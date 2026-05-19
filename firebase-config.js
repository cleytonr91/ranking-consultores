import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import {
  getFirestore
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAJLrYjc6vMY6h-8FP524hWPahzWFfS4fk",
  authDomain: "ranking-consultores.firebaseapp.com",
  projectId: "ranking-consultores",
  storageBucket: "ranking-consultores.firebasestorage.app",
  messagingSenderId: "291761611455",
  appId: "1:291761611455:web:5762aeee25e2beda91dc0a"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);