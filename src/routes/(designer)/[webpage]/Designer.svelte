<script lang="ts">
    import { onMount } from "svelte";
    import { grapesjs } from "grapesjs"
    import panels from "$lib/designer/panels";
    import plugin from "$lib/designer";
    import type { PluginOptions } from "grapesjs";
    import Header from "$lib/components/headers/Header.svelte";
    
	export let website: string;

    onMount(() => {

        let editor = grapesjs.init({
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
					remote: {/* ... */},
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


<style>
    .welcome {
        text-align: center;
        font-weight: 100;
        margin: 0px;
    }


</style>