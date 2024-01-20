import type { Handle } from "@sveltejs/kit"

export const handle: Handle = async ({ event, resolve }) => {
	const session = event.cookies.get('session')

	let  user;

    /* if (user) {
        event.locals.user = {
            name: user.username,
            role: user.role.name,
        }
    } */
    return resolve(event)
}

/* 
import auth from '$lib/firebaseConn';

export async function handle({ request, resolve }) {
  const user = auth.currentUser;

  if (!user && request.route.protected) {
    return {
      status: 302,
      headers: {
        location: '/login',
      },
    };
  }

  return resolve(request);
}
 */