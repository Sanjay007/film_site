import firebase from "firebase/app";
import "firebase/database"; // If using Firebase database
import "firebase/storage"; // If using Firebase storage
// Initialize Firebase
const config = {
  apiKey: "AIzaSyDaNzUleN8vKA8SCi26J5rjkSU4kIrq0U4",
  authDomain: "film-site-67ca1.firebaseapp.com",
  databaseURL: "https://film-site-67ca1.firebaseio.com",
  projectId: "film-site-67ca1",
  storageBucket: "film-site-67ca1.appspot.com",
  messagingSenderId: "900044126466",
  appId: "1:900044126466:web:22952051b383b433ad6a1b",
  measurementId: "G-0TGMG58L18"
};
firebase.initializeApp(config);

const database = firebase.database();
const storage = firebase.storage();

export { firebase, storage, database };
