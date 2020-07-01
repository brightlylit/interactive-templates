//Firebase configuration
import firebase from 'firebase'
const firebaseConfig = {
   apiKey: "AIzaSyBZeOtQ06HGcQDe4B4sfBWZuC50W78gBB8",
    authDomain: "interactive-templates.firebaseapp.com",
    databaseURL: "https://interactive-templates.firebaseio.com",
    projectId: "interactive-templates",
    storageBucket: "interactive-templates.appspot.com",
    messagingSenderId: "220986605161",
    appId: "1:220986605161:web:acf9f339c639eefc31acf8",
    measurementId: "G-PWEBRGTLX9"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const database = firebase.database();

export default database;