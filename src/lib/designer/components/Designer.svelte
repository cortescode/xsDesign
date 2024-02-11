<script lang="ts">
    import { onMount } from "svelte";
    import { grapesjs } from "grapesjs"
    import main from "$lib/designer/plugins/main";
    import navbar from "$lib/designer/plugins/navbar"
    import PagesManager from "./pagesManagement/PagesManager.svelte";
    // import exportPlugin from "grapesjs-plugin-export";
    import basic from "$lib/designer/plugins/basic"
    import advanced from "$lib/designer/plugins/advanced"
    import type { Website } from "../interfaces/Website";

    import { website } from "./website"


    
    // export let website_id: string;


    const projectEndpoint = `http://localhost:5173/designer/${$website?.id}/data/`;

    const assetsEndpoint = `http://localhost:5173/designer/${$website?.id}/assets/`

    let editor: any;

    $: editor;
    
    onMount(() => {
        
        editor = grapesjs.init({
			height: '100%',
			showOffsets: true,
			noticeOnUnload: false,
			container: '#gjs',
			fromElement: true,
            assetManager: {
                // Upload endpoint, set `false` to disable upload, default `false`
                upload: assetsEndpoint,
                // The name used in POST to pass uploaded files, default: `'files'`
                uploadName: 'files',
                
            },
			storageManager: {
				type: 'remote', // Storage type. Available: local | remote
				autosave: true, // Store data automatically
				autoload: true, // Autoload stored data on init
				stepsBeforeSave: 1, // If autosave is enabled, indicates how many changes are necessary before the store method is triggered
				// ...
				// Default storage options
				options: {
					// local: { key: `gjsProject-${website}` },
					remote: {
                        urlLoad: projectEndpoint,
                        urlStore: projectEndpoint,
                        // The `remote` storage uses the POST method when stores data but
                        // the json-server API requires PATCH.
                        // fetchOptions: opts => (opts.method === 'POST' ?  { method: 'PATCH' } : {}),
                        // As the API stores projects in this format `{id: 1, data: projectData }`,
                        // we have to properly update the body before the store and extract the
                        // project data from the response result.
                        onStore: data => ({ id: $website.id, data, routes: $website.routes }),
                        onLoad: result => result.data,
                    }
				}
			},
            pageManager: {
                pages: [
                    {
                    id: 'home',
                    styles: '.my-el { color: red }',
                    component: '<div class="my-el">Hello world!</div>',
                    }
                ]
            },
			plugins: [main, basic, advanced, navbar],
			pluginsOpts: {
				'grapesjs-preset-webpage': {},
                'grapesjs-basic': {},
                'grapesjs-advanced': {},
                'grapesjs-navbar': {},
			}

        });
            
    })


</script>


<div id="gjs" style="height:0px; overflow:hidden">
    <div class="panel">
      <h1 class="welcome">Welcome to {$website?.id}</h1>
      <div class="big-title">
        <span>GrapesJS</span>
      </div>
      <div class="description">
        This is a demo content from index.html. For the development, you shouldn't edit this file, instead you can
        copy and rename it to _index.html, on next server start the new file will be served, and it will be ignored by git.
      </div>
    </div>
</div>
<PagesManager {editor} ></PagesManager>

<style>
    .welcome {
        text-align: center;
        font-weight: 100;
        margin: 0px;
    }


</style>