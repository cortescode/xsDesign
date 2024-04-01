<script lang="ts">
    import { otm } from "$lib/designer/consts";
    import type { Editor } from "grapesjs";
    import { onMount } from "svelte";
    import { closeTraitsEvent } from ".";

    export let editor: Editor;

    let traitsModal: HTMLElement;
    let opacityLayer: HTMLElement;

    $: {
        editor, traitsModal, opacityLayer;
    }

    onMount(() => {
        document.addEventListener("open-traits", () => {
            if (traitsModal && traitsModal.style) {
                traitsModal.style.top = "calc(50% - 200px)";
                opacityLayer.style.display = "block";
            }
        });

        document.addEventListener("close-traits", () => {
            if (traitsModal && traitsModal.style) {
                traitsModal.style.top = "-600px";
                opacityLayer.style.display = "none";
            }
        });

        opacityLayer?.addEventListener("click", () => {
            document.dispatchEvent(closeTraitsEvent)
            // Check if the active command exists and stop it
        });
    });
</script>

<div class="traits-modal" bind:this={traitsModal}>
    <button class="close-button" on:click={() => document.dispatchEvent(closeTraitsEvent)}>
        <div class="gjs-mdl-btn-close" data-close-modal="">⨯</div>
    </button>
    <h3>Properties</h3>
    <div id="traits"></div>
</div>

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
    .traits-modal {
        box-sizing: border-box;
        position: fixed;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        top: -600px;
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

    .traits-modal h3 {
        margin: 0 0 20px 0;
    }

    .opacity-layer {
        display: none;
        position: fixed;
        width: 100%;
        height: 100%;
        background-color: rgb(1, 0, 40, 0.4);
        z-index: 19;
    }
</style>
