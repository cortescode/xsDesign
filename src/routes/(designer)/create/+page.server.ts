import mongo from '$lib/server/db/mongo/mongo'
import { redirect } from '@sveltejs/kit';



export const actions = {
    default: async ({ request, cookies }) => {
        const db = mongo;

        let uid = cookies.get("user_uid")

		const data = await request.formData();

        console.log(data.get("name"))

        redirect(301, "/")
    }
}