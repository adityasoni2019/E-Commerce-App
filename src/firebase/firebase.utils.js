// NOTE: I don't understand jackshit on this page. :)

import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import { deleteField } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCPPgoOeItlBxIrRPpR_eWZICis5JhhmtQ",
    authDomain: "e-comm-db-ad891.firebaseapp.com",
    projectId: "e-comm-db-ad891",
    storageBucket: "e-comm-db-ad891.appspot.com",
    messagingSenderId: "401406736786",
    appId: "1:401406736786:web:2df1e14388270353b9294b",
    measurementId: "G-G6YGCB0NS2"
};

firebase.initializeApp(config);

export const auth = firebase.auth(); 
export const firestore = firebase.firestore(); 

const provider = new firebase.auth.GoogleAuthProvider(); 
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase; 