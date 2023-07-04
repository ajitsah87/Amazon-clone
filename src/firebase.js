import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD8FEaZs8pMMKYsobHO7R01ro9AyC_GwwQ",
  authDomain: "clone-b7883.firebaseapp.com",
  projectId: "clone-b7883",
  storageBucket: "clone-b7883.appspot.com",
  messagingSenderId: "840774984608",
  appId: "1:840774984608:web:0ffb52a172b1aadaec7ac5",
  measurementId: "G-P2232RKTC0"
};
const firebaseApp = firebase.initializeApp(firebaseConfig)
const  db= firebaseApp.firestore()
const auth =firebase.auth()
export {db,auth}