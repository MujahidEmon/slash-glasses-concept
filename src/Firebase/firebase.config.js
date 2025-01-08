// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCJA1fj9lzymkhkrf6rw7f5W2zD31YU3M8",
  authDomain: "slash-glasses-concept.firebaseapp.com",
  projectId: "slash-glasses-concept",
  storageBucket: "slash-glasses-concept.firebasestorage.app",
  messagingSenderId: "232212835801",
  appId: "1:232212835801:web:37847c0a187608c08c3dc8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;