<script lang="ts">
    import { agency_template } from "$lib/designer/templates/sites/agency";
    import type { Template } from "$lib/interfaces/Template";

    // Set template function -> setTemplate(template: Template)
    export let setTemplate: any;

    export let templates: Template[] = [
        {
            uid: "0",
            name: "Agency",
            image_url: "/media/templates/agency-template.png",
            data: agency_template,
        },
        {
            uid: "1",
            name: "Blank",
            image_url: "/media/templates/agency-template.png",
            data: [],
        },
        {
            uid: "2",
            name: "Ejemplo",
            image_url: "/media/assets/landing.avif",
            data: agency_template,
        },
        {
            uid: "3",
            name: "Ejemplo",
            image_url: "/media/assets/landing.avif",
            data: agency_template,
        },
    ];

    $: selectedTemplate = templates[1]
    function selectTemplate(template: Template) {
        selectedTemplate = template
        setTemplate(template)
    }

</script>

<section class="templates-wrapper">
    <div>
        <div class="selected-template animate">
            <h3>Selected Template</h3>
            <div class="image-wrapper">
                <img src={selectedTemplate.image_url} alt="{selectedTemplate.name}" />
            </div>
            <p>{selectedTemplate.name}</p>
        </div>
    </div>
    
    <div class="all-templates-wrapper">
        <h3>All Templates</h3>
        <div class="templates">
            {#each templates as template}
                <button class="template {template===selectedTemplate? "active": ""}" on:click={ () => selectTemplate(template)}>
                    <img src={template.image_url} alt="" />
                    <p>{template.name}</p>
                </button>
            {/each}
        </div>
    </div>
    
</section>


<style>

    .templates-wrapper {
        box-sizing: border-box;
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 20px;
        place-items: center;
        padding: 0;
        width: 100%;
        max-width: 1600px;
        margin: 0;
        padding: 0;
    }

    .all-templates-wrapper {
        width: 100%;
        padding: 20px;
        border-radius: 24px;
        background-color: white;
    }

    .all-templates-wrapper h3 {
        margin: 0;
        margin-bottom: 20px;
    }

    .templates {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(140px, 30%));
        width: 100%;
        padding: 10px;
        gap: 20px;
        max-height: 50vh;
        overflow: auto;
    }

    .selected-template {
        box-sizing: border-box;
        padding: 20px;
        border-color: var(--blue);
        margin-bottom: 10px;
        width: 100%;
        height: 100%;
    }
    

    .selected-template p {
        background-color: white;
        border-radius: 12px;
        font-size: 18px;
        color: inherit;
        padding: 5px 20px;
        text-align: center;
    }

    .selected-template h3 {
        margin: 0 0 20px 0;
        color: var(--blue);
        background-color: white;
        border-radius: 12px;
        padding: 10px 20px;
        text-align: center;
    }

    .selected-template .image-wrapper {
        width: 100%;
        aspect-ratio: 16/9;
        overflow: hidden;
    }

    .selected-template img {
        box-sizing: border-box;
        width: 100%;
        border: 2px solid var(--blue);
        transition: transform .1s ease-in;
    }
    

    .template {
        box-sizing: border-box;
        display: grid;
        padding: 4px;
        background-color: white;
        border: none;
        border-radius: 12px;
        border-color: var(--blue);
        transition: .1s ease-in-out;
    }

    .template.active {
        outline: 2px solid var(--blue);
        background-color: var(--light-blue);
        box-shadow: 2px 2px 20px -10px var(--blue);
        /* grid-column: 1;
        grid-row: 1; */
    }
    .template:hover {
        background-color: var(--light-blue);
        box-shadow: 2px 2px 20px -10px var(--blue);
        cursor: pointer !important;
    }

    .template p {
        font-size: 22px;
        color: var(--blue);
        margin: 8px 0 0 0;
        padding: 0 20px;
    }

    .template img {
        box-sizing: border-box;
        width: 420px;
        border-radius: 8px;
        transition: transform .1s ease-in;
    }
</style>