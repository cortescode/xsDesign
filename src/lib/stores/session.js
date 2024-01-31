
import { writable } from 'svelte/store'
import { auth } from '../firebaseConn';


export const user = writable();
export const isLoggedIn = writable(false);