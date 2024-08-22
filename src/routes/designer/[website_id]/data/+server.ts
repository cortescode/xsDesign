import { websites } from "$lib/server/db/mongo/mongo.js";
import type { RequestHandler } from "@sveltejs/kit";
import type { Website } from "$lib/interfaces/Website";





// Get the website data based on the logged user and the url website_id
export async function GET({ params, cookies }) {
    let user_uid = cookies.get("user_uid")

    // Obtain the website from database based on the website_id and the user_uid
    let db_website = await websites.findOne({
        "id": params.website_id,
        "user_uid": user_uid
    })


    // Create the response json object
    let website: Website = {
        id: params.website_id,
        user_uid: user_uid || "",
        name: db_website?.name,
        description: db_website?.description,
        data: db_website?.data,
        routes: db_website?.routes,
        sharedComponents: db_website?.sharedComponents,
        published: db_website?.published || false,
        config: db_website?.config || {}
    }


    // Return the response with the website associated information
    return new Response(
        JSON.stringify(website),
        {
            headers: {
                "Content-Type": "application/json"
            }
        }
    )
}


// Receive a JSON object containing the updated webpage data and update it in the database
export async function POST({ params, request, cookies }) {

    let user_uid = cookies.get("user_uid")
    
    const json_data = await request.json();
    const id = json_data.id
    const data = json_data.data
    const routes = json_data.routes
    const sharedComponents = json_data.sharedComponents
    const published: boolean = json_data.published || false;

    
    // Check required fields exists
    if (!id || !data || !user_uid || !routes) {
        return new Response(
            JSON.stringify({ error: "Missing required fields in the form data" }),
            {
                status: 400, // Bad Request
                headers: {
                    "Content-Type": "application/json"
                }
            }
        );
    }

    // Update the data for the specified ID in the database
    await websites.updateOne(
        { id: id,
            "user_uid": user_uid 
        },
        { $set: { 
            data: data,
            sharedComponents: sharedComponents,
            routes: routes,
            published: published
        } }
    );

    // Return successful response if everything is correct
    return new Response(
        JSON.stringify({ success: true }),
        {
            headers: {
                "Content-Type": "application/json"
            }
        }
    );
}