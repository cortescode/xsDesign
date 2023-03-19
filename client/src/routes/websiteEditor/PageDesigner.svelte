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
        console.log(`key: ${key}`)
        let element = available_templates[key];
        elements = [...elements, { body: element.template, params: {} }];
    }

    function removeElement (index) {
        elements.splice(index, 1);
        elements = elements;
    }


    // DRAG AND DROP ELEMENT FUNCTIONS


    function handleDragStart(event, template_key) {
        event.dataTransfer.effectAllowed = 'move';
        console.log(template_key)
        event.dataTransfer.setData('text/plain', template_key);
    }


    function handleDragLeave(event) {
        let template_name = event.dataTransfer.getData('plain/text')
        console.log(template_name)
    }


    function handleDragOver(event) {
        event.preventDefault();
        event.dataTransfer.dropEffect = 'move';
        event.target.classList.add('dragover');
    }

    function handleDrop(event) {
        console.log("draggingDrop");
        event.preventDefault();
        new_elements_open = false;
        const template_name = event.dataTransfer.getData('text/plain');
        console.log(`template_name: ${template_name}`)
        console.log(template_name);
        addElement(template_name);
    }


    function handleDragEnd(event) {
        console.log("draggingEnd");
        draggedItem.classList.remove('dragging');
        draggedItem = null;
    }

    function getItemIndex(item) {
        console.log("gettingItemIndex");
        const listItems = Array.from(document.querySelectorAll('.item'));
        return listItems.indexOf(item);
    }


</script>

<!-- ------------------------------------------ H T M L ------------------------------------------ -->
<EditorHeader></EditorHeader>
<div class="page-content" draggable=true 
    on:dragover={handleDragOver}
    on:drop={handleDrop}
    on:dragleave={handleDragLeave}>
    {#if elements.length == 0}
        <h2>Drag and drop Some Element</h2>
    {/if}
    {#each elements as element, index}
        <div class="element">
            {#if typeof element === "string"}
                {element}
            {:else}
                <button class="white-button delete-button" on:click={() => {
                    removeElement(index)
                }}>Delete</button>
                <svelte:component class="" this={element.body} params={element.params}/>
            {/if}
        </div>
    {/each}
</div>
<div id="add-section-banner" class="add-section-banner">

    {#if new_elements_open}
        <div class="sections">
            {#each Object.keys(available_templates) as key}
                <!-- <DragElement>
                    <button on:click={() => {
                        addElement(key)
                        new_elements_open = !new_elements_open
                    }}>
                        {key}
                    </button>
                </DragElement> -->
                <div class="element-template" data-template={key}
                    draggable="true"
                    on:dragstart={(event) => handleDragStart(event, key)}
                >
                    <h1>{key}</h1>
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
<PageArchitectureBanner></PageArchitectureBanner>


<!-- ------------------------------------------ C S S ------------------------------------------ -->
<style>
    .page-content {
        width: calc(100% - 8px);
        border: 4px solid rgb(0, 213, 255);
        min-height: 120px;
        background-color: rgb(246, 246, 246);
    }

    .page-content h2 {
        text-align: center;
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
        border: 2px solid rgb(0, 213, 255);

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
        position: relative;
    }

    .element-template {
        padding: 10px;
        margin: 10px;
        display: grid;
        place-items: center;
        width: 200px;
        height: 100px;
        text-align: center;
        background-color: gray;
        border-radius: 24px;
    }

    .element:hover {
        border: 2px solid rgb(0, 213, 255);
    }

    .element:hover .delete-button {
        display: block;
    }

    .delete-button {
        display: none;
        position: absolute;
        inset: auto auto -10px auto;
        z-index: 10;
        box-shadow: rgba(25, 0, 50, 0.5) 0 0 10px;
    }
    .delete-button:active {
        transform: scale(1);
    }

</style>