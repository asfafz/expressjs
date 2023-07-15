import * as firebase from 'firebase/app';
import 'firebase/storeage';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCgp1DQIPIfQBkpeHH-_-TCed62kZWMTaw",
    authDomain: "ninga-firegram-ed649.firebaseapp.com",
    projectId: "ninga-firegram-ed649",
    storageBucket: "ninga-firegram-ed649.appspot.com",
    messagingSenderId: "288441843098",
    appId: "1:288441843098:web:c1d5dc7a890ba2cdf44e23"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  const projectStorage = firebase.storage();
  const projectFirestore = firebase.firestore();
  
  export {projectStorage,projectFirestore}