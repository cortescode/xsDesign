<script lang="ts">
    import type { Template } from "$website/interfaces/Template";

    // Set template function -> setTemplate(template: Template)
    export let setTemplate: any;

    let templates: any[] = [
        {
            uid: "0",
            name: "Blank",
            image_url: "/media/templates/blank-page-template.webp",
        },
        {
            uid: "1",
            name: "Digital Marketing Agency",
            image_url: "/media/templates/marketing-agency-template.webp",
        },
        {
            uid: "2",
            name: "Fitness/Personal Trainer",
            image_url: "/media/templates/fitness-template.webp",
        },
        {
            uid: "3",
            name: "Mobile App",
            image_url: "/media/templates/mobile-app-template.webp",
        },
        {
            uid: "4",
            name: "Restaurant Basic",
            image_url: "/media/templates/restaurant-template.webp",
        }
    ];

    $: selectedTemplate = templates[0]
    function selectTemplate(template: Template) {
        selectedTemplate = template
        setTemplate(template)
    }

</script>

<section class="templates-wrapper">
    <div>
        <div class="selected-template animate">
            <div class="image-wrapper">
                <img src={selectedTemplate.image_url} alt="{selectedTemplate.name}" />
            </div>
            <p>Selected Template:</p>
            <h3>{selectedTemplate.name}</h3>
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
        box-sizing: border-box;
        width: 100%;
        padding: 20px;
        border-radius: 12px;
        background-color: white;
        height: 100%;
        max-height: 70vh;
        overflow: auto;
    }

    .all-templates-wrapper h3 {
        margin: 0;
        margin-bottom: 20px;
    }

    .templates {
        box-sizing: border-box;
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(240px, 46%));
        width: 100%;
        padding: 10px;
        gap: 20px;
        height: 100%;
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
        border-radius: 12px;
        font-size: 18px;
        color: inherit;
        padding: 5px 20px;
        text-align: center;
        color: white;
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
        border-radius: 12px;
        border: 2px solid var(--blue);
        width: 100%;
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
        outline: 2px solid var(--light-blue);
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
        font-size: 18px;
        color: var(--blue);
        margin: 8px 0 0 0;
        padding: 0 20px;
    }

    .template img {
        box-sizing: border-box;
        width: 420px;
        border-radius: 12px;
        transition: transform .1s ease-in;
    }
</style>