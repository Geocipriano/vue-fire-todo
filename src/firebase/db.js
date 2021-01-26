import firebase from 'firebase';
import 'firebase-storage';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBRR9Od21onjFgHAxa7GNtAM7_F6hoE9_Q",
    authDomain: "vue-fire-todo-757ee.firebaseapp.com",
    databaseURL: "https://vue-fire-todo-757ee-default-rtdb.firebaseio.com",
    projectId: "vue-fire-todo-757ee",
    storageBucket: "vue-fire-todo-757ee.appspot.com",
    messagingSenderId: "333194439289",
    appId: "1:333194439289:web:1066f1b10181c16b1b42a8"
  };
  // Initialize Firebase
  export const db = firebase.initializeApp(firebaseConfig).firestore();