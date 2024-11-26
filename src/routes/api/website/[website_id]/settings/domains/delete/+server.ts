import { websites } from '$lib/server/db/mongo/mongo.js';
import { deleteWebsiteHostname } from '../../../../../../../website/publish/domains/server/cloudflare.js';
import { error } from '@sveltejs/kit';




export async function POST({request, cookies, params}) {

    const json = await request.json();
    let domain_name = json["domain_name"] || null
    let hostname_id = json["hostname_id"] || null
    let user_uid = cookies.get("user_uid") || null
    let website_id = params.website_id;

    if(!domain_name || !user_uid || !hostname_id)
        error(400, { message: "The data provided is not correct"})

    
    try {
        await deleteWebsiteHostname(website_id, hostname_id)

        
        websites.updateOne({
            user_uid: user_uid,
            id: website_id
        }, {
            //@ts-ignore
            "$pull": {
                "config.domains": {
                    "name": domain_name
                }
            }
        })
    } catch(e) {
        error(400, { message: "There was an error deleting your domain"})
    }
    
    
    
    return new Response()
}