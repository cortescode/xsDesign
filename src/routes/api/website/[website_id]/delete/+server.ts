import { websites } from '$lib/server/db/mongo/mongo.js';
import { unpublishWebsite } from '$website/publish/unpublish.js';
import { error, json } from '@sveltejs/kit';


export async function POST({ params, cookies }) {
    let user_uid = cookies.get('user_uid')

    let website = await websites.deleteOne({
        user_uid: user_uid,
        id: params.website_id
    })

    if(website.deletedCount === 0) 
        error(500, "There was an error removing the website")


    let unpublished = await unpublishWebsite(params.website_id)

    if(!unpublished)
        error(500, "There was an error unpublishing the website")
    
    return json({ message: "Website deleted successfully" }, { status: 200 });
}