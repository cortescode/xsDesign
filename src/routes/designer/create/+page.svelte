<script lang="ts">
    import Logo from "$lib/components/Logo.svelte";
    import { onMount } from 'svelte';
/* 
    let selectedTemplate = null;

    // Example template data
    const templates = [
        { id: 'template1', name: 'Template 1', image: '/media/assets/landing.avif' },
        { id: 'template2', name: 'Template 2', image: '/media/assets/landing.avif' },
        { id: 'template3', name: 'Template 3', image: '/media/assets/landing.avif' }
    ];

    // Function to handle template selection
    function handleTemplateSelection(templateId) {
        selectedTemplate = templateId;
    }

    onMount(() => {
        // Set the initial selected template (you can customize this)
        selectedTemplate = templates[0].id;
    });
     */
</script>

<div class="wrapper">
    <div class="logo-wrapper">
        <Logo></Logo>
    </div>
    
    <form method="post">
            <div class="animate">
                <div class="back-button-wrapper">
                    <a href="/designer"> 
                        <svg width="20" height="20" viewBox="0 0 20 20">
                            <path d="M8.388,10.049l4.76-4.873c0.303-0.31,0.297-0.804-0.012-1.105c-0.309-0.304-0.803-0.293-1.105,0.012L6.726,9.516c-0.303,0.31-0.296,0.805,0.012,1.105l5.433,5.307c0.152,0.148,0.35,0.223,0.547,0.223c0.203,0,0.406-0.08,0.559-0.236c0.303-0.309,0.295-0.803-0.012-1.104L8.388,10.049z"></path>
                        </svg>   
                        Back 
                    </a>
                </div>
                <h1>Create your webpage</h1>
                <label for="name">Enter the name of your website:</label>
                <input type="text" id="name" name="name" placeholder="name">
                <label for="description">Enter a brief description for your site:</label>
                <input type="text" id="description" name="description" placeholder="description">
            </div><!-- 
            <img src="/media/assets/images/earth.png" class="animate" alt="" srcset="/media/assets/landing.avif"> -->
        
        <div class="button-wrapper">
            <input class="designer-button" type="submit" value="+ Create">
        </div>
    </form>
</div>

<style>

    .back-button-wrapper {
        width: fit-content;
        height: fit-content;
        color: var(--dark);
        fill: var(--dark);
    }

    .back-button-wrapper a {
        display: grid;
        grid-template-columns: auto 1fr;
        align-items: center;
        gap: 20px;
        font-size: 18px;
        text-align: left;
        padding: 6px 18px 6px 12px;
        border-radius: 12px;
        margin-bottom: 40px;
        border: 1px solid var(--blue)
    }

    .back-button-wrapper a:hover {
        background-color: white;
    }

    .back-button-wrapper svg {
        transition: padding .1s ease-in;
    }
    .back-button-wrapper:hover svg {
        padding-right: 20px;
    }

    .wrapper {
        background: linear-gradient(160deg, white, #DAD4FD);
        padding-top: 120px !important;
        padding: 10px;
        display: grid;
        align-items: flex-start;
        justify-items: center;
        height: calc( 100vh - 90px );
    }

    .logo-wrapper {
        max-width: 100%;
        position: fixed;
        inset: 10px auto auto auto;
    }

    section {
        display: grid !important;
        place-items: center;
    }
    

    form {
        max-width: 1050px;
    }

    form * {
        display: block;
        margin: 10px 0;
    }

    .two-columns  h1 {
        max-width: 320px;
    }

    form label {
        margin-top: 20px;
    }

    input {
        padding: 10px 20px;
        border-radius: 12px;
        border: 2px solid var(--blue);
        width: calc(100% - 36px);
        font-size: 18px;
    }


    form input[type="submit"] {
        cursor: pointer;
        width: fit-content;
    }


    img {
        width: 600px;
        border-radius: 12px;
    }

    .button-wrapper {
        display: grid;
        place-items: center;
    }

    .button-wrapper input {
        font-family: "Comfortaa";
        padding: 10px 20px;
        font-size: 22px;
        margin-top: 40px;
    }

</style>



<!-- 
        <section>
            <h1>Choose your template</h1>

            <div class="templates">
                {#each templates as template (template.id)}
                    <article on:click={() => handleTemplateSelection(template.id)} class:active = {selectedTemplate == template.id}>
                        <img src={template.image} alt={template.name}>
                        <p>{template.name}</p>
                    </article>
                {/each}
            </div>
            <p>We are working to bring you more templates! </p>
        </section>
 -->


 <!-- 
        /* Your existing styles */
/* 
    .templates {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 20px;
    }
    .templates article {
        cursor: pointer;
        height: 260px;
        border-radius: 8px;
        background-color: white;
        padding: 10px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .templates img {
        max-width: 100%;
        border-radius: 8px;
        cursor: pointer;
    }

    .templates p {
        margin-top: 8px;
        cursor: pointer;
    }

    .templates article[selected='true'] {
        outline: 2px solid var(--dark);
    }

    .active {
        outline: 2px solid var(--blue);
    }
 */
  -->