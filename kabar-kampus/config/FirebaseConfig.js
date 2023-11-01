import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAHjPi36JAv0Z1rvIM8o4b8hPQ6IH-ZpFY",
  authDomain: "kabar-kampus.firebaseapp.com",
  databaseURL: "https://kabar-kampus-default-rtdb.firebaseio.com",
  projectId: "kabar-kampus",
  storageBucket: "kabar-kampus.appspot.com",
  messagingSenderId: "236082342921",
  appId: "1:236082342921:web:5c1a00616ee97fbbe95cd8",
  measurementId: "G-HDBNHME7RW",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getAuth(app);
