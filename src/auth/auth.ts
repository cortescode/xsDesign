import { redirect } from '@sveltejs/kit';
import { auth } from './firebaseConn';
import { 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword, 
    GoogleAuthProvider, 
    signInWithPopup, 
    signOut, 
    updateEmail,
    deleteUser,
    sendEmailVerification,
    verifyBeforeUpdateEmail
} from 'firebase/auth';
import type { UserCredential, User } from 'firebase/auth';
import { goto } from '$app/navigation';
import { user } from '../lib/stores/session';

import { deleteCookie, setCookie } from '../lib/cookies';
import { EmailAuthProvider } from 'firebase/auth';
import { reauthenticateWithCredential } from 'firebase/auth';

const LOGGED_IN: string = "logged_in"
const USER_UID: string = "user_uid"

const provider = new GoogleAuthProvider();





export function getCurrentUser() {
    const currentUser = auth.currentUser;

    if (currentUser) {
        return currentUser
    } else {
        return null;
    }
}



export async function signup(email: string, password: string) {
    let userCredential: UserCredential = await createUserWithEmailAndPassword(auth, email, password)
    
    let _user = userCredential.user

    setUserCookiesAndStore(_user)

    await sendEmailVerification(_user)
}

export async function signinWithGooglePopUp() {

    const userCredential: UserCredential = await signInWithPopup(auth, provider);

    // This gives you a Google Access Token. You can use it to access the Google API.
    // const credential = GoogleAuthProvider.credentialFromResult(result);
    //const token = credential?.accessToken;

    const _user = userCredential.user


    setUserCookiesAndStore(_user)
}



export async function login(email: string, password: string) {
    let userCredential: UserCredential = await signInWithEmailAndPassword(auth, email, password)
    
    let _user: User = userCredential.user

    setUserCookiesAndStore(_user)

    goto("/designer", { replaceState: true });
}



export async function logout() {
    await signOut(auth)
    user.set(null)
    deleteCookie(LOGGED_IN)
    deleteCookie(USER_UID)

    goto("/", { replaceState: true })
}





export async function validateAndUpdateUserEmail(newEmail: string, currentPassword?: string) {
    const currentUser = auth.currentUser;

    if (!currentUser) {
        throw new Error("No user is currently signed in");
    }

    try {
        const providers = currentUser.providerData.map(provider => provider.providerId);

        if (providers.includes('password')) {
            if (!currentPassword) {
                throw new Error("Password is required for email/password users");
            }
            const credential = EmailAuthProvider.credential(currentUser.email!, currentPassword);
            let user_credential = await reauthenticateWithCredential(currentUser, credential);
            
            console.log("New user credential: ", user_credential)
        } else if (providers.includes('google.com')) {
            const provider = new GoogleAuthProvider();
            await signInWithPopup(auth, provider);
        } else {
            throw new Error("Unsupported authentication method for email update");
        }

        await verifyBeforeUpdateEmail(currentUser, newEmail);

    } catch (error) {
        console.error("Error updating email:", error);
        throw error;  // Re-throw the error to be handled in the component
    }

}

export async function deleteUserAccount() {
    const currentUser = auth.currentUser;

    if (currentUser) {
        try {
            await deleteUser(currentUser);
            user.set(null);
            deleteCookie(LOGGED_IN);
            deleteCookie(USER_UID);
            goto("/", { replaceState: true }); // Redirect after account deletion
        } catch (error) {
            console.error("Error deleting account:", error);
            // Handle the error, e.g., show an error message to the user
        }
    } else {
        throw new Error("No user is currently signed in");
    }
}



export function setUserCookiesAndStore(_user: User) {
    user.set(_user)
    setCookie(LOGGED_IN, "true", 60)
    setCookie(USER_UID, _user.uid, 60)

    goto("/", { replaceState: true });
}