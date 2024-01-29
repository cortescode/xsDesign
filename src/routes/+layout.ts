import { auth } from "$lib/firebaseConn";
import { onAuthStateChanged } from "firebase/auth";
import { user } from "$lib/stores/session";



onAuthStateChanged(auth, (_user) => {
    if (_user) {
        user.set(_user)
    } else {
        user.set(null)
    }
})

