<script lang="ts">
    import type { Editor } from "grapesjs";
    import type { Route } from "$lib/interfaces/Route";
    import { website } from "$lib/stores/website";

    export let editor: Editor;
    export let route: Route;


    function deleteRoute() {

        fetch(`/designer/${ $website.id }/pages/delete`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(route)
        }).then(() => {
            editor?.Pages?.remove(route.page_id)

            const routeIndex = $website.routes.findIndex(r => r.page_id === route.page_id); // Find the index of the route to remove
                if(routeIndex !== -1) {
                    $website.routes.splice(routeIndex, 1); // Remove the route from the array
                    website.set($website); // Update the website store
                }
            
            editor?.Pages?.select($website.routes[0].page_id)

            editor.trigger('page:change', { route: $website.routes[0] });
        })
    }
</script>


<button class="delete-button" on:click={deleteRoute}>
    Delete
</button>


<style>

    .delete-button {
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

    .delete-button:hover {
        background: var(--dark);
        color: white;
    }
</style>