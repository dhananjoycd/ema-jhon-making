// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBBsXQe0ieYdx9RebFc-V4jqmQhCSKsmVM",
  authDomain: "ema-jhon-simple-03.firebaseapp.com",
  projectId: "ema-jhon-simple-03",
  storageBucket: "ema-jhon-simple-03.appspot.com",
  messagingSenderId: "109179544778",
  appId: "1:109179544778:web:b584de31a298e8bfa58033"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;