<script lang="ts">
    import { onMount } from "svelte";
    import type { Editor } from "grapesjs";
    import type { Route } from "../../interfaces/Route";
    import CreateRoute from "./CreateRoute.svelte";
    import type { Website } from "$lib/designer/interfaces/Website";
    import { website } from "../website";
    import { opa } from "$lib/designer/plugins/main/consts";
    import EditRoute from "./EditRoute.svelte";
    import DeleteRoute from "./DeleteRoute.svelte";
    import Page from "../../../../routes/+page.svelte";
    import { getAll } from "firebase/remote-config";


    export let editor: Editor;

    let pages: any = undefined;
    
    let openPanel: boolean = false;

    let selected: number = -1;

    $: {
        pages, openPanel, selected
    }

    onMount(() => {
        
        document.addEventListener("open-pages", () => {
                pages = editor?.Pages?.getAll()
                activatePagesButtons()
                openPanel=true
            })

        document.addEventListener("close-pages", () => {
                deactivatePagesButtons()
                openPanel=false
                //let button = panel.get('buttons').models.find(btn => btn.id === 'button-id'); 
            })
    })

    function selectRoute(route: Route) {
        editor?.Pages?.select(route.page_id)

        editor.trigger('page:change', { route: route });

        openPanel=false
        
    }



    // Desactivate the button from the panel
    function activatePagesButtons() {
        const panel = editor?.Panels?.getPanel("sites-admin"); // Replace 'panel-id' with the actual ID of your panel

        const button = panel?.buttons?.get(opa)
        if(button?.active == false) button.active = true
        
        
        const route_name = panel?.buttons?.get("route-name")
        if(route_name?.active == false) route_name.active = true
    }

    // Desactivate the button from the panel
    function deactivatePagesButtons() {
        const panel = editor?.Panels?.getPanel("sites-admin"); // Replace 'panel-id' with the actual ID of your panel

        const button = panel?.buttons?.get(opa)
        if(button?.active == true)  button.active = false
        
        const route_name = panel?.buttons?.get("route-name") 
        if(route_name?.active == true) route_name.active = false
    }

</script>


<!-- Pages panel -->
{#if openPanel}
    <div class="background">
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
                    
                                <button on:click={() => selectRoute(route)} class="select-button">
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
    </div>
{/if}



<style>

    .background {
        position: fixed;
        width: 100vw;
        height: 100vh;
        padding: 0;
        margin: 0;
        inset: 0;
        background-color: rgba(0, 0, 0, 0.5);
        z-index: 4;
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
        z-index: 2;
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
        background: linear-gradient(-45deg, rgb(94, 182, 255), var(--blue));
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