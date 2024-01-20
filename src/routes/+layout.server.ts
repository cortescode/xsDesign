/* import { auth } from '$lib/firebaseConn.js';
import { onAuthStateChanged } from 'firebase/auth';

// get `locals.user` and pass it to the `page` store
export const load = async ({ locals, cookies }) => {
    const sessionCookie = cookies.get("session") || '';
  // Verify the session cookie. In this case an additional check is added to detect
  // if the user's Firebase session was revoked, user deleted/disabled, etc.

    let user;
    
    onAuthStateChanged(auth, (user) => {
    if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const uid = user.uid;
        console.log(user)
        // ...
    } else {
        // User is signed out
        // ...
    }
    })
	return {
		user: user,
	}
} */