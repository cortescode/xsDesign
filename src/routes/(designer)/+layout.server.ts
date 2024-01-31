import { redirect } from "@sveltejs/kit";
// import type { LayoutServerLoad } from "./$types.js";


export function load({ cookies }) {
	let isLoggedIn: boolean = Boolean(cookies.get('logged_in')) || false;
    
    if(!isLoggedIn) {
        throw redirect(302, "/auth/login")
    }

    return {}
}