import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAs3KtQElRDrA03yrd2D358ezXWrz6-LP8",
    authDomain: "messageme-69ec9.firebaseapp.com",
    databaseURL: "https://messageme-69ec9.firebaseio.com",
    projectId: "messageme-69ec9",
    storageBucket: "messageme-69ec9.appspot.com",
    messagingSenderId: "553733023215",
    appId: "1:553733023215:web:2c2563611495a11ba6021a",
    measurementId: "G-XE03RJCE77"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider }
