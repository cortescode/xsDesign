import { CLOUDFLARE_API_KEY, CLOUDFLARE_ZONE_ID, CLOUDFLARE_API_EMAIL, CLOUDFLARE_API_TOKEN } from '$env/static/private';
import { error, json } from '@sveltejs/kit';



const ZONE_ID = CLOUDFLARE_ZONE_ID;


/*
	Access Cloudflare API to add a new hostname (domain) to Cloudflare's list 
	of hostnames and generate the respective SSL certificate.
	@param hostname: the domain to add to Cloudflare and generate certificates for. It must be in a valid format.
*/
export async function addWebsiteHostname(website_id: string, hostname: string): Promise<{
	status: string,
	hostname_id: string
}> {

	let status: string = "";
    let hostname_id: string = "";

	const cloudflareApiEndpoint = `https://api.cloudflare.com/client/v4/zones/${ZONE_ID}/custom_hostnames`


	const headers = {
		'Content-Type': 'application/json',
		'X-Auth-Email': CLOUDFLARE_API_EMAIL,
		'X-Auth-Key': CLOUDFLARE_API_KEY,
	}
	
	const data = {
		/* 
		Paid add-on on enterprise
		"custom_metadata": {
			"website_id": website_id
		},  */
		"hostname": hostname,
		"ssl": {
			"bundle_method": "ubiquitous",
			"method": "http",
			"type": "dv"
		}
	}
	

	try {
		const response = await fetch(cloudflareApiEndpoint, {
			headers: headers,
			method: 'POST',
			body: JSON.stringify(data)
		})


		if(!response.ok) 
			throw new Error("Fetch failed")

		const cloudFlareResponse = await response.json()

		const result = cloudFlareResponse.result

		if(!cloudFlareResponse.success)
			throw new Error("CloudFlare request Failed")

		status = result.status;
        hostname_id = result.id;
		
	} catch(e) {
		//@ts-ignore
		error(500, {message: e.message})
	}
	

	return {
        status,
        hostname_id
    };

}




/*
	Access Cloudflare API to delete a hostname (domain) from Cloudflare's list of hostnames.
	@param hostname: the domain to remove from Cloudflare. It obviously must be already in the list.
*/
export async function deleteWebsiteHostname(website_id: string, hostname_id: string): Promise<boolean> {

	const cloudflareApiEndpoint = `https://api.cloudflare.com/client/v4/zones/${ZONE_ID}/custom_hostnames/${hostname_id}`


	const headers = {
		'Content-Type': 'application/json',
		'X-Auth-Email': CLOUDFLARE_API_EMAIL,
		'X-Auth-Key': CLOUDFLARE_API_KEY,
	}
	

	try {
		const response = await fetch(cloudflareApiEndpoint, {
			headers: headers,
			method: 'DELETE',
		})
		
		if(!response.ok) 
			throw new Error("Fetch failed")
		
	} catch(e) {
		//@ts-ignore
		error(500, {message: e.message})
	}

	return true

}



/*
	Access Cloudflare API to obtain the details of a hostname (domain) that belongs to Cloudflare's list of hostnames.
	@param hostname_id: the domain to add to Cloudflare and generate certificates for. It must be in a valid format.
*/
export async function obtainHostnameDetails(hostname_id: string): Promise<{
	status: string,
	verification_errors: string[]
}> {

	let status: string = "";
    let verification_errors: string[] = [];

	const cloudflareApiEndpoint = `https://api.cloudflare.com/client/v4/zones/${ZONE_ID}/custom_hostnames/${hostname_id}`
	const headers = {
		'Content-Type': 'application/json',
		'X-Auth-Email': CLOUDFLARE_API_EMAIL,
		'X-Auth-Key': CLOUDFLARE_API_KEY
	}
	

	try {
		const response = await fetch(cloudflareApiEndpoint, {
			headers: headers,
			method: 'GET'
		});


		if(!response.ok)
			throw new Error("Fetch failed")

		const cloudFlareResponse = await response.json()
		const result = cloudFlareResponse.result

		if(!cloudFlareResponse.success)
			throw new Error("CloudFlare request Failed")

		status = result.status;
        verification_errors = result.verification_errors
	} catch(e) {
		//@ts-ignore
		error(500, {message: e})
	}

	return {
        status,
        verification_errors
    };

}

