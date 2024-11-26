<script lang="ts">
    import { onMount } from "svelte";
    import type { Editor } from "grapesjs";
    import type { Route } from "$website/interfaces/Route";
    import CreateRoute from "./CreateRoute.svelte";
    import type { Website } from "../../interfaces/Website";
    import { website } from "../../stores/website";
    import { opa } from "$website/designer/consts";
    import EditRoute from "./EditRoute.svelte";
    import DeleteRoute from "./DeleteRoute.svelte";
    import { getAll } from "firebase/remote-config";
    import { setRouteNameOnPanel } from "$website/designer/panels";
    import { selectRoute } from "./common";


    export let editor: Editor;

    let pages: any = undefined;
    
    let openPanel: boolean = false;

    let selected: number = -1;

    let background: HTMLElement;

    $: {
        pages, openPanel, selected, background
    }

    onMount(() => {
        
        document.addEventListener("open-pages", () => {
                activatePagesButtons()
                openPanel=true
                
                const selectedPage = editor?.Pages?.getSelected()
                const currentRoute = $website.routes.find((route) => {
                    return route.page_id == selectedPage?.id
                })

                if(background?.style)
                    background.style.display = "block"

                setTimeout(() => {
                    if(currentRoute)
                        setRouteNameOnPanel(currentRoute.slug)
                }, 100)
            })

        document.addEventListener("close-pages", () => {
                deactivatePagesButtons()
                openPanel=false

                const selectedPage = editor?.Pages?.getSelected()
                const currentRoute = $website.routes.find((route) => {
                    return route.page_id == selectedPage?.id
                })

                if(background?.style)
                    background.style.display = "none"
                
                setTimeout(() => {
                    if(currentRoute)
                        setRouteNameOnPanel(currentRoute.slug)
                }, 100)
            })
    })




    // Desactivate the button from the panel
    function activatePagesButtons() {
        const panel = editor?.Panels?.getPanel("routes"); 

        const button = panel?.buttons?.get(opa)
        if(button?.active == false) button.active = true
        
    }

    // Desactivate the button from the panel
    function deactivatePagesButtons() {
        const panel = editor?.Panels?.getPanel("routes"); 

        const button = panel?.buttons?.get(opa)
        if(button?.active == true)  button.active = false
        
    }

</script>


<!-- Pages panel -->
<button class="background" bind:this={background} on:click={() => document.dispatchEvent(new Event("close-pages"))}>
</button>
{#if openPanel}
        <section class="panel" >
            <p class="title">Routes</p>
            <div class="divider"></div>
            <div class="pages">
                {#if $website.routes }
                    {#each $website.routes as route, index }
                        <div class="page">
                            <div class="page-info">
                                <p class="title">
                                    <b>/ {route.slug}</b>

                                    {#if selected == index}
                                        <button on:click={() => selected=-1}>
                                            -
                                        </button>
                                    {:else}
                                        <button on:click={() => selected=index}>
                                            +
                                        </button>
                                    {/if}
                                    
                                </p>
                                {#if selected == index}
                                    <p>
                                        title: <b>{route.title}</b>
                                    </p>
                
                                    <p>
                                        description: <b>{route.description}</b>
                                    </p>
                                {/if}
                            </div>
                            <div class="page-buttons">
            
                                <DeleteRoute {editor} {route}></DeleteRoute>

                                <EditRoute {editor} {route}></EditRoute>
                    
                                <button on:click={() => selectRoute(editor, route)} class="select-button">
                                    Select page
                                </button>
                            </div>
                        </div>
                        
                    {/each} 
                {/if}
            </div>
            <div class="create-button-wrapper">
                <!-- CREATION PANNEL -->
                <CreateRoute { editor }></CreateRoute>
            </div>
        </section>
{/if}



<style>

    .background {
        position: fixed;
        display: none;
        width: 100vw;
        height: 100vh;
        padding: 0;
        margin: 0;
        inset: 0;
        background-color: rgba(0, 0, 0, 0.5);
        border: none;
        cursor: default;
        z-index: 4;
    }
    .background:active {
        border: none;
    }

    .panel {
        position: fixed;
        text-align: right;
        inset: 0 auto 0 0;
        margin: 0;
        height: calc(100vh - 60px);
        width: 400px;
        padding-top: 60px;
        color: var(--dark);
        background-color: white;
        border: none;
        border-radius: 0;
        animation: panel ease-out .1s;
        z-index: 5;
        box-shadow: 10px 0px 300px rgb(128, 128, 255, .4);

        -webkit-user-select: none; /* Safari */
        -moz-user-select: none; /* Firefox */
        -ms-user-select: none; /* Internet Explorer/Edge */
        user-select: none; 
        font-size: 14.6px; 
    }

    .divider {
        width: 100%;
        height: 0;
        border: 1px solid var(--blue);
    }

    .panel .title {
        text-align: left;
        font-size: 22px;
        font-weight: bold;
        margin: 0;
        display: grid;
        grid-template-columns: 1fr auto;
    }

    .panel .title button {
        font-size: 28px;
        width: 32px;
        height: 32px;
        border: 1px solid var(--blue);
        color: var(--blue);
        border-radius: 12px;
        background-color: white;
    }
    
    .panel .title button:hover {
        background: linear-gradient(-45deg, rgb(94, 182, 255), var(--blue));
        color: white;
    }

    .pages {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 20px;
        margin-top: 28px;
        height: 68%;
        overflow-y: auto;
        border-top: 1px solid rgb(204, 226, 246);
        background: linear-gradient(170deg, rgb(204, 226, 246), aliceblue 10%, white 80%);
        padding: 10px;
    }

    .page {
        display: grid;
        grid-template-columns: 1fr;
        width: calc(100% - 2px);
        align-items: center;
        padding: 0;
        text-align: left;
        height: fit-content;
        margin: 0;
        background-color: white;
        border: 1px solid var(--blue);
    }

    .page-info .title {
        margin: 12px 8px 4px 8px;

    }

    .page p {
        margin:  0 8px;
        font-family: Comfortaa;
        padding: 4px;
    }

    .page-buttons {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        margin-top: 20px;
    }

    .page-buttons button {
        width: fit-content;
        height: 100%;
        width: 100%;
        margin: 0;
        padding: 10px;
        border-radius: 0 !important;
        border: none;
        border: 1px solid var(--blue);
        background-color: aliceblue;
    }

    .page-buttons button:hover {
        background-color: var(--dark);
        color: white;
    }

    .select-button {
        border: 1px solid var(--blue);
        background-color: var(--blue) !important;
        font-weight: bold;
        color: white;
        padding: 6px 12px;
        border-radius: 4px;

    }

    .select-button:hover {
        background: var(--dark) !important;
    }


    .create-button-wrapper {
        width: 100%;
        display: grid;
        place-items: center;
    }

    @keyframes panel{
        0% {
            transform: translateX(-400px);
            opacity: 0;
        }
        100% {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
</style>