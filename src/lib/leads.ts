import { collection, addDoc } from "firebase/firestore"; 

import { db } from "./firebaseConn"


export async function storeLead(name: string, email: string) {
    try {
        const docRef = await addDoc(collection(db, "leads"), {
            name: name,
            email: email,
        });
        console.log("Document written with ID: ", docRef.id);
        return true;
    } catch (e) {
        console.error("Error adding document: ", e);
        return false;
    }
}
