import type { Route } from "$lib/interfaces/Route";
import type { Website } from "$lib/interfaces/Website";
import { website as website_store } from "$lib/stores/website";
import type { Editor, PluginOptions } from "grapesjs";
import JSZip from "jszip";
import saveAs from "file-saver";

let website: Website;

website_store.subscribe(site => website = site)



export default function loadExportCommand(editor: Editor) {
    const { Commands } = editor;

    Commands.add("open-export", {
        run: ed => {
            openModal()
            function openModal() {
                // Check if the added component is of type 'custom-link'
                ed.Modal.open({
                    title: "Export and download",
                    content: `<button class="designer-button" id="exportBtn">
                Download website
                <svg width="24" height="24" viewBox="0 0 24 24" style="margin-left: 20px">
                    <path fill="white" d="M5,20H19V18H5M19,9H15V3H9V9H5L12,16L19,9Z" />
                </svg>
              </button>`,
                    attributes: {
                        class: 'small-modal',
                    }
                })

                let modal = ed.Modal.getContentEl()

                const saveLinkBtn = modal?.querySelector('#exportBtn');

                saveLinkBtn?.addEventListener('click', async () => {
                    await exportAndZip()
                    ed.Modal.close();
                });

            }

            async function exportAndZip() {

                let routes = website.routes;
                const zip = new JSZip();


                // Iterate through pages and export each one
                const pagesManager = editor;

                let route: Route;
                for (route of routes) {

                    let page = editor.Pages.get(route.page_id)
                    if (!page) continue

                    editor.Pages.select(page);

                    let cssRoute = `css/${page.id}.css`
                    let header = geHtmlHeader(route, cssRoute)

                    const exportedHtml = `
                  <!DOCTYPE html>
                  <html lang="en">

                    ${header} 

                    ${editor.getHtml()}

                  </html>
                `

                    const exportedCss = editor.getCss() || "";

                    zip.file(`${page.id}.html`, exportedHtml);
                    zip.file(cssRoute, exportedCss);
                }

                // Generate the zip file
                const content = await zip.generateAsync({ type: 'blob' });
                saveAs(content, 'website.zip'); // This assumes you have the FileSaver.js library or a similar method for saving the Blob
            }


            function geHtmlHeader(route: Route, cssRoute: string) {
                return `
    <head>

        <meta charset="utf-8" />

        <link rel="icon" href="/favicon.png" />

        <meta name="viewport" content="width=device-width" />

        <title>${route.title}</title>
        <meta name="description" content="${route.description}" />

        <!-- Styles and Fonts-->
        <link rel="stylesheet" href="${cssRoute}" />
        <!-- Google fonts -->
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Comfortaa">
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Righteous">
            
    </head>
`
            }
        }
    });
}
