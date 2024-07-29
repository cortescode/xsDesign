import { describe, it, expect, afterEach } from 'vitest'
import { addWebsiteHostname, deleteWebsiteHostname, obtainHostnameDetails } from './cloudflare'


describe('Cloudflare api connection test', () => {
    const website_id = "example_id"
    const example_hostname = "antakira.site"


    it("add hostname", async () => {

        const result = await addWebsiteHostname(website_id, example_hostname)

        expect(result).toHaveProperty("status")
        expect(result).toHaveProperty("hostname_id")

        await deleteWebsiteHostname(website_id, result["hostname_id"])
        
    })

    it("delete hostname (after adding it)", async () => {

        const addedHostname = await addWebsiteHostname(website_id, example_hostname)

        expect(addedHostname).toHaveProperty("status")
        expect(addedHostname).toHaveProperty("hostname_id")

        const result = await deleteWebsiteHostname(website_id, addedHostname["hostname_id"])

        expect(result).toBeTruthy()
        
    })

    it("Obtain hostame details", async () => {
        const addedHostname = await addWebsiteHostname(website_id, example_hostname)

        expect(addedHostname).toHaveProperty("status")
        expect(addedHostname).toHaveProperty("hostname_id")

        const result = await obtainHostnameDetails(addedHostname["hostname_id"])
        expect(result).toHaveProperty("status")
        expect(result).toHaveProperty("verification_errors")

        await deleteWebsiteHostname(website_id, addedHostname["hostname_id"])

    })
})

