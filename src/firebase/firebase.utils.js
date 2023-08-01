import { initializeApp } from 'firebase/app'
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth' ;
import { collection, getDocs, getFirestore, doc, getDoc, setDoc } from 'firebase/firestore'

const config = {
    apiKey: "AIzaSyBoZz7QizNK1rVErVGKA30nn-SMoYy8pP4",
    authDomain: "crwn-db-79f47.firebaseapp.com",
    projectId: "crwn-db-79f47",
    storageBucket: "crwn-db-79f47.appspot.com",
    messagingSenderId: "198754819827",
    appId: "1:198754819827:web:d750a861dddad8b6166186",
    measurementId: "G-M5TZQMC74F"
  }

  export const firebaseApp = initializeApp(config);

  export const auth = getAuth();
  export const signInWithGoogle = () => signInWithPopup(auth,new GoogleAuthProvider());
  
   const firestore = getFirestore();

   export const createUserProfileDoc = async (userAuth, additionalData) => {
    if(!userAuth) return;
    const userDocRef = doc(firestore, `users/${userAuth.uid}`);
    const docSnap = await getDoc(userDocRef);
    if(!docSnap.exists()){
      const { displayName, email } = userAuth;
      const createdAt = new Date();

      try {
        await setDoc(userDocRef, {
          displayName,
          email,
          createdAt,
          ...additionalData
        })
      } catch (error) {
        console.log('error creating user', error.message);
      }
    }

    return userDocRef;
   }
  
 /*  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;
    console.log()
  } */

