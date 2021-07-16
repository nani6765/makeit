import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyAy5zeQAO3KH6L5_J6werdiwdPDR8HU4RY",
  authDomain: "makeit-f9791.firebaseapp.com",
  databaseURL:
    "https://makeit-f9791-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "makeit-f9791",
  storageBucket: "makeit-f9791.appspot.com",
  messagingSenderId: "340731554704",
  appId: "1:340731554704:web:3ad7594702f8a4ce012115",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default firebase;
