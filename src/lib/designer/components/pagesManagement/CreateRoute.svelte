<script lang="ts">
    import type { Route } from "$lib/designer/interfaces/Route";
    import type { Website } from "$lib/designer/interfaces/Website";
    import type { Editor } from "grapesjs";
    import { onMount } from "svelte";
    import { website } from "../website";
    import { opa } from "$lib/designer/plugins/old/main/consts";

    export let editor: Editor;
    let pages;
    
    let route: Route = {
        page_id: $website.id,
        slug: "",
        title: "",
        description: ""
    };

    let creatingRoute: boolean = false;
    let pageCreationError: string = "";

    let slugManuallyEdited = false;

    
    
    onMount(() => { 
        document.addEventListener("close-pages", () => {
            creatingRoute=false
        })
    })

    $: if (!slugManuallyEdited) {
        route.slug = route.title
        .toLowerCase()
        .replace(/ /g, '-') // Replace spaces with hyphens
        .replace(/[<>\"#%{}|\\^~\[\]`;\/?:@=&$+]/g, '') // Remove unsafe characters
    }


    function sanitizeSlug() {
        route.slug = route.slug
            .toLowerCase()
            .replace(/ /g, '-') // Replace spaces with hyphens
            .replace(/[<>\"#%{}|\\^~\[\]`;\/?:@=&$+]/g, '') // Remove unsafe characters // Remove diacritics
    }

    function openClosePageCreation() {
        creatingRoute = !creatingRoute;
    }

    async function createRoute() {
        route.page_id = route.slug
        if(route.title.length < 1 || route.slug.length < 1) {
            pageCreationError = "Please introduce all required fields";
            return
        }

        const newPage = editor?.Pages?.add({
            id: route.slug,
            styles: `
.page-container {
    font-family: Arial, sans-serif;
    margin: 0 auto;
    max-width: 800px;
    padding: 20px;
}

.page-header {
    background-color: #007bff;
    color: white;
    padding: 20px 0;
    text-align: center;
}

.page-content {
    margin-top: 20px;
    text-align: left;
    padding: 20px;
    background-color: #f8f9fa;
    border: 1px solid #ddd;
    border-radius: 4px;
}
            `,
            component: `
<div class="page-container">
    <header class="page-header">
        <h1>Welcome to My Page</h1>
    </header>
    <main class="page-content">
        <p>This is a simple page created with GrapesJS.</p>
    </main>
</div>
`,
        });



        await fetch(`/designer/${ $website.id }/pages/create`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(route)
        })


        selectRoute(route);

        pages = editor?.Pages?.getAll();

        $website.routes = [route, ...$website.routes]

        creatingRoute = false;

        editor.store();
        
    }


    function selectRoute(route: Route) {
        editor.Pages.select(route.page_id)
        document.dispatchEvent(new Event("close-pages"))

        editor.trigger('page:change', { route: route });

        desactivateButton()
    }


    // Desactivate the button from the panel
    function desactivateButton() {
        const panel = editor.Panels.getPanel("sites-admin"); // Replace 'panel-id' with the actual ID of your panel
        const button = panel?.buttons?.get(opa)
        if(button)
            button.active = false
    }
</script>




<button on:click={openClosePageCreation} class="designer-button create-button">
    Create new Route   
</button>

{#if creatingRoute }
    <section class="panel">
        <div class="panel-header">
            <button on:click={() => creatingRoute = false}>
                <svg width="20" height="20" viewBox="0 0 20 20">
                    <path fill="white" d="M8.388,10.049l4.76-4.873c0.303-0.31,0.297-0.804-0.012-1.105c-0.309-0.304-0.803-0.293-1.105,0.012L6.726,9.516c-0.303,0.31-0.296,0.805,0.012,1.105l5.433,5.307c0.152,0.148,0.35,0.223,0.547,0.223c0.203,0,0.406-0.08,0.559-0.236c0.303-0.309,0.295-0.803-0.012-1.104L8.388,10.049z"></path>
                </svg>            
            </button>
            <p class="title">Create a new page</p>
        </div>

        <div class="page">
            <div class="page-inputs">
                <label for="title">Title</label>
                <input type="text" placeholder="title" bind:value={route["title"]}>
                
                <label for="slug">Slug (url)</label>
                <input type="text" placeholder="slug" 
                    bind:value={route["slug"]} 
                    on:input={() => slugManuallyEdited = true} 
                    on:input={sanitizeSlug}
                    >
            
                <label for="description">Description</label>
                <input type="text" placeholder="description" bind:value={route["description"]}>
            
                {#if pageCreationError }
                    <span class="page-creation-error">{pageCreationError}</span>
                {/if}
            </div>
            <button on:click={createRoute}>
                Create Route
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


    .create-button {
        margin-top: 40px;
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
        z-index: 3;
        -webkit-user-select: none; /* Safari */
        -moz-user-select: none; /* Firefox */
        -ms-user-select: none; /* Internet Explorer/Edge */
        user-select: none; 
        font-size: 14.6px; 
        font-weight: bold; 
    }

    .panel .title {
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