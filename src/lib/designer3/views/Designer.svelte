<script lang="ts">
    import { onMount } from "svelte";
    import type {Editor} from "grapesjs";
    import { grapesjs } from "grapesjs";
    import PagesManager from "./pagesManagement/PagesManager.svelte";
    import type { Website } from "../../interfaces/Website";

    import main from "$lib/designer/main";
    import basic from "$lib/designer/basic";
    import advanced from "$lib/designer/advanced";

    import { website } from "../../stores/website";
    import BlocksPanel from "./blocksManagement/blocksPanel.svelte";
    import { selectStylesOption } from "../main/styles/options";
    import PublishingButton from "./Publishing/publishingButton.svelte";
    import StylesPanel from "./stylesManagement/stylesPanel.svelte";

    const projectEndpoint = `/designer/${$website?.id}/data/`;

    const assetsEndpoint = `/designer/${$website?.id}/assets/`;

    let editor: Editor;

    let logo: HTMLElement;



    $: {editor};
    

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
                stepsBeforeSave: 1, // If autosave is enabled, indicates how many changes are necessary before the store method is triggered
                // ...
                // Default storage options
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
            plugins: [main, basic, advanced],
            pluginsOpts: {
                "main": {},
                "basic": {},
                "advanced": {},
            },
            blockManager: {
                appendTo: "#blocks"
            },
            styleManager: {
                appendTo: "#styles"
            }
        });

        selectStylesOption(editor, "basic")
        editor.on("run:preview", () => {
            logo.style.transform = "scale(0)";
        });

        // Listen to the event triggered when exiting the preview mode
        editor.on("stop:preview", () => {
            logo.style.transform = "scale(1)";
        });
        
    });
</script>

<!-- 
<div class="top-panel">
</div>
 -->
<a class="designer-logo-container" href="/" bind:this={logo}>
    <img class="logo-image" src="/media/assets/logo.png" alt="" />
</a>


<PublishingButton></PublishingButton>
<BlocksPanel {editor}></BlocksPanel>
<StylesPanel {editor}></StylesPanel>

<div id="gjs" style="height:0px; overflow:hidden">
</div>

<PagesManager {editor}></PagesManager>


<style>
    .top-panel {
        z-index: 1;
        width: 100vw;
        height: 50px;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        margin: 0;
        padding: 0;
        background-color: rgb(32, 37, 69);
    }

</style>