import { redirect } from '@sveltejs/kit'
import type { PageLoad } from './$types.js'
import type { Web } from "./interfaces.js"


export function load({ params }): PageLoad {
    if(!params)
        redirect(301, "/designer/dashboard");
    console.log(params)

    let result: Web = {
        website: params.webpage
    }

    return {
        website: params.webpage
    };
}

