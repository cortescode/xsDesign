<script lang="ts">
    import { onDestroy, onMount } from "svelte";
    import type { Editor } from "grapesjs";
    import { grapesjs } from "grapesjs";
    import PagesManager from "./pagesManagement/PagesManager.svelte";
    import type { Website } from "$lib/interfaces/Website";

    import main from "./index";

    import { website } from "$lib/stores/website";
    import BlocksPanel from "./blocks/blocksPanel.svelte";
    import { selectStylesOption } from "./generalStyles/options";
    import PublishingButton from "./Publishing/publishingButton.svelte";
    import StylesPanel from "./generalStyles/stylesPanel.svelte";
    import sectors from "./generalStyles/sectors";

    const projectEndpoint = `/designer/${$website?.id}/data/`;

    const assetsEndpoint = `/designer/${$website?.id}/assets/`;

    let editor: Editor;

    $: editor;

    let logo: HTMLElement;

    onMount(() => {
        editor = grapesjs.init({
            height: "100%",
            showOffsets: true,
            noticeOnUnload: false,
            container: "#gjs",
            fromElement: true,
            assetManager: {
                // Upload endpoint, set `false` to disable upload, default `false`
                upload: assetsEndpoint,
                // The name used in POST to pass uploaded files, default: `'files'`
                uploadName: "files",
            },
            storageManager: {
                type: "remote", // Storage type. Available: local | remote
                autosave: true, // Store data automatically
                autoload: true, // Autoload stored data on init
                stepsBeforeSave: 1, 
                options: {
                    remote: {
                        urlLoad: projectEndpoint,
                        urlStore: projectEndpoint,
                        onStore: (data) => ({
                            id: $website.id,
                            data,
                            routes: $website.routes,
                        }),
                        onLoad: (result) => result.data,
                    },
                },
            },
            pageManager: {
                pages: [
                    {
                        id: "home",
                        styles: ".my-el { color: red }",
                        component: '<div class="my-el">Hello world!</div>',
                    },
                ],
            },
            blockManager: {
                appendTo: "#blocks",
                custom: true,
            },
            selectorManager: {
                componentFirst: true,
                appendTo: "#selector",
            },
            styleManager: {
                appendTo: "#styles",
                clearProperties: true,
                sectors: sectors
            },
            plugins: [main],
            pluginsOpts: {
                'grapesjs-main': {},
			},
        });

        editor.on("run:preview", () => {
            logo.style.transform = "scale(0)";
        });

        // Listen to the event triggered when exiting the preview mode
        editor.on("stop:preview", () => {
            logo.style.transform = "scale(1)";
        });
    });

</script>

<a class="designer-logo-container" href="/" bind:this={logo}>
    <img class="logo-image" src="/media/assets/logo.png" alt="" />
</a>

<PublishingButton></PublishingButton>
<BlocksPanel {editor}></BlocksPanel>
<StylesPanel {editor}></StylesPanel>

<div id="gjs" style="height:0px; overflow:hidden"></div>

<PagesManager {editor}></PagesManager>

<style>
</style>
