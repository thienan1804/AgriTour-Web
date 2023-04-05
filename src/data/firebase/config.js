import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/analytics";


const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "supper-app-9311f.firebaseapp.com",
  projectId: "supper-app-9311f",
  storageBucket: "supper-app-9311f.appspot.com",
  messagingSenderId: "77527037377",
  appId: "1:77527037377:web:ea38112a18dbf0544b6b40",
  measurementId: "G-F5Q9WG959J",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db, app };

