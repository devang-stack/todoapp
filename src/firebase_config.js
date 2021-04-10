import firebase from "firebase";
var firebaseConfig = {
    apiKey: "AIzaSyCTV32dKeIEcV7t6y4jAo861gxDlKwKOk4",
    authDomain: "to-do-list-fe586.firebaseapp.com",
    projectId: "to-do-list-fe586",
    storageBucket: "to-do-list-fe586.appspot.com",
    messagingSenderId: "142677449612",
    appId: "1:142677449612:web:a7ea7e874af01a625d94a9"
  };
  
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export { db };