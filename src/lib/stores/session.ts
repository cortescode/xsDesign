
import { writable } from 'svelte/store'
import { auth } from '../../auth/firebaseConn';
import type { IdTokenResult, User } from "firebase/auth";



export const user = writable<User | null>();
export const isLoggedIn = writable<Boolean>(false);