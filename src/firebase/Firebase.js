import { getFirestore } from "firebase/firestore";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBM3GixL1E4OicmoSzyGx1sxsjDhT43T8k",
  authDomain: "foodyzone-1c1d9.firebaseapp.com",
  projectId: "foodyzone-1c1d9",
  storageBucket: "foodyzone-1c1d9.firebasestorage.app",
  messagingSenderId: "240378159788",
  appId: "1:240378159788:web:1c904caa558db38abfb509",
  measurementId: "G-FN3DMD2RJM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;

// Initialize Firebase Firestore
const db = getFirestore(app);

export { db };

// Initialize Firebase Authentication
