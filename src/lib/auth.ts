import { redirect } from '@sveltejs/kit';
import { auth } from './firebaseConn';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import type { UserCredential, User } from 'firebase/auth';
import { goto } from '$app/navigation';
import { user } from './stores/session';
import { deleteCookie, setCookie } from './cookies';


const COOKIE_NAME: string = "logged_in"

export async function signup(email: string, password: string) {
    let userCredential: UserCredential = await createUserWithEmailAndPassword(auth, email, password)
    
    console.log("User: ", userCredential.user)
    console.log("User Credential: ", userCredential.user.metadata)

    user.set(userCredential.user)
    setCookie(COOKIE_NAME, "true", 60)
}


export async function login(email: string, password: string) {
    let userCredential: UserCredential = await signInWithEmailAndPassword(auth, email, password)
    
    console.log("User: ", userCredential.user)
    console.log("User Credential: ", userCredential.user.metadata)
    
    user.set(userCredential.user)
    setCookie(COOKIE_NAME, "true", 60)
}


export async function logout() {
    await signOut(auth)
    user.set(null)
    deleteCookie(COOKIE_NAME)
}

