<script lang="ts">
    import { onMount } from "svelte";



    let show_panel = false;

    let opacityLayer: HTMLElement;

    $: {
        if(opacityLayer)
            if(show_panel == false) {
                opacityLayer.style.display = "none";
            } else opacityLayer.style.display = "block";
    }


    onMount(() => {
        opacityLayer?.addEventListener("click", () => {
            show_panel = false;
        });
    })

</script>



<button class="publish-button" on:click={() => show_panel = true}>
    Publish
</button>


{#if show_panel}
    <div class="modal">
        <button class="close-button" on:click={() => show_panel = false}>
            <div class="gjs-mdl-btn-close" data-close-modal="">⨯</div>
        </button>
        <h3 class="gradient-text">This functionality will be available soon!</h3>
        <p>We are working hard to create a secure and reliable hosting service... but it takes a bit of time!</p>
    </div>
{/if}

<div class="opacity-layer" bind:this={opacityLayer}></div>

<style>

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
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        top: calc(50% - 160px);
        left: calc(50% - 160px);
        right: calc(50% - 160px);
        bottom: auto;
        width: 320px;
        height: fit-content;
        z-index: 20;
        padding: 40px 20px;
        border-radius: 3px;
        background-color: white;
        text-align: center;
    }

    .modal h3 {
        margin: 20px 0 20px 0;
    }

    .opacity-layer {
        display: none;
        position: fixed;
        width: 100%;
        height: 100%;
        background-color: rgb(1, 0, 40, 0.4);
        z-index: 19;
    }

    .publish-button {
        border-radius: 12px;
        border: none;
        background-color: var(--dark);
        color: white;
        padding: 0 20px;
        font-size: 12px;
        position: fixed;
        right: 4px;
        top: 4px;
        height: 30px;
        z-index: 2;
    }
    .publish-button:hover {
        background-color: var(--blue);
    }
</style>