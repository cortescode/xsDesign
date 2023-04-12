<!-- ------------------------------------------ J S ------------------------------------------ -->
<script>
    import EditorHeader from "../../components/headers/EditorHeader.svelte"
    import PageArchitectureBanner from "./PageArchitectureBanner.svelte";

    // import DragElement from "./DragElement.svelte";

    import HeaderTemplate from "./templates/Header.svelte";
    import HeroTemplate from "./templates/Hero.svelte";

    //import templates from "./templates/elementsMapping.js";

    import { onMount } from "svelte";
    import { element } from "svelte/internal";

    let hovering_element_index;

    let available_templates = {
        'header': {
            'template': HeaderTemplate,
            'image': '/media/components/header.png',
            'attributes': {

            }
        }, 
        'hero': {
            'template': HeroTemplate,
            'image': '/media/components/hero.png',
            'attributes': {
                
            }
        },
    }


    let new_elements_open = false;


    $: temporary_element = null;

    $: elements = [];
    

    function addElement (key, position) {
        console.log("key", key)
        let element = available_templates[key];

        if (position == undefined) {
            elements = [...elements, { body: element.template, params: {} }];
            return;
        }

        let elements_before = elements.slice(0, position);
        let elements_after = elements.slice(position);

        console.log(position);
        elements = [
            ...elements_before, 
            { body: element.template, params: {} },
            ...elements_after
        ];

    }

    function removeElement (index) {
        elements.splice(index, 1);
        elements = elements;
    }



    // DRAG AND DROP ELEMENT FUNCTIONS

    function handleDragStart(event, template_key) {
        event.dataTransfer.effectAllowed = 'move';
        event.dataTransfer.setData('text/plain', template_key);
        let dragged_element = event.target.cloneNode(true);
        dragged_element.style.opacity = 1;

        let x_position = dragged_element.offsetWidth / 2;
        event.dataTransfer.setDragImage(dragged_element, x_position, 0);
        console.log(event.target);
    
    }

/* 
    function handleDragLeave(event) {
    }
 */


    // DRAG AND DROP FUNCTIONS ADDED TO THE PAGE CONTAINER


    function handleDragOver(event) {
        event.preventDefault();
        event.dataTransfer.dropEffect = 'move';
    }

    function handleDrop(event, index) {
        event.preventDefault();
        console.log("Component Drag Over")
        console.log(index)
        const template_name = event.dataTransfer.getData('text/plain');
        addElement(template_name, index);
    }



    function savePage() {

    }


</script>

<!-- ------------------------------------------ H T M L ------------------------------------------ -->
<div class="editor-page">
    <EditorHeader></EditorHeader>

    <div class="editor-container">
        <div id="add-section-banner" class="add-section-banner">
            {#if new_elements_open}
                <div class="sections">
                    {#each Object.keys(available_templates) as key}
                        <div class="element-template" data-template={key}
                            draggable="true"
                            on:dragstart={(event) => handleDragStart(event, key)}
                        >
                            <img class="element-image" src="{available_templates[key]["image"]}" alt="">
                            <span>{key}</span>
                        </div>
                        
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

        <div class="page-content" draggable=true >
            <!-- on:dragleave={handleDragLeave} -->
            {#each elements as element, index}
                <div class="element" 
                    on:drop={(event) => handleDrop(event, index)}
                    on:dragover={handleDragOver}
                    >
                    {#if typeof element === "string"}
                        {element}
                    {:else}
                        <button class="white-button delete-button" on:click={() => {
                            removeElement(index)
                        }}>Delete</button>
                        <svelte:component class="" 
                            this={element.body} 
                            params={element.params}
                            />
                    {/if}
                </div>
            {/each}
            <div class="default-droppable-element"
                on:drop={(event) => handleDrop(event)}
                on:dragover={handleDragOver}
                >
                <h2>Drag and drop Some Element</h2>
            </div>
        </div>
    </div>
</div>
<PageArchitectureBanner></PageArchitectureBanner>


<!-- ------------------------------------------ C S S ------------------------------------------ -->
<style>

    .editor-page {
        display: grid;
        grid-template: auto 1fr / 1fr;
        height: 100vh;
        width: 100%;
    }

    .editor-container {
        height: calc(100vh - 44px);
        display: grid;
        grid-template-columns: auto 1fr;
    }


    /* PAGE CONTENT */

    .page-content {
        width: calc(100% - 8px);
        border: 2px solid var(--blue);
        min-height: 120px;
        position: relative;
        overflow: auto;
        height: calc(100% - 4px);
        overflow-y: auto;
    }

    .page-content h2 {
        text-align: center;
    }


    .default-droppable-element {
        background-color: rgb(246, 246, 246);
        width: 100%;
        height: max-content;
    }

    .default-droppable-element h2 {
        margin: 0;
        margin-block: 0;
        padding: 20px;
    }
    
    .element {
        position: relative;
    }

    .element:hover {
        border: 2px solid var(--blue);
    }

    .element:hover .delete-button {
        display: block;
    }

    .delete-button {
        display: none;
        position: absolute;
        inset: auto auto -10px auto;
        z-index: 4;
        box-shadow: rgba(25, 0, 50, 0.5) 0 0 10px;
    }
    .delete-button:active {
        transform: scale(1);
    }



    /* ELEMENTS BANNER */

    .add-section-banner {
        display: grid;
        place-items: center;
        width: fit-content;
        height: calc(100% - 4px);

        inset: auto 0 0 0;
        z-index: 5;
        border: 2px solid var(--blue);
        background-color: white;
        overflow: hidden;
    }
    
    
    .add-section-button {
        position: fixed;
        inset: auto auto auto 0;
        border-radius: 50%;
        border: 2px solid var(--blue);
        width: 40px;
        height: 40px;
        transition: .2s;
    }

    .add-section-button:active {
        transform: scale(.9);
    }


    .sections {
        display: block;
        width: 280px;
        height: fit-content;
        padding: 20px;
        overflow-x: hidden;
        overflow-y: auto;
        scroll-snap-align: end;
    }


    .element-template {
        padding: 10px;
        margin: 10px;
        display: grid;
        place-items: center;
        height: fit-content;
        width: 100%;
        padding: 20px;
        background-color: rgb(208, 224, 255);
    }

    .element-image {
        max-height: 100%;
        max-width: 220px;
        margin-bottom: 20px;
    }


</style>