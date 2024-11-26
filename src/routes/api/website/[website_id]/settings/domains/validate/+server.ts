import { websites } from "$lib/server/db/mongo/mongo.js";
import { obtainHostnameDetails } from "../../../../../../../website/publish/domains/server/cloudflare.js";
import { error } from "@sveltejs/kit";


export async function POST({request, params, cookies}) {


	// Obtaining required data
	const website_id = params.website_id;
	const user_uid: any = cookies.get('user_uid') || null;
	const requestData = await request.json()
	const hostname_id = requestData["hostname_id"] as string;


	if(!user_uid) 
		error(400, { message: "The user uid is not defined" })
	

    const validationResult = await obtainHostnameDetails(hostname_id)


    if(validationResult.status == "active"){
        const response = await websites.updateOne({
            id: website_id,
            user_uid: user_uid,
            "config.domains": {
                $elemMatch: {
                  "hostname_id": hostname_id
                }
              }
        }, 
        { 
            "$set": {
                "config.domains.$.active": true,
            }
        })  
        
    } else await websites.updateOne({
        id: website_id,
        user_uid: user_uid,
        "config.domains.domain.hostname_id": hostname_id
    }, 
    { 
        "$set": {
            "config.domains.$.active": false,
            
        }
    })  

    return new Response(JSON.stringify({"status":validationResult.status}));
}


