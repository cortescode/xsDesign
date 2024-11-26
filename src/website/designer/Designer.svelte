<script lang="ts">
    import { onDestroy, onMount } from "svelte";
    import type { Editor } from "grapesjs";
    import { grapesjs } from "grapesjs";
    import PagesManager from "./pages/PagesManager.svelte";
    import type { Website } from "../interfaces/Website";

    import main from "./index";

    import { website } from "../stores/website";
    import BlocksPanel from "./blocks/blocksPanel.svelte";
    import PublishingButton from "../publish/components/publishingButton.svelte";
    import StylesPanel from "./StylesManager/stylesPanel.svelte";
    import sectors from "./StylesManager/sectors";
    import TraitsModal from "./traits/traitsModal.svelte";

    const projectEndpoint = `/api/website/${$website?.id}/designer/data/`;

    const assetsEndpoint = `/api/website/${$website?.id}/designer/assets/`;

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
            deviceManager: {
                devices: [
                    {
                        id: "desktop",
                        name: "Desktop",
                        width: "",
                    },
                    {
                        id: "tablet",
                        name: "Tablet",
                        width: "900", // 770px
                        widthMedia: "992px",
                    },
                    {
                        id: "mobileLandscape",
                        name: "Mobile landscape",
                        width: "768px", // 568px
                        widthMedia: "768px",
                    },
                    {
                        id: "mobilePortrait",
                        name: "Mobile portrait",
                        width: "420px", // 360px
                        widthMedia: "480px",
                    },
                ],
            },
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
                        onStore: (data) => {
                            $website.data = data
                            return $website
                        },
                        onLoad: (result) => (result.data),
                        
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
            },
            selectorManager: {
                // componentFirst: true,
                appendTo: "#selector",
                // custom: true,
            },
            styleManager: {
                appendTo: "#styles",
                sectors: sectors,
            },
            traitManager: {
                appendTo: "#traits",
            },
            canvas: {
                styles: ["/css/fonts.css"],
            },
            plugins: [main],
            pluginsOpts: {
                "grapesjs-main": {},
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

<svelte:head>
    <link rel="stylesheet" href="/css/fonts.css" />
</svelte:head>

<a class="designer-logo-container" href="/" bind:this={logo}>
    <img class="logo-image" src="/media/assets/logo.png" alt="" />
</a>
<a class="settings-button" href="/designer/{$website.id}/settings">
    <svg viewBox="0 0 24 24">
        <path fill="currentColor" d="M12,15.5A3.5,3.5 0 0,1 8.5,12A3.5,3.5 0 0,1 12,8.5A3.5,3.5 0 0,1 15.5,12A3.5,3.5 0 0,1 12,15.5M19.43,12.97C19.47,12.65 19.5,12.33 19.5,12C19.5,11.67 19.47,11.34 19.43,11L21.54,9.37C21.73,9.22 21.78,8.95 21.66,8.73L19.66,5.27C19.54,5.05 19.27,4.96 19.05,5.05L16.56,6.05C16.04,5.66 15.5,5.32 14.87,5.07L14.5,2.42C14.46,2.18 14.25,2 14,2H10C9.75,2 9.54,2.18 9.5,2.42L9.13,5.07C8.5,5.32 7.96,5.66 7.44,6.05L4.95,5.05C4.73,4.96 4.46,5.05 4.34,5.27L2.34,8.73C2.21,8.95 2.27,9.22 2.46,9.37L4.57,11C4.53,11.34 4.5,11.67 4.5,12C4.5,12.33 4.53,12.65 4.57,12.97L2.46,14.63C2.27,14.78 2.21,15.05 2.34,15.27L4.34,18.73C4.46,18.95 4.73,19.03 4.95,18.95L7.44,17.94C7.96,18.34 8.5,18.68 9.13,18.93L9.5,21.58C9.54,21.82 9.75,22 10,22H14C14.25,22 14.46,21.82 14.5,21.58L14.87,18.93C15.5,18.67 16.04,18.34 16.56,17.94L19.05,18.95C19.27,19.03 19.54,18.95 19.66,18.73L21.66,15.27C21.78,15.05 21.73,14.78 21.54,14.63L19.43,12.97Z"></path>
    </svg>`
</a>
<PublishingButton {editor}></PublishingButton>
<BlocksPanel {editor}></BlocksPanel>
<StylesPanel {editor}></StylesPanel>
<TraitsModal {editor}></TraitsModal>

<div id="gjs" style="height:0px; overflow:hidden"></div>

<PagesManager {editor}></PagesManager>

<style>
    .settings-button {
        position: fixed;
        box-sizing: border-box;
        inset: 10px 100px auto auto;
        color: var(--dark);
        z-index: 8;
        width: 22px;
        height: 22px;
        overflow: hidden;
    }
    .settings-button:hover {
        color: var(--blue);
    }
</style>
