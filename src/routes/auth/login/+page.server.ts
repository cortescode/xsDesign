/* import { fail, redirect } from '@sveltejs/kit'
import { login } from '$lib/auth.js'


export async function load ({ locals }) {

}


async function loginAction ({ cookies, request }) {
	const data = await request.formData()
	const email = data.get('email')
	const password = data.get('password')

	console.log(cookies, request)

	if (
		typeof email !== 'string' ||
		typeof password !== 'string' ||
		!email ||
		!password
	) {
		return fail(400, { invalid: true })
	}

    let user = await login(email, password)
	const user = await db.user.findUnique({ where: { username } })

	if (!user) {
		return fail(400, { credentials: true })
	}

	const userPassword = await bcrypt.compare(password, user.passwordHash)

	if (!userPassword) {
		return fail(400, { credentials: true })
	}
 
	// generate new auth token just in case
	const authenticatedUser = await db.user.update({
		where: { username: user.username },
		data: { userAuthToken: crypto.randomUUID() },
	})

	cookies.set('session', authenticatedUser.userAuthToken, {
		// send cookie for every page
		path: '/',
		// server side only cookie so you can't use `document.cookie`
		httpOnly: true,
		// only requests from same site can send cookies
		// https://developer.mozilla.org/en-US/docs/Glossary/CSRF
		sameSite: 'strict',
		// only sent over HTTPS in production
		secure: process.env.NODE_ENV === 'production',
		// set cookie to expire after a month
		maxAge: 60 * 60 * 24 * 30,
	})

	// redirect the user
	throw redirect(302, '/')
}

export const actions = { loginAction } */