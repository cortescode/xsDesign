import { redirect } from "@sveltejs/kit";


export async function load({ cookies }) {
	let isLoggedIn: string = cookies.get('logged_in') || "";
    
    if(isLoggedIn.length === 0) {
        throw redirect(302, "/auth/login")
    }
}