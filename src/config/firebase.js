import {getAuth, GoogleAuthProvider} from "firebase/auth"
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDu2mNFuWMjLCrsYJwb0KyjUK4Gyd1i5uw",
  authDomain: "mealorder-80a11.firebaseapp.com",
  projectId: "mealorder-80a11",
  storageBucket: "mealorder-80a11.appspot.com",
  messagingSenderId: "549212090578",
  appId: "1:549212090578:web:a3f4255ea828ac642d3d0b",
  measurementId: "G-MPDQ7FDPFG"
};
const app = initializeApp(firebaseConfig);
export const db=getFirestore(app);