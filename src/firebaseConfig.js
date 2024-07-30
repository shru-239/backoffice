// src/firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {

    apiKey: "AIzaSyBUo2RsiSKlpKsaXf_G3CsnC666m2IOI5E",
  
    authDomain: "react-task7.firebaseapp.com",
  
    projectId: "react-task7",
  
    storageBucket: "react-task7.appspot.com",
  
    messagingSenderId: "735576715758",
  
    appId: "1:735576715758:web:60f17955bbc0081aca1eff",
  
    measurementId: "G-9DEZ2JR3WK"
  
  };
  

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
