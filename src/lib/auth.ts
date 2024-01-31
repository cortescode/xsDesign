import { redirect } from '@sveltejs/kit';
import { auth } from './firebaseConn';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import type { UserCredential, User } from 'firebase/auth';
import { goto } from '$app/navigation';
import { user } from './stores/session';
import { deleteCookie, setCookie } from './cookies';


const LOGGED_IN: string = "logged_in"
const USER_UID: string = "user_uid"

export async function signup(email: string, password: string) {
    let userCredential: UserCredential = await createUserWithEmailAndPassword(auth, email, password)
    
    let _user = userCredential.user

    user.set(userCredential.user)
    
    setCookie(LOGGED_IN, "true", 60)
    setCookie(USER_UID, _user.uid, 60)
}


export async function login(email: string, password: string) {
    let userCredential: UserCredential = await signInWithEmailAndPassword(auth, email, password)
    
    let _user = userCredential.user
    
    user.set(_user)
    setCookie(LOGGED_IN, "true", 60)
    setCookie(USER_UID, _user.uid, 60)
}


export async function logout() {
    await signOut(auth)
    user.set(null)
    deleteCookie(LOGGED_IN)
    deleteCookie(USER_UID)
}

