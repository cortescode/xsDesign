<script lang="ts">
    import { obl } from "$lib/designer/consts";
    import type { Editor } from "grapesjs";
    import { onMount } from "svelte";


    export let editor: Editor;

    $: editor;


    let blocksPanel: HTMLElement;

	$: blocksPanel;


    onMount(() => {

        document.addEventListener("open-blocks", () => {
            if(blocksPanel && blocksPanel.style)
                blocksPanel.style.left = "35px"
           
        })

        document.addEventListener("close-blocks", () => {
            if(blocksPanel && blocksPanel.style)
                blocksPanel.style.left = "-385px"
           
        })
        
    })
    

    
</script>


<div id="blocks" class="blocks-panel" bind:this={blocksPanel}>
</div>


<style>

</style>