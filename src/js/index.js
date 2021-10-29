import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA-GK09xe4mzO06vzgi5leYUvM_F-Ujgrg",
  authDomain: "splash-21-22.firebaseapp.com",
  projectId: "splash-21-22",
  storageBucket: "splash-21-22.appspot.com",
  messagingSenderId: "320020653085",
  appId: "1:320020653085:web:2a7f16bf6c17d0dffc92f4",
  measurementId: "G-K6M13VQDER"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);