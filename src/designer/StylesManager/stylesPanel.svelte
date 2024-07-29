<script lang="ts">
    import { obl } from "$designer/consts";
    import type { Editor } from "grapesjs";
    import { onMount } from "svelte";

    export let editor: Editor;

    $: editor;


    let panel: HTMLElement;

	$: panel;

    $: active = false;


    onMount(() => {

        document.addEventListener("open-styles", () => {
            if(panel && panel.style)
                panel.style.right = "0";
            active=true
        })

        document.addEventListener("close-styles", () => {
            if(panel && panel.style)
                panel.style.right = "-350px"
            active=false
           
        })
        
    })

    
</script>


<div class="styles-panel" bind:this={panel}>
    <div style="display:contents;" id="selector">

    </div>
    <div style="display:contents;" id="styles">

    </div>
</div>


<style>
    .styles-panel {
        display: block;
        box-sizing: border-box;
        position: fixed;
        width: var(--gjs-left-width);
        height: calc(100vh - 120px);
        padding: 0;
        right: -350px;
        top: 120px;
        background-color: white;
        z-index: 2;
        color: var(--dark);
        border-top: 2px solid var(--light-blue);
        overflow: auto
    }

</style>