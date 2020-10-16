import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDp_HE9xTRSS8kQoQS0NlkPx8XKWtNofIE",
  authDomain: "tinder-clone-1b566.firebaseapp.com",
  databaseURL: "https://tinder-clone-1b566.firebaseio.com",
  projectId: "tinder-clone-1b566",
  storageBucket: "tinder-clone-1b566.appspot.com",
  messagingSenderId: "911365252344",
  appId: "1:911365252344:web:f49eb9db1961e3afa3070d",
  measurementId: "G-70NBZV6YK0",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export default db;
