import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB9vdlqrx99kVILGXnp5om-I3LnMf0h0cA",
  authDomain: "chitchat-app-48cea.firebaseapp.com",
  projectId: "chitchat-app-48cea",
  storageBucket: "chitchat-app-48cea.appspot.com",
  messagingSenderId: "329338995709",
  appId: "1:329338995709:web:c2e0be86459924f8868f94"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();