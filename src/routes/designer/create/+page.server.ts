import { websites } from '$lib/server/db/mongo/mongo'
import { error, redirect } from '@sveltejs/kit';
import type { Web } from '../interfaces.js';

export function load() {
    /* websites.deleteMany() */
} 

export const actions = {
    default: async ({ request, cookies }) => {


        let user_uid = cookies.get("user_uid")

		const data = await request.formData();

        let web_name: string = data.get("name")?.toString() || ""

        if(!user_uid)
            error(513, {
                message: 'You need to be logged in order to create a website'
            });

        if(!web_name)
            error(500, {
                message: 'Website name not found'
            })


        let project_id: string = await generateProjectId(web_name);

        let website: Web = {
            "id": project_id,
            "user_uid": user_uid,
            "name": web_name,
        }
        
        await websites.insertOne(website);

        redirect(301, ("/designer/"+website.name));
    }
}


async function generateProjectId(project_id: string): Promise<string> {
    let id: string = project_id;
    let id_found: boolean = false;

    let counter: number = 0;
    while(!id_found) {
        const website = await websites.findOne({
            "id": project_id
          });

        if(!website) {
            id_found = true;
            break;
        }
        
        id = project_id + counter.toString()
        counter++
    }
    
    console.log("id: ", id)
    return id;
}