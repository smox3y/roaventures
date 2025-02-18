import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyALtqSwuEg4DcL7XBcKoGDAQ9YETEnkXvc",
  authDomain: "myahai-85685.firebaseapp.com",
  projectId: "myahai-85685",
  storageBucket: "myahai-85685.appspot.com",
  messagingSenderId: "690108667060",
  appId: "1:690108667060:web:90312b2edd3326cd3e73e1",
  measurementId: "G-EGC90MN17B"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { auth, db };