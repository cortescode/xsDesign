import { getAuthUser } from "$auth/firebaseAdmin";
import { redirect } from "@sveltejs/kit";


export const load = async ({ cookies, url }) => {

    const user_uid = cookies.get("user_uid");

    let redirect_to;
    if(url.searchParams.has('redirect_to')) {
        redirect_to = url.searchParams.get('redirect_to');
    }

    console.log("User ID: ", user_uid)
    if(user_uid) {
        const user = await getAuthUser(user_uid);
        console.log("User ID: ", user_uid)
        console.log("User: ", user)
        if(user) {
            redirect(301, redirect_to || "/dashboard")
        }   
    }

    return {redirect_to: redirect_to}
}

