<!-- ------------------------------------------ J S ------------------------------------------ -->
<script>
    import EditorHeader from "../../components/headers/EditorHeader.svelte"
    import PageArchitectureBanner from "./PageArchitectureBanner.svelte";

    import DragElement from "./DragElement.svelte";

    import HeaderTemplate from "./templates/Header.svelte";
    import HeroTemplate from "./templates/Hero.svelte";

    //import templates from "./templates/elementsMapping.js";

    import { onMount } from "svelte";
    import { element } from "svelte/internal";
    


    let available_templates = {
        'header': {
            'template': HeaderTemplate,
            'icon': '/media/assets/icons/brick.png',
        }, 
        'hero': {
            'template': HeroTemplate,
            'icon': '/media/assets/icons/brick.png',
        }, 
    }


    let new_elements_open = false;

    $: elements = [];

    function addElement (key) {
        let element = available_templates[key];
        elements = [...elements, { body: element.template, params: {} }];
    }

    function removeElement (index) {
        elements.splice(index, 1);
        elements = elements;
    }

    let isHovering = false;

    function handleMouseOver(element) {
        isHovering = true;
    }

    function handleMouseOut(element) {
        isHovering = false;
    }

</script>

<!-- ------------------------------------------ H T M L ------------------------------------------ -->
<EditorHeader></EditorHeader>
<div class="page-content">
    <div>
        {#if elements.length == 0}
            <h2>No content added (click + button to add)</h2>
        {/if}
        {#each elements as element, index}
            <div class="element">
                {#if typeof element === "string"}
                    {element}
                {:else}
                    <button class="white-button delete-button" on:click={() => {
                        removeElement(index)
                    }}>Delete</button>
                    <svelte:component class="" this={element.body} params={element.params} on:mouseover={handleMouseOver} on:mouseout={handleMouseOut}/>
                {/if}
            </div>
            
        {/each}
    </div>
</div>
<div id="add-section-banner" class="add-section-banner">
    {#if new_elements_open}
        <div class="sections">
            {#each Object.keys(available_templates) as key}
                <DragElement>
                    <button on:click={() => {
                        addElement(key)
                        new_elements_open = !new_elements_open
                    }}>
                        {key}
                    </button>
                </DragElement>
                
            {/each}
        </div>
    {/if}
    <button class="add-section-button" on:click={() => new_elements_open = !new_elements_open}>
        {#if new_elements_open}
            <img class="small-icon" src="/media/assets/icons/cross.svg" alt="">
        {:else}
            <img class="small-icon" src="/media/assets/icons/open.svg" alt="">
        {/if}
    </button>
</div>
<PageArchitectureBanner></PageArchitectureBanner>


<!-- ------------------------------------------ C S S ------------------------------------------ -->
<style>
    .page-content {
        width: calc(100% - 8px);
        border: 4px solid rgb(0, 213, 255);
        min-height: 120px;
        background-color: rgb(246, 246, 246);
    }

    .sections {
        display: flex;
        max-width: 800px;
        padding: 20px;
    }

    .sections button {
        width: 140px;
        height: 140px;
        background-color: gray;
        padding: 20px;
        margin: 20px;
    }

    .add-section-banner {
        display: grid;
        place-items: center;
        width: 100%;
        height: fit-content;

        position: fixed;
        inset: auto 0 0 0;
        z-index: 15;

        background-color: white;
    }
    
    .add-section-button {
        position: fixed;
        inset: auto auto 0 auto;
        border-radius: 50%;
        border: 2px solid rgb(0, 213, 255);
        width: 40px;
        height: 40px;
        transition: .2s;
    }

    .add-section-button:active {
        transform: scale(.9);
    }

    .element-selection-img {
        max-width: 100%;
    }
    
    .element {
        position: relative
    }


    .delete-button {
        position: absolute;
        inset: auto auto -10px auto;
        z-index: 10;
        box-shadow: rgba(25, 0, 50, 0.5) 0 0 10px;
    }
    .delete-button:active {
        transform: scale(1);
    }

</style>