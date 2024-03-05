<script lang="ts">
    import type { Route } from "$lib/interfaces/Route";
    import type { Website } from "$lib/interfaces/Website";
    import type { Editor } from "grapesjs";
    import { onMount } from "svelte";
    import { website } from "../../../stores/website";
    import { opa } from "$lib/designer/consts";

    export let editor: Editor;
    export let route: Route;

    let routeIndex: number;
    let pages;

    let editingRoute: boolean = false;
    let pageCreationError: string = "";

    $: route;

    onMount(() => {
        routeIndex = $website.routes.indexOf(route)
        document.addEventListener("close-pages", () => {
            editingRoute=false
        })
    })
    
    function sanitizeSlug() {
        route.slug = route.slug
            .toLowerCase()
            .replace(/ /g, '-') // Replace spaces with hyphens
            .replace(/[<>\"#%{}|\\^~\[\]`;\/?:@=&$+]/g, '') // Remove unsafe characters
            .normalize("NFD").replace(/[\u0300-\u036f]/g, ""); // Remove diacritics
    }

    function openClosePageCreation() {
        editingRoute = !editingRoute;
    }

    async function editRoute() {

        if(route.title.length < 1 || route.slug.length < 1 || route.description.length < 1) {
            pageCreationError = "Any field may be empty";
            return
        }
        

        let edited_route_response = await fetch(`/designer/${ $website.id }/pages/edit`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(route)
        })


        pages = editor?.Pages?.getAll();

        let edited_route = await edited_route_response.json()


        // Find and edit the route pointed by routeIndex inside $website.routes

        if (edited_route && edited_route_response.ok) {
            $website.routes[routeIndex] = { ...$website.routes[routeIndex], ...edited_route };
            
            website.set($website); // Assuming 'website' is a writable store
            
            editingRoute = false;
        } else {
            // Handle error scenario, e.g., setting an error message to display to the user
            pageCreationError = "Failed to update the route. Please try again.";
        }
        
    }
</script>




<button on:click={openClosePageCreation} class="edit-button">
    Edit   
</button>

{#if editingRoute }
    <section class="panel">
        <div class="panel-header">
            <button on:click={() => editingRoute = false}>
                <svg width="20" height="20" viewBox="0 0 20 20">
                    <path fill="white" d="M8.388,10.049l4.76-4.873c0.303-0.31,0.297-0.804-0.012-1.105c-0.309-0.304-0.803-0.293-1.105,0.012L6.726,9.516c-0.303,0.31-0.296,0.805,0.012,1.105l5.433,5.307c0.152,0.148,0.35,0.223,0.547,0.223c0.203,0,0.406-0.08,0.559-0.236c0.303-0.309,0.295-0.803-0.012-1.104L8.388,10.049z"></path>
                </svg>            
            </button>
            <p class="panel-title">Edit route <span>/ { route.slug }</span></p>
        </div>

        <div class="page">
            <div class="page-inputs">
                <label for="title">Title</label>
                <input type="text" placeholder="title" bind:value={route["title"]}>
                
                <label for="slug">Slug (url)</label>
                <input type="text" placeholder="slug" 
                    bind:value={route["slug"]}
                    on:input={sanitizeSlug}
                >
            
                <label for="description">Description</label>
                <input type="text" placeholder="description" bind:value={route["description"]}>
            
                {#if pageCreationError }
                    <span class="page-creation-error">{pageCreationError}</span>
                {/if}
            </div>
            <button on:click={editRoute}>
                Edit Route
            </button>
        </div>
        
    </section>  
{/if}


<style>

    .panel-header {
        display: grid;
        grid-template-columns: auto 1fr;
        align-items: center;
        gap: 12px;
        padding: 10px 0;
        border-bottom: 1px solid var(--blue);
    }

    .panel-header button {
        height: fit-content;
        border: 1px solid var(--blue);
        background-color: aliceblue;
        padding: 8px;
        border-radius: 12px;
        outline: 0;
    }

    .panel-header button:hover {
        background-color: var(--blue);
    }

    .panel-header button svg path{
        fill: var(--blue);
    }
    .panel-header button:hover svg path{
        fill: white;
    }


    .page {
        margin: 4px 0;
        margin-top: 40px;
        background-color: aliceblue;
        border: 1px solid var(--blue);
    }

    .page-inputs {
        display: grid;
        grid-template-columns: 1fr;
        gap: 20px;
        align-items: center;
        padding: 16px;
        text-align: left;
    }

    .page input {
        height: 100%;
        padding: 0 20px;
        min-height: 40px;
        border: 1px solid var(--blue);
        border-radius: 12px;
        font-size: 18px;
    }

    .page label {
        font-size: 16px;
        font-weight: bold;
        margin-top: 10px;
    }

    .page button {
        margin-top: 20px;
        width: 100%;
        border-radius: 0;
        height: 40px;
        border: none;
        border-top: 1px solid var(--blue);
        cursor: pointer;
        background-color: var(--blue);
        color: white;
        font-weight: bold;
    }

    .page button:hover {
        background-color: var(--dark);
        color: white;
    }


    .edit-button {
        margin-top: 40px;
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

    .edit-button:hover {
        background: var(--dark);
        color: white;
    }


    .panel {
        position: fixed;
        text-align: right;
        inset: 0 auto 0 0;
        margin: 0;
        width: 400px;
        height: 100%;
        padding-top: 60px;
        color: var(--dark);
        background-color: white;
        border: none;
        border-radius: 0;
        animation: panel ease-out .1s;
        z-index: 1;
        -webkit-user-select: none; /* Safari */
        -moz-user-select: none; /* Firefox */
        -ms-user-select: none; /* Internet Explorer/Edge */
        user-select: none; 
        font-size: 14.6px; 
    }

    .panel-title {
        text-align: left;
        font-size: 18px;
        margin: 0;
    }

    .panel-title span {
        text-align: left;
        font-size: 22px;
        font-weight: bold;
        margin: 0;
    }


    .page-creation-error {
        color: red;
        margin-top: 20px;
        padding-top: 10px;
        border-top: 1px solid var(--dark);
        animation: errorAppearing ease-in .4s
    }

    @keyframes errorAppearing {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }

    }

    @keyframes panel{
        0% {
            transform: translateX(-400px);
        }
        100% {
            transform: translateX(0);
        }
    }
    

</style>