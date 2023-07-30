import { initializeApp } from 'firebase/app'
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth' ;

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
  

