import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCypHYbeE30V15gBeFrozwOpt3qV8EFzFQ",
  authDomain: "jelliechatapp.firebaseapp.com",
  projectId: "jelliechatapp",
  storageBucket: "jelliechatapp.appspot.com",
  messagingSenderId: "168252888031",
  appId: "1:168252888031:web:ebafc803310d6989a3aa6a"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage();
export const db = getFirestore();
