import type { Route } from '$lib/interfaces/Route';
import type { Website } from '$lib/interfaces/Website';
import { websites } from '$lib/server/db/mongo/mongo';
import { error } from '@sveltejs/kit';


export async function POST({request, cookies, params}) {

    let user_uid = cookies.get("user_uid")

    if(!user_uid)
        return new Response(error(500, "You are not allowed to make this action"))

    
    let request_route: Route = await request.json()
    
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
        data: db_website?.data,
        routes: db_website?.routes
    }

    const route = await createRoute(website, request_route);
    if(!route)
        error(500, "The defined slug already exists within this website");

    return new Response(JSON.stringify({ route }), { status: 200 });
}




async function createRoute(website: Website, route: Route): Promise<Route | null>{
    // Check if the website already has the route by slug to prevent duplicates within the same website
    const existingRouteIndex = website.routes.findIndex(r => r.slug === route.slug);

    // If the route already exists in this website, do not add it again
    if (existingRouteIndex !== -1) {
        return null
    }

    // If the route is new for this website, add it to the 'routes' array
    await websites.updateOne(
        { "id": website.id, "user_uid": website.user_uid },
        // @ts-ignore
        { $push: { routes: route } }
    );

    /* 
    let updated_website = await websites.findOne({ 
        "id": website.id, 
        "user_uid": website.user_uid 
    })
    */
    
    return route
}