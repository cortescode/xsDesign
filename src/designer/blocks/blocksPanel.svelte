<script lang="ts">
    import { obl } from "$designer/consts";
    import type { Editor } from "grapesjs";
    import { onMount } from "svelte";


    export let editor: Editor;

    $: editor;


    let blocksPanel: HTMLElement;

	$: blocksPanel;

    $: listenersReady = false;


    onMount(() => {

        document.addEventListener("open-blocks", () => {
            if(blocksPanel && blocksPanel.style)
                blocksPanel.style.left = "35px"

            if(!listenersReady){
                const categories = editor?.BlockManager.getCategories();
                    // Close all categories except the one that was just opened
                categories?.each((category) => {
                    category.set('open', false);
                });

                /* editor?.on('block:category:open', (openedCategory) => {
                    // Get all block categories
                    console.log("open")

                    // Close all categories except the one that was just opened
                    categories?.each((category) => {
                        if (category !== openedCategory) {
                            category.set('open', false);
                        }
                    });
                }); */

                listenersReady = true
        
            }
           
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