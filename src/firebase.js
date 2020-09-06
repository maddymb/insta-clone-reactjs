import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBGIX72yM83HTxUa9kBvdyjBYLQ5MYkLLg",
    authDomain: "insta-clone-e3e5a.firebaseapp.com",
    databaseURL: "https://insta-clone-e3e5a.firebaseio.com",
    projectId: "insta-clone-e3e5a",
    storageBucket: "insta-clone-e3e5a.appspot.com",
    messagingSenderId: "236966033407",
    appId: "1:236966033407:web:ab869aaa173bcb25c419ca",
    measurementId: "G-H2TM7731QE"

});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };








