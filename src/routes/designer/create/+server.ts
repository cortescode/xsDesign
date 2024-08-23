import { websites } from '$lib/server/db/mongo/mongo'
import { error, redirect } from '@sveltejs/kit';
import type { Website } from '$lib/interfaces/Website';
import { data as agencyTemplateData } from '$designer/templates/sites/agency/data';
import { templatesList } from '$designer/templates/templatesList.js';



export async function POST({ request, cookies }) {

    let user_uid = cookies.get("user_uid")

    // Obtain the data sent by client
    const data = await request.json();
    let website_name: string = data["name"] || ""
    let website_description: string = data["description"] || ""
    let template_uid: string = data["template_uid"] || "0"
    let template = templatesList[template_uid]

    // select base template if not sent or not exists
    if(!template) template = templatesList["0"]


    // Checks data is correct
    if (!user_uid)
        throw error(513, {
            message: 'You need to be logged in order to create a website'
        });

    if (!website_name)
        throw error(500, {
            message: 'Website name not found'
        })


    // Once everything is correct the website is created

    let website_id: string = await generateWebsiteId(website_name);

    let website: Website = {
        "id": website_id,
        "user_uid": user_uid,
        "name": website_name,
        "description": website_description,
        "data": template.data,
        "routes": [
            {
                "page_id": "home",
                "title": "Home",
                "description": website_description,
                "slug": "home",
            }
        ],
        "shared_components": template.shared_components,
        "published": false,
        "config": {}
    }

    await websites.insertOne(website);


    // Redirect to editing page of the new website created
    redirect(301, ("/designer/" + website_id));

}


async function generateWebsiteId(web_name: string): Promise<string> {
    let id: string = web_name
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '') 
        .replace(/ /g, "-")
        .replace(/[<>\"#%{}|\\^~\[\]`;\/?:@=&$+]/g, '')
        .toLowerCase();

    console.log("Generated id: ", id)

    let id_found: boolean = false;

    let counter: number = 0;
    
    while (!id_found) {
        const website = await websites.findOne({
            "id": id
        });

        if (!website) {
            id_found = true;
            break;
        }

        id = web_name + counter.toString()
        counter++
    }

    return id;
}