// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {FacebookAuthProvider, getAuth, GoogleAuthProvider} from 'firebase/auth'


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAH4AvNJtolUM0O4y488JCuKjrxjh1rNhE",
  authDomain: "pokedex-app-dcb09.firebaseapp.com",
  projectId: "pokedex-app-dcb09",
  storageBucket: "pokedex-app-dcb09.appspot.com",
  messagingSenderId: "743488957682",
  appId: "1:743488957682:web:1e471b3aee67067a98f46b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const providerGoogle = new GoogleAuthProvider();
const providerFacebook = new FacebookAuthProvider();


export {app, auth, providerGoogle, providerFacebook}