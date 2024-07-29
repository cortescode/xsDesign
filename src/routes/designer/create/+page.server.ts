import { redirect } from '@sveltejs/kit'
import { websites } from '$lib/server/db/mongo/mongo.js';
import type { PageServerLoad } from './$types';


const WEBSITES_LIMIT: number = 3;


export const load: PageServerLoad = async ({ cookies }) => {
    let user_uid = cookies.get("user_uid");
    
    // Check if user is logged in
    if (!user_uid) {
        throw redirect(302, '/login'); // Redirect to login page if not logged in
    }

    // Check the number of websites the user has already created
    const userWebsitesCount = await websites.countDocuments({ user_uid });
    
    if (userWebsitesCount >= WEBSITES_LIMIT) {
        throw redirect(302, '/designer/create/limit-reached');
    }

    return {}
};