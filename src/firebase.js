import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCE09xZpkfGet3yREe1Bkn-Stp_jHslX2M",
    authDomain: "linkedin-11f04.firebaseapp.com",
    projectId: "linkedin-11f04",
    storageBucket: "linkedin-11f04.appspot.com",
    messagingSenderId: "77420966293",
    appId: "1:77420966293:web:f590fbff7eb84bf78ec69c",
    measurementId: "G-7QY72KGCZM"
  };

  const firebaseapp = firebase.initializeApp(firebaseConfig)

  const db = firebaseapp.firestore();

  const auth = firebase.auth();

  export {db , auth};