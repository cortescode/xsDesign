import { redirect } from "@sveltejs/kit";
import { websites } from "$lib/server/db/mongo/mongo";

export async function load({ cookies }) {

	let isLoggedIn: boolean = Boolean(cookies.get('logged_in')) || false;
    let user_uid: string | undefined = cookies.get('user_uid')

    
    if(!isLoggedIn || !user_uid) {
        throw redirect(302, "/auth/login")
    }

    let user_websites = await websites.find({
        "user_uid": user_uid
    }).toArray()

    
    return {
        isLoggedIn,
        user_uid,
        "websites": JSON.stringify(user_websites)
    }
}


