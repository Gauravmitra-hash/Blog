// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import {getAuth , GoogleAuthProvider} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCw8jRGAz8XCEevKZ9H5mOujau_jvUgoHA",
  authDomain: "blogproject-2b202.firebaseapp.com",
  projectId: "blogproject-2b202",
  storageBucket: "blogproject-2b202.appspot.com",
  messagingSenderId: "1064294583762",
  appId: "1:1064294583762:web:cd2b7afd943b2892704c0b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig); 

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();