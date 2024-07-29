import { Readable } from 'stream';
import { Storage } from '@google-cloud/storage';
//@ts-ignore
import { GOOGLE_APPLICATION_CREDENTIALS_JSON } from "$env/static/private";
import { storeFile } from '$designer/server/assets/store.js';
import { websites } from '$lib/server/db/mongo/mongo';
import { fail } from '@sveltejs/kit';


const MAX_FAVICON_SIZE = 1 * 1024 * 1024; // 1 MB
const MAX_SOCIAL_IMAGE_SIZE = 4 * 1024 * 1024; // 4 MB 


export const actions = {

    // Obtain favicon and social-image file images from 
    // request params and update them into the website
    default: async ({ params, request, cookies }) => {

        const user_uid = cookies.get("user_uid")

        const website_id = params.website_id

        // Obtaining form files
        let formData: FormData = await request.formData()
        console.log("Form favicon: ", formData.get("favicon"))
        let favicon_file: File = formData.get("favicon") as File
        let social_image: File = formData.get("social-image") as File

        console.log("Fav icon: ", favicon_file)
        console.log("Social image: ", social_image)

        let url = params.website_id+"/"
        let favicon_storage_url = url+"favicon/"
        let social_image_storage_url = url+"socialImages/"
        

        // Result response returned by the server
        const result: any = {}

        // Update object passed to mongodb
        let setObject: any = {}

        let faviconAdded: boolean = favicon_file.name == "" ? false : true;
        let socialImageAdded: boolean = social_image.name == "" ? false : true;

        // Return error if any image was sent
        if(!faviconAdded && !socialImageAdded)
            return fail(400, { message: "Add some image to update the website" });


        // If favicon sent add the image to google storage and save result url
        if(faviconAdded) {
            if (favicon_file.size > MAX_FAVICON_SIZE) 
                return fail(400, { message: `File ${favicon_file.name} exceeds the maximum allowed size` })
            
            // Store file and obtain url
            let favicon_url = await storeFile(favicon_storage_url, favicon_file)

            result["favicon_url"] = favicon_url   
            setObject["config.favicon_url"] = favicon_url
        }

        // Update social_image if requested
        if(socialImageAdded) {
            if (social_image.size > MAX_SOCIAL_IMAGE_SIZE) 
                return fail(400, { message: `File ${favicon_file.name} exceeds the maximum allowed size` })
            
            // Store file and obtain url
            let social_image_url = await storeFile(social_image_storage_url, social_image)

            result["social_image_url"] = social_image_url
            setObject["config.social_image_url"] = social_image_url
        }

        // Once the images are added to google storage, update the website 
        // with the new urls saved on setObject
        await websites.updateOne(
            { 
                id: website_id,
                "user_uid": user_uid 
            },
            { 
                $set: setObject
            }
        );

        return result;

    }
}