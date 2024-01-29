import { redirect } from "@sveltejs/kit";


export async function load({ cookies }) {
	let isLoggedIn: boolean = Boolean(cookies.get('logged_in')) || false;
    
    if(!isLoggedIn) {
        throw redirect(302, "/auth/login")
    }
}