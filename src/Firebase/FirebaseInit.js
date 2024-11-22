// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC04kh68dPftwK-fKeeNUKv3iJAk2DefVM",
  authDomain: "thematicwe.firebaseapp.com",
  projectId: "thematicwe",
  storageBucket: "thematicwe.firebasestorage.app",
  messagingSenderId: "511479072509",
  appId: "1:511479072509:web:935d48b2a5346723a2e094",
  measurementId: "G-LKCMTF17QV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


export default analytics;