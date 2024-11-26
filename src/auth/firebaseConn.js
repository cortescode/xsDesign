import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth"
import { setPersistence, browserLocalPersistence } from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyBz7WoTAO440HmiRYrZigo_WOamh2B5fvI",
    authDomain: "xsdesign-188e9.firebaseapp.com",
    projectId: "xsdesign-188e9",
    storageBucket: "xsdesign-188e9.appspot.com",
    messagingSenderId: "636790670747",
    appId: "1:636790670747:web:6804caef5b2e2fcf678d3e",
    measurementId: "G-5QERKVZF17"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication
export const auth = getAuth(app);

// Initialize Cloud Firestore and get a reference to the service
export const firestore_db = getFirestore(app);

