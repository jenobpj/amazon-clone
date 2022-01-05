// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCP57jz8b3KXuHCqBBjCmtNuDftjQepb0M",
  authDomain: "clone-5db27.firebaseapp.com",
  projectId: "clone-5db27",
  storageBucket: "clone-5db27.appspot.com",
  messagingSenderId: "51079570267",
  appId: "1:51079570267:web:20f89e63a97f34524e307e",
  measurementId: "G-PRXKLL49LB",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };
