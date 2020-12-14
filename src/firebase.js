import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/database';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDG0EPovkqMqpOj3fT3zFWuOLjnnetlGss",
    authDomain: "reactachat.firebaseapp.com",
    projectId: "reactachat",
    storageBucket: "reactachat.appspot.com",
    messagingSenderId: "219604564925",
    appId: "1:219604564925:web:66af7286dcdd69093c70d4",
    measurementId: "G-RSMTHCPE4N"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider }
