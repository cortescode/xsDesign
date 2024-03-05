<script lang="ts">
    import { obl } from "$lib/designer/consts";
    import type { Editor } from "grapesjs";
    import { onMount } from "svelte";
    import ModeSwitcher from "./modeSwitcher.svelte";

    export let editor: Editor;

    $: editor;


    let stylesPanel: HTMLElement;

	$: stylesPanel;

    $: active = false;


    onMount(() => {

        document.addEventListener("open-styles", () => {
            if(stylesPanel && stylesPanel.style)
                stylesPanel.style.right = "0";
            active=true
        })

        document.addEventListener("close-styles", () => {
            if(stylesPanel && stylesPanel.style)
                stylesPanel.style.right = "-350px"
            active=false
           
        })
        
    })
    

    
</script>


<div id="styles" class="styles-panel" bind:this={stylesPanel}>
    {#if active}
        <ModeSwitcher {editor}></ModeSwitcher>
    {/if}
</div>


<style>
    .styles-panel {
        display: block;
        box-sizing: border-box;
        position: fixed;
        width: var(--gjs-left-width);
        height: calc(100vh - 160px);
        padding: 0;
        right: -350px;
        top: 160px;
        background-color: white;
        z-index: 2;
        border-top: 2px solid var(--light-blue);
        overflow: auto;
    }

</style>