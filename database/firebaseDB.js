import { firebase } from "@firebase/app";
import firestore from 'firebase/firestore'
import "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyAfkX2SQi9i1zLsiFYhA2jWd-glGcJFGkw",
    authDomain: "pcmob4demo3-authentication.firebaseapp.com",
    projectId: "pcmob4demo3-authentication",
    storageBucket: "pcmob4demo3-authentication.appspot.com",
    messagingSenderId: "827257197764",
    appId: "1:827257197764:web:bd2fae92a94fbe23a66591"
};

firebase.initializeApp(firebaseConfig);

firebase.firestore();

export default firebase;