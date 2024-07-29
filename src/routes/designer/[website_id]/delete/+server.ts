import { websites } from '$lib/server/db/mongo/mongo.js';
import { unpublishWebsite } from '$publish/unpublish.js';
import { error } from '@sveltejs/kit';


export async function POST({ params, cookies }) {
    let user_uid = cookies.get('user_uid')

    let website = await websites.deleteOne({
        user_uid: user_uid,
        id: params.website_id
    })

    if(website.deletedCount === 0) 
        error(500, "There was an error removing the website")


    let unpublished = await unpublishWebsite(params.website_id)
    
    return new Response();
}