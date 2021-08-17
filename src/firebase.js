import firebase from "firebase";

const firebaseApp = firebase.initializeApp({

    apiKey: "AIzaSyA-5ZRyH47h9wcu74JLE3NFh4TxwJ_ikFM",
    authDomain: "clone-9b9f3.firebaseapp.com",
    projectId: "clone-9b9f3",
    storageBucket: "clone-9b9f3.appspot.com",
    messagingSenderId: "760783181147",
    appId: "1:760783181147:web:926aec29664c3f0df9f67e"

});

const auth = firebase.auth();

export { auth };