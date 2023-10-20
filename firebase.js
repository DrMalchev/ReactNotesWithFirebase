
import { initializeApp } from "firebase/app";
import { collection, getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyA-UpdwlFZ2xMXcyqmyO6B9i_9exUM1nE4",
    authDomain: "reactnoteswithfirebase.firebaseapp.com",
    projectId: "reactnoteswithfirebase",
    storageBucket: "reactnoteswithfirebase.appspot.com",
    messagingSenderId: "1052951879562",
    appId: "1:1052951879562:web:1e8463b6f301c30c053273"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const notesCollection = collection(db, "notes")