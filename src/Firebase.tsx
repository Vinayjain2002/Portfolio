import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyAMBIfmfW43jcK26VwHWNPN539iPqUBz6k",
  authDomain: "vinayjainportfolio.firebaseapp.com",
  projectId: "vinayjainportfolio",
  storageBucket: "vinayjainportfolio.appspot.com",
  messagingSenderId: "303930435237",
  appId: "1:303930435237:web:e54d90a570baee1d5dcf4c",
  measurementId: "G-9YHCCNREKJ"
  
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);