import { CLOUDFLARE_API_KEY, CLOUDFLARE_ZONE_ID } from '$env/static/private';
import { error, fail, json } from '@sveltejs/kit';
import { websites } from '$lib/server/db/mongo/mongo.js';
import type { Domain } from '../../../../../../../website/interfaces/Domain.js';
import { addWebsiteHostname } from '../../../../../../../website/publish/domains/server/cloudflare.js';



/*
	Create a domain on database and add the hostname to cloudflare to generate certificates
*/
export async function POST({ request, params, cookies }) {

	// Obtaining required data
	const website_id = params.website_id;
	const user_uid: any = cookies.get('user_uid') || null;
	const requestData = await request.formData()
	const domain_name = requestData.get("domain") as string;


	// Check everything is correct
	if (!isValidDomain(domain_name))
		error(400, { message: "The domain is not in a valid format" })
	if(!user_uid) 
		error(400, { message: "The user uid is not defined" })
	if(await domainAlreadyAdded(website_id, user_uid, domain_name))
		error(400, { message: "The domain is already in use" })
	
	
	// Perform operations

	const {status, hostname_id} = await addWebsiteHostname(website_id, domain_name);


	const domain: Domain = {
		"name": domain_name,
		"hostname_id": hostname_id,
		"active": false
	}
	
	await createDomainOnDataBase(website_id, domain, user_uid);
	return new Response(JSON.stringify({
		ok: true,
		status: status,
		domain: domain
	}));
}



/*
	Check if a certain domain name is already linked to a website
*/
async function domainAlreadyAdded(website_id: string, user_uid: string, domain: string): Promise<boolean> {
	const existingDomain = await websites.findOne({
		"id": website_id,
		"user_uid": user_uid,
		"config.domains.name": domain
	})

	if (existingDomain) 
		return true
	else return false

}

/*
	Add domain to database website. If any error happens during update, fail with 500 status
*/
async function createDomainOnDataBase(website_id: string, domain: Domain, user_uid: string) {


	try {
			// Add domain to db
		await websites.updateOne({
			"id": website_id,
			"user_uid": user_uid
		},
			{
				//@ts-ignore
				"$push": {
					"config.domains": domain
				}
			})

	// return the domain added
	} catch(e) {
		error(500,{ message:"There was an error updating the website on database" });
	}
	
	return { domain: domain }

}


// Check if the string is formatted as a valid domain
function isValidDomain(domain: string): boolean {
	let domainValidationRegex = /^(?:[a-zA-Z0-9][a-zA-Z0-9-]{0,61}[a-zA-Z0-9]\.)?[a-zA-Z0-9][a-zA-Z0-9-]{0,61}[a-zA-Z0-9](?:\.[a-zA-Z]{2,})+$/

	return domainValidationRegex.test(domain)
}

