import { redirect, error } from '@sveltejs/kit'
import type { Website } from '$website/interfaces/Website.js';
import { websites } from '$lib/server/db/mongo/mongo.js';


// Load the website and send it to client
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
        description: db_website.description,
        data: db_website.data,
        routes: db_website.routes,
        sharedComponents: db_website.sharedComponents,
        published: db_website.published || false,
        config: db_website.config || {}
    }
    
    return {
        website: website
    };
}

