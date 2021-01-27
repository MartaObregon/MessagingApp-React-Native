import firebase from 'firebase'
import "firebase/auth";
import "firebase/database";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyB1bG6b2FyNs5EkyXiCPrDdpmefz48sZRg",
    authDomain: "messagingapp-clone.firebaseapp.com",
    projectId: "messagingapp-clone",
    storageBucket: "messagingapp-clone.appspot.com",
    messagingSenderId: "935819448197",
    appId: "1:935819448197:web:07315140102d409f133eec",
    measurementId: "G-3W8BNMCKSD"
  };


let app;
if(firebase.apps.length ===0){
    app = firebase.initializeApp(firebaseConfig)
} else {
    app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export {db, auth};
