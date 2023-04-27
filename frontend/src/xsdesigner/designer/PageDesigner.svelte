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
    

    // Ads a template from available_templates to the page
    // @param key: identifies the available template (ej: 'header')
    // @param position: identifies the position where the template will be added into elements array
    function addElement (key, position) {
        console.log("key", key)
        let element = available_templates[key];

        // If position is undefined template is added to the end of the elements array
        if (position == undefined) {
            elements = [...elements, { body: element.template, params: {} }];
            return;
        }

        let elements_before = elements.slice(0, position);
        let elements_after = elements.slice(position);
        
        elements = [
            ...elements_before, 
            { body: element.template, params: {} },
            ...elements_after
        ];

    }

    // Deletes the template element at the position value
    // @param position: identifies the position of the templates inside elements array
    function removeElement (position) {
        elements.splice(position, 1);
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

    function handleDrag(event) {
        const offsetX = event.clientX - event.target.clientWidth / 2;
        const offsetY = event.clientY - event.target.clientHeight / 2;
    }


    function handleDragOver(event) {
        event.preventDefault();
        event.dataTransfer.dropEffect = 'move';
    }

    function handleDrop(event, index) {
        event.preventDefault();
        console.log("Component Drop")
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
            <button class="add-section-button" on:click={() => new_elements_open = !new_elements_open}>
                {#if new_elements_open}
                    <img class="small-icon" src="/media/assets/icons/cross.svg" alt="">
                {:else}
                    <img class="small-icon" src="/media/assets/icons/open.svg" alt="">
                {/if}
            </button>
            {#if new_elements_open}
                <div class="sections">
                    <p class="section-titles">Elementos disponibles</p>
                    <div class="sections-list">
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
                    
                </div>
            {/if}
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
        height: calc(100vh - 52px);
        display: grid;
        grid-template-columns: auto 1fr;
    }


    /* PAGE CONTENT */

    .page-content {
        width: calc(100% - 8px);
        border: 2px solid white;
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
        grid-template-columns: auto auto;
        place-items: center;
        width: fit-content;
        height: 100%;

        inset: auto 0 0 0;
        z-index: 5;
        background-color: rgb(95, 95, 95);
        overflow: hidden;
    }
    
    .add-section-button {
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
        width: 240px;
        height: 100%;
        padding: 0;
        border-left: 2px solid rgb(50, 50, 50);
        border-right: 2px solid rgb(50, 50, 50);
        overflow-x: hidden;
        overflow-y: auto;
        scroll-snap-align: end;
        background-color: rgb(70, 70, 70);
        color: white;
    }

    .section-titles {
        margin: 10px;
    }

    .sections-list {
        display: grid;
        grid-template-columns: 1fr 1fr;

    }
    


    .element-template {
        padding: 0;
        margin: 0;
        display: grid;
        place-items: center;
        height: fit-content;
        border: 1px solid rgb(160, 160, 160);
        gap: 20px;
        width: 100%;
        height: auto;
        background-color: rgb(80, 80, 80);
    }

    .element-image {
        max-height: 100%;
        max-width: 100%;
        margin-bottom: 20px;
    }


</style>