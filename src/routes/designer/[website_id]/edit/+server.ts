import { websites } from '$lib/server/db/mongo/mongo.js'
import { error } from '@sveltejs/kit'


export async function POST({ request, cookies, params }) {

    // Obtains required data to obtain the user website
    const user_uid = cookies.get("user_uid")
    const website_id = params.website_id

    // Obtains new website name from request (json)
    let new_name_json = await request.json()
    let new_name = new_name_json["new_name"]


    // Set the new website
    websites.updateOne({
        "user_uid": user_uid,
        "id": website_id
    }, {
        "$set": {
            "name": new_name
        }
    })


    return new Response()
}