import firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyA3Yf3HDmbyMGdxPXfLyi3OHPO7kWuXUR4",
    authDomain: "payment-system-5f5ff.firebaseapp.com",
    projectId: "payment-system-5f5ff",
    storageBucket: "payment-system-5f5ff.appspot.com",
    messagingSenderId: "313501389592",
    appId: "1:313501389592:web:e7b16175be524e11f8846d"
};

let app;

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const db = firebase.firestore()

const auth = firebase.auth()

export default db
export { auth }