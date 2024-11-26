import type { Website } from "$lib/interfaces/Website";
import type { User } from "firebase/auth";
import { user as user_store } from "$auth/stores/session";



let user: User | null;

user_store.subscribe(_user => user = _user)

const UNPUBLISHING_API_URL: string = "https://publish.xsdesign.co/delete-website" 

/* 
Remove website hosting. The website will be deleted from the server and will no longer be accessible.
 */
export async function unpublishWebsite(website_id: string) {

    if(!user) return false;
    let form = new FormData()

    let user_token = await user.getIdToken()
    
    form.append('user_token', user_token)
    form.append('website_id', website_id)

    try {
        let request = await fetch(UNPUBLISHING_API_URL, {
            method: "POST",
            body: form
        })

        if(!request.ok)
            throw new Error("Something happened deleting the website")

        return true
    } catch(error) {
        console.log(error)
        return false
    }

}