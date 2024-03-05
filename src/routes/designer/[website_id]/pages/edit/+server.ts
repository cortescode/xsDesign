import type { Route } from '$lib/interfaces/Route';
import type { Website } from '$lib/interfaces/Website';
import { websites } from '$lib/server/db/mongo/mongo';
import { error } from '@sveltejs/kit';

export async function POST({request, cookies, params}) {
    let user_uid = cookies.get("user_uid")

    if (!user_uid)
        return new Response(error(500, "You are not allowed to make this action"));

    let route: Route = await request.json()

    
    let db_website = await websites.findOne({
        "id": params.website_id,
        "user_uid": user_uid
    })

    if (!db_website)
        return new Response(error(500, "The website does not exist"));

    let website: Website = {
        id: params.website_id,
        user_uid: user_uid,
        name: db_website.name,
        data: db_website.data,
        routes: db_website.routes
    }

    return await updateRoute(website, route);
}

async function updateRoute(website: Website, newRoute: Route) {
    // Attempt to find the index of the route to be updated based on the slug
    const routeIndex = website.routes.findIndex(r => r.page_id === newRoute.page_id);

    // If the route exists, update it
    if (routeIndex !== -1) {
        // Update the route at the found index with the new route data
        let updatedRoutes = [...website.routes];
        updatedRoutes[routeIndex] = newRoute;

        // Update the website document in the database with the updated routes array
        await websites.updateOne(
            { "id": website.id, "user_uid": website.user_uid },
            { $set: { "routes": updatedRoutes } }
        );

        return new Response(JSON.stringify({ message: "Route updated successfully" }), { status: 200 });
    } else {
        // If the route does not exist, return an error
        return new Response(JSON.stringify({ error: "Route not found for the given slug" }), { status: 404 });
    }
}
