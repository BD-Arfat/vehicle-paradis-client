// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyATxz1P3SgU92Mt7QtnQyKEYIs9-fmXpqM",
  authDomain: "suzuki-motor.firebaseapp.com",
  projectId: "suzuki-motor",
  storageBucket: "suzuki-motor.appspot.com",
  messagingSenderId: "38750452776",
  appId: "1:38750452776:web:c1616927eb01a4ac18091d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;