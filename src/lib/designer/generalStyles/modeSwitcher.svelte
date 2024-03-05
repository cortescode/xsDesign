<script lang="ts">
    import { selectStylesOption } from "$lib/designer/generalStyles/options";
    import type { Editor } from "grapesjs";
    import { onMount } from "svelte";
    import { writable } from "svelte/store";

    export let editor: Editor;
    let basicButton;
    let advancedButton;

    const options = {
        BASIC: "basic",
        ADVANCED: "advanced"
    }


    const selected = writable(options.BASIC)

    $: selected;

    function setOption(option: string) {
        $selected = option
        selectStylesOption(editor, option);
    }

</script>



<article class="switcher">
    <button class='switcher-button { $selected === options.BASIC ? "active": "" }'
        bind:this={basicButton}
        on:click={() => setOption(options.BASIC)}
        >
        Basic
    </button>
    <button class='switcher-button { $selected === options.ADVANCED ? "active": "" }' 
        bind:this={advancedButton}
        on:click={() => setOption(options.ADVANCED)}
        >
        Advanced
    </button>
</article>


<style>
    .switcher {
        position: fixed;
        display: grid;
        box-sizing: border-box;
        margin: 0 20px;
        grid-template-columns: 1fr 1fr;
        justify-content: center;
        gap: 10px;
        right: 0px;
        top: 120px;
        padding: 2px;
        height: 30px;
        border-radius: 12px;
        background-color: var(--light-blue);
        z-index: 2;
        width: calc(var(--gjs-left-width) - 40px);
    }

    .switcher-button {
        border-radius: 12px;
        border: none;
        background-color: rgba(255, 255, 255, 0);
        color: var(--blue);
        padding: 0 8px;
        font-size: 12px;
        height: 100%;
    }

    .switcher-button.active {
        border-radius: 12px;
        background-color: var(--blue);
        color: white;
    }
</style>