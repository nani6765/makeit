import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

var firebaseConfig = {
  apiKey: "AIzaSyD572rjY2wMl4U9rq12kSQk7_RQdOCQLNc",
  authDomain: "makeit-1376e.firebaseapp.com",
  projectId: "makeit-1376e",
  storageBucket: "makeit-1376e.appspot.com",
  messagingSenderId: "508768254685",
  appId: "1:508768254685:web:d3965bd20840f86b637934",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
