// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyANgsSHgL_HDqEswaa2cn6Hvapobuvr6lI",
  authDomain: "react-ecommerce-4edb8.firebaseapp.com",
  projectId: "react-ecommerce-4edb8",
  storageBucket: "react-ecommerce-4edb8.firebasestorage.app",
  messagingSenderId: "592529394265",
  appId: "1:592529394265:web:63de591db66fb4c37b7f48"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);