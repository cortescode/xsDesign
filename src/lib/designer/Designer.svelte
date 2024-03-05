<script lang="ts">
    import { onMount } from "svelte";
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

    const projectEndpoint = `/designer/${$website?.id}/data/`;

    const assetsEndpoint = `/designer/${$website?.id}/assets/`;

    let editor: Editor;

    let logo: HTMLElement;

    $: {
        editor;
    }

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
            plugins: [main],
            blockManager: {
                appendTo: "#blocks",
            },
            styleManager: {
                appendTo: "#styles",
                clearProperties: true,
                sectors: [
                    {
                        name: "Dimension",
                        open: false,
                        buildProps: ["width", "height"],
                        properties: [
                            {
                                type: "number",
                                property: "margin",
                                label: "Margin",
                                default: "auto",
                                //@ts-ignore
                                units: ["px", "%", "em", "rem"],
                            },
                            {
                                type: "number",
                                property: "padding",
                                label: "Padding",
                                default: "auto",
                                //@ts-ignore
                                units: ["px", "%", "em", "rem"],
                            },
                        ],
                    },
                    {
                        name: "Flex",
                        open: false,
                        buildProps: [
                            "flex-direction",
                            "flex-wrap",
                            "justify-content",
                            "align-items",
                            "align-content",
                            "order",
                            "flex-basis",
                            "flex-grow",
                            "flex-shrink",
                            "align-self",
                        ],
                    },
                    {
                        name: "Typography",
                        open: false,
                        properties: [
                            {
                                type: "radio",
                                property: "font-size",
                                label: "Font Size",
                                default: "block",
                                // @ts-ignore
                                options: [
                                    { id: "12px", label: "small" },
                                    { id: "18px", label: "normal" },
                                    { id: "2em", label: "subtitle" },
                                    { id: "4em", label: "title" },
                                ],
                            },
                            {
                                type: "radio",
                                property: "text-align",
                                label: "Text Align",
                                default: "block",
                                // @ts-ignore
                                options: [
                                    { id: "left", label: "left" },
                                    { id: "center", label: "center" },
                                    { id: "right", label: "right" },
                                ],
                            }
                        ],
                        buildProps: ["font-size", "text-align", "color", "text-shadow"],
                        visible: false
                    },
                    {
                        name: "Border",
                        open: false,
                        buildProps: ["border", "border-radius-c"],
                    },
                    {
                        name: "Decorations",
                        open: false,
                        buildProps: ["box-shadow"],
                    },
                ],
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
