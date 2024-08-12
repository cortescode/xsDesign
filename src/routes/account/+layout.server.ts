import { redirect } from "@sveltejs/kit"


export async function load({ cookies }) {

    let isLoggedIn: boolean = Boolean(cookies.get('logged_in')) || false;
    let user_uid: string | undefined = cookies.get('user_uid')

    if(!isLoggedIn || !user_uid)
        throw redirect(302, "/auth/login")

}