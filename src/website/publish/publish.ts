import type { Route } from "$website/interfaces/Route";
import type { Website } from "$website/interfaces/Website";
import { website as website_store } from "$website/stores/website";
import { user as user_store } from "$auth/stores/session";
import type { Editor, PluginOptions } from "grapesjs";
import JSZip from "jszip";
import saveAs from "file-saver";
import type { User } from "firebase/auth";

const PUBLISHING_API_URL: string = "https://publish.xsdesign.co/publish-website" 


let website: Website;
let user: User | null;

// Suscribe to the stores
website_store.subscribe(site => website = site)
user_store.subscribe(_user => user = _user)


// export async function publishWebsite(editor: Editor): Promise<boolean> {
//     if(!user) return false;
//     try {
//         let content = await getZipContent(editor)
//         return requestPublishing(content)
//     } catch(exeption) {
//         return false
//     }

export async function publishWebsite(editor: Editor): Promise<boolean> {
    try {
        const data = editor.getProjectData()

        const jsonContent = JSON.stringify({
            website_id: website.id,
            data: data
        }, null, 2);
        const response = await fetch("/api/templates/publish", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: jsonContent,
        });

        if (!response.ok) {
            throw new Error('Failed to save template');
        }
        return true;
    } catch (exception) {
        console.log(exception);
        return false;
    }
}


async function requestPublishing(content: Blob): Promise<boolean> {
    if(!user) return false;
    let form = new FormData()

    let user_token = await user.getIdToken()
    
    form.append("zip-website", content, "website.zip")
    form.append('user_token', user_token)
    form.append('website_id', website.id)

    try {
        const response = await fetch(PUBLISHING_API_URL, {
            method: "POST",
            // mode: 'no-cors',
            body: form
        });
        
        if (!response.ok) {
            throw new Error('Failed to publish website');
        }
        return true;
    } catch (error) {
        console.log(error)
        return false
    }


}

async function getZipContent(editor: Editor) {

    let routes = website.routes;
    const zip = new JSZip();


    // Iterate through pages and export each one
    const { Pages } = editor;

    let route: Route;
    for (route of routes) {

        let page = Pages.get(route.page_id)
        if (!page) continue

        Pages.select(page);

        let cssRoute = `css/${page.id}.css`
        let header = geHtmlHeader(route, cssRoute)

        let body = editor.getHtml()
        
        const exportedHtml = `
<!DOCTYPE html>
<html lang="en">

${header} 

${body}

</html>
    `

        const exportedCss = editor.getCss() || "";

        zip.file(`${page.id}.html`, exportedHtml);
        zip.file(cssRoute, exportedCss);
    }

    // Adding fonts css file
    let fontsCssFileRoute = `css/fonts.css`
    let fontsCssFileContent = `@import url("https://fonts.googleapis.com/css2?family=Bevan:ital@0;1&family=Comfortaa:wght@300..700&family=Jacquard+24&family=Jersey+25&family=Lilita+One&family=Lobster&family=Noto+Serif:ital,wght@0,100..900;1,100..900&family=Platypi:ital,wght@0,300..800;1,300..800&family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&family=Satisfy&family=Signika+Negative:wght@300..700&family=Tilt+Neon&display=swap");`
    zip.file(fontsCssFileRoute, fontsCssFileContent);

    // Generate the zip file
    const content = await zip.generateAsync({ type: 'blob' });
    return content
}





function geHtmlHeader(route: Route, cssRoute: string) {

    let faviconUrl = website?.config?.favicon_url || null;

    let faviconHtml = null
    if(faviconUrl == null)
        faviconHtml = ""
    else faviconHtml = `<link rel="icon" type="image/x-icon" href="${faviconUrl}">`;

    let socialImageUrl = website?.config?.social_image_url || null;

    let socialImageHtml = null;

    if(socialImageUrl == null)
        socialImageHtml = ""
    else socialImageHtml = `<meta name="image" content="${socialImageUrl}">`


    let template: String =  `
    <head>

        <meta charset="utf-8" />

        <meta name="viewport" content="width=device-width" />

        <title>${route.title}</title>
        <meta name="description" content="${route.description}" />

        ${faviconHtml}
        ${socialImageHtml}

        <!-- Styles and Fonts-->
        <link rel="stylesheet" href="${cssRoute}" />
        <link rel="stylesheet" href="css/fonts.css" />

        <!-- Fonts -->
        <link rel="stylesheet" href="${cssRoute}" />

    </head>
    `
    return template

}