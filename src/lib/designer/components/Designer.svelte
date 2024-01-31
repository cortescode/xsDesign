<script lang="ts">
    import { onMount } from "svelte";
    import { grapesjs } from "grapesjs"
    import plugin from "$lib/designer";
    import type { PluginOptions } from "grapesjs";
    import PagesManager from "./PagesManager.svelte";
    
	export let website: string;
    // export let website_id: string;

    const projectID = 1;
    const projectEndpoint = `http://localhost:3000/${website}`;

    let editor: any;

    $: editor;
    
    onMount(() => {
        editor = grapesjs.init({
			height: '100%',
			showOffsets: true,
			noticeOnUnload: false,
			storageManager: {
				type: 'local', // Storage type. Available: local | remote
				autosave: true, // Store data automatically
				autoload: true, // Autoload stored data on init
				stepsBeforeSave: 4, // If autosave is enabled, indicates how many changes are necessary before the store method is triggered
				// ...
				// Default storage options
				options: {
					local: { key: `gjsProject-${website}` },
					remote: {
                        urlLoad: projectEndpoint,
                        urlStore: projectEndpoint,
                        // The `remote` storage uses the POST method when stores data but
                        // the json-server API requires PATCH.
                        // fetchOptions: opts => (opts.method === 'POST' ?  { method: 'PATCH' } : {}),
                        // As the API stores projects in this format `{id: 1, data: projectData }`,
                        // we have to properly update the body before the store and extract the
                        // project data from the response result.
                        onStore: data => ({ id: projectID, data }),
                        onLoad: result => result.data,
                    }
				}
			},
			container: '#gjs',
			fromElement: true,

			plugins: [plugin],
			pluginsOpts: {
				'grapesjs-preset-webpage': {}
			}
        });

    })
</script>


<div id="gjs" style="height:0px; overflow:hidden">
    <div class="panel">
      <h1 class="welcome">Welcome to {website}</h1>
      <div class="big-title">
        <span>GrapesJS</span>
      </div>
      <div class="description">
        This is a demo content from index.html. For the development, you shouldn't edit this file, instead you can
        copy and rename it to _index.html, on next server start the new file will be served, and it will be ignored by git.
      </div>
    </div>
</div>
<PagesManager {editor}></PagesManager>

<style>
    .welcome {
        text-align: center;
        font-weight: 100;
        margin: 0px;
    }


</style>