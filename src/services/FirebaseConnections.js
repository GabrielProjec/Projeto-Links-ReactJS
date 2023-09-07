// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAYlPGbEX3muVzdQ-YRbmJei39-b8XuxBQ",
  authDomain: "project-046-69607.firebaseapp.com",
  projectId: "project-046-69607",
  storageBucket: "project-046-69607.appspot.com",
  messagingSenderId: "93167315987",
  appId: "1:93167315987:web:098593997f155e907f23e6",
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export { db, auth };
