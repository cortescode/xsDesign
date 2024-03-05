import { websites } from '$lib/server/db/mongo/mongo'
import { error, redirect } from '@sveltejs/kit';
import type { Website } from '$lib/interfaces/Website';
import { agency_template } from '$lib/designer/templates/sites/agency.js';

export function load() {
    /* websites.deleteMany() */
} 

export const actions = {
    default: async ({ request, cookies }) => {


        let user_uid = cookies.get("user_uid")

		const data = await request.formData();

        let website_name: string = data.get("name")?.toString() || ""

        let website_description: string = data.get("description")?.toString() || ""


        if(!user_uid)
            throw error(513, {
                message: 'You need to be logged in order to create a website'
            });

        if(!website_name)
            throw error(500, {
                message: 'Website name not found'
            })


        let website_id: string = await generateWebsiteId(website_name);

        let website: Website = {
            "id": website_id,
            "user_uid": user_uid,
            "name": website_name,
            "data": agency_template,
            "routes": [
                {
                    "page_id": "home",
                    "title": "Home",
                    "description": website_description,
                    "slug": "home",
                }
            ]
        }
        
        await websites.insertOne(website);

        redirect(301, ("/designer/"+website_id));
    }
}


async function generateWebsiteId(web_name: string): Promise<string> {
    let id: string = web_name
            .replace(/ /g, "-")
            .replace(/[<>\"#%{}|\\^~\[\]`;\/?:@=&$+]/g, '');

    let id_found: boolean = false;

    let counter: number = 0;
    while(!id_found) {
        const website = await websites.findOne({
            "id": web_name
          });

        if(!website) {
            id_found = true;
            break;
        }
        
        id = web_name + counter.toString()
        counter++
    }
    
    return id;
}