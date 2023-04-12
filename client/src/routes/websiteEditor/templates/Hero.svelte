<!-- ------------------------------------------ J S ------------------------------------------ -->
<script>

    export let title = 'Título';
    export let description = 'Descripción';
    export let buttonText = 'Llamada a la acción';

    let buttonUrl = "/"
    //export let buttonUrl = '/';


    function setTitle(event){
        introduced_title = event.target.textContext;
    }

    function setDescription(event) {
        description = event.target.textContext;
    }

    function setButtonText(event){
        buttonText = event.target.textContext;
    }

</script>



<!-- ------------------------------------------ H T M L ------------------------------------------ -->
<section class="hero">
    <div class="hero-content">
        <h1 class="hero-title" contenteditable="true" on:input={setTitle}>{title}</h1>
        
        <!-- <textarea class="hero-description" name="" id="" cols="20" rows="2" bind:value={description}></textarea>
         -->
        <p class="hero-description" contenteditable="true" on:input={setDescription}>
            { description }
        </p>

        <a href="{buttonUrl}" class="white-button" contenteditable="true" on:input={setButtonText}>
            { buttonText }
        </a>

    </div>

    <div class="component-options">


    </div>
    
</section>



<!-- ------------------------------------------ C S S ------------------------------------------ -->
<style>
    .hero {
        margin: 0 auto;
        display: grid;
        grid-template-columns: 1fr;
        place-items: center;
        background: linear-gradient(60deg, #000000, #1d066f);
        background-size: cover;
        background-position: center;
        color: white;
        text-align: center;
        position: relative;
        padding: 100px 40px;
    }

    .hero-content {
        max-width: 900px;
        display: grid;
        place-items: center;
    }

    .hero-title {
        font-size: 84px;
    }

    h1, p {
        min-width: 100px;
        border: 1px solid rgba(214, 214, 214, 0.4);
    }

    a {
        min-width: 20px;
        border: 1px solid rgba(214, 214, 214, 0.4);
    }


    .hero-description {
        max-width: 600px;
        font-size: 18px;
        margin: 20px 0 40px 0;
    }


    @media screen and (max-width: 767px) {
        .hero-content {
            text-align: left;
        }

        

    }

</style>