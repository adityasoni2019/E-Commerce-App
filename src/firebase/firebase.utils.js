// NOTE: I don't understand jackshit on this page. :)
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

import { deleteField } from 'firebase/firestore';
import { useActionData, useRevalidator } from 'react-router-dom';

const firebaseConfig = {
    apiKey: "AIzaSyCPPgoOeItlBxIrRPpR_eWZICis5JhhmtQ",
    authDomain: "e-comm-db-ad891.firebaseapp.com",
    projectId: "e-comm-db-ad891",
    storageBucket: "e-comm-db-ad891.appspot.com",
    messagingSenderId: "401406736786",
    appId: "1:401406736786:web:2df1e14388270353b9294b",
    measurementId: "G-G6YGCB0NS2"
};

// this function will allow us to get the user auth object that we've got from the authentication library. and use that 
// and then store it inside our database

export const createUserProfileDocument = async(userAuth, additionalData) => {
    // if there's no user signed in. 
    if(!userAuth) return ;
    console.log("this is userAuth" ,userAuth);
    
    const userRef = firestore.doc(`users/${userAuth.uid}`); 
    console.log("this is userref: " ,userRef);

    const snapShot = await userRef.get(); 
    console.log("snapshot exists: ", snapShot.exists, snapShot);

    if(!snapShot.exists) // if snapshot doesn't exist.
    {
        const {displayName, email} = userAuth; 
        const createdAt = Date(); 
        
        try {
            await userRef.set({
                displayName, 
                email, 
                createdAt, 
                ...additionalData
            })
        } 
        catch (error) {
            console.log("error creating user", error.message);
        }
    }
    
    return userRef;
}

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth(); 
export const firestore = firebase.firestore(); 

const provider = new firebase.auth.GoogleAuthProvider(); 
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;