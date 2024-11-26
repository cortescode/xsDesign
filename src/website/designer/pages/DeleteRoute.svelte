<script lang="ts">
    import type { Editor } from "grapesjs";
    import type { Route } from "$website/interfaces/Route";
    import { website } from "$website/stores/website";
    import { otm } from "$website/designer/consts";
    import { onMount } from "svelte";

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

            closeModal()
        })
    }



    let modal: HTMLElement;
    let opacityLayer: HTMLElement;

    $: {
        editor, modal, opacityLayer;
    }

    function openModal() {
        if (modal && modal.style) {
                modal.style.display = "flex";
                opacityLayer.style.display = "block";
            }
    }
        
    function closeModal() {
        if (modal && modal.style) {
            modal.style.display = "none";
            opacityLayer.style.display = "none";
        }
    }

    onMount(() => {
        opacityLayer?.addEventListener("click", () => {
            closeModal()
        });
    })
    
    
</script>


<button class="delete-button" on:click={openModal}>
    Delete
</button>

<div class="modal" bind:this={modal}>
    <button class="close-button" on:click={closeModal}>
        <div class="gjs-mdl-btn-close" data-close-modal="">⨯</div>
    </button>
    <h3>Are you sure about deleting your route?</h3>
    <div>
        <button class="designer-button" on:click={deleteRoute}>Yes</button>
        <button class="cancel-button" on:click={closeModal}>No</button>
    </div>
</div>

<div class="opacity-layer" bind:this={opacityLayer}></div>

<style>

    .cancel-button {
        outline: 1px solid rgb(67, 28, 225);;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        background: white;
        padding: 10px 20px;
        border-radius: 12px;
        border: none;
        outline: none;
        color: var(--blue);
        text-decoration: none;
        font-size: 16px;
        transition: .2s;
    }

    .cancel-button:hover {
        background: rgb(67, 28, 225);;
        box-shadow: rgb(48, 63, 200) 0 0 120px 0;
        color: white;
    }
    .close-button {
        position: absolute;
        inset: 4px 4px auto auto;
        padding: 0;
        margin: 0;
        border: none;
        background: none;
    }
    .modal {
        box-sizing: border-box;
        position: fixed;
        display: none;
        flex-direction: column;
        justify-content: flex-start;
        top: auto;
        left: calc(50% - 160px);
        right: calc(50% - 160px);
        bottom: auto;
        width: 320px;
        height: fit-content;
        z-index: 20;
        padding: 40px 20px;
        border-radius: 3px;
        background-color: white;
    }

    .modal h3 {
        margin: 0 0 20px 0;
    }

    .opacity-layer {
        display: none;
        position: fixed;
        inset: 0;
        width: 100%;
        height: 100%;
        /* background-color: rgb(1, 0, 40, 0.4); */
        z-index: 19;
    }
    
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