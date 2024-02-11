import { redirect, error } from '@sveltejs/kit'
import type { Website } from '$lib/designer/interfaces/Website.js';
import { websites } from '$lib/server/db/mongo/mongo.js';



export async function load({ params, cookies }) {
    let user_uid = cookies.get("user_uid")
    
    if(!params.website_id || !user_uid)
        redirect(301, "/");
    
    let db_website = await websites.findOne({
        id: params.website_id,
        user_uid: user_uid
    })

    if(!db_website)
        error(500, `The wesite with id: ${params.website_id} does not exist`)
    
    let website: Website = {
        id: params.website_id,
        user_uid: user_uid,
        name: db_website.name,
        data: db_website.data,
        routes: db_website.routes
    }
    
    return {
        website: website
    };
}

