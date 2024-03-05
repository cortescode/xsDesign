
import { writable } from 'svelte/store'
import { auth } from '../auth/firebaseConn';


export const user = writable();
export const isLoggedIn = writable(false);