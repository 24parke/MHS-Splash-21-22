import {initializeApp} from 'firebase/app';
// const firebaseApp = initializeApp({
//     apiKey: "AIzaSyCvS6uCwr6QRmUjLSvq-Vd7ARXQooJ8qmQ",
//     authDomain: "splash21-22.firebaseapp.com",
//     projectId: "splash21-22",
//     storageBucket: "splash21-22.appspot.com",
//     messagingSenderId: "91237779241",
//     appId: "1:91237779241:web:4f42a4521b4dbb9951d938",
//     measurementId: "G-J3F93S4DK1"
// });

const firebaseConfig = {
    apiKey: "AIzaSyCvS6uCwr6QRmUjLSvq-Vd7ARXQooJ8qmQ",
    authDomain: "splash21-22.firebaseapp.com",
    projectId: "splash21-22",
    storageBucket: "splash21-22.appspot.com",
    messagingSenderId: "91237779241",
    appId: "1:91237779241:web:4f42a4521b4dbb9951d938",
    measurementId: "G-J3F93S4DK1"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);