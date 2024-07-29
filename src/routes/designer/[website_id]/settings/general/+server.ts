import { websites } from '$lib/server/db/mongo/mongo.js'


export async function POST({request, cookies, params}) {

    const user_uid = cookies.get("user_uid")
    const website_id = params.website_id

    let data_json = await request.json()

    let name = data_json["name"]
    let description = data_json["description"]

    let dict: any = {}

    if(!name || !description) {
        return new Response("Failed to update website", { status: 500 });
    }

    if(name) dict["name"] = name

    if(description) dict["description"] = description

    const result = await websites.updateOne({
        "user_uid": user_uid,
        "id": website_id
    }, {
        "$set": dict
    })

    if (result.modifiedCount === 1) {
        // Return success response if the update was successful
        return new Response("Website updated successfully", { status: 200 });
    } else {
        // Return error response if no document was modified (update failed)
        return new Response("Failed to update website", { status: 500 });
    }


}