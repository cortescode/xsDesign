import { auth } from "../auth/firebaseConn";
import { onAuthStateChanged } from "firebase/auth";
import { user, userPlan } from "$auth/stores/session";
import { PLANS } from "$auth/subscriptions/plans";



onAuthStateChanged(auth, async (_user) => {
    if (_user) {
        user.set(_user)

    } else {
        user.set(null)
    }
})

