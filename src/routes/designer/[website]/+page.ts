import { redirect } from '@sveltejs/kit'
// import type { PageLoad } from './$types.js'
import type { Web } from "../interfaces.js"


export function load({ params }) {
    if(!params)
        redirect(301, "/");
    

    let result: Web = {
        website: params.website
    }

    return {
        website: params.website
    };
}

