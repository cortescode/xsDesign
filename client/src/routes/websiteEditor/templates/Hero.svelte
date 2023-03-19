<!-- ------------------------------------------ J S ------------------------------------------ -->
<script>

    export let title = 'Título';
    export let description = 'Descripción';
    export let buttonText = 'Llamada a la acción';
    //export let buttonUrl = '/';

    const input = document.getElementById('my-input');

</script>



<!-- ------------------------------------------ H T M L ------------------------------------------ -->
<section class="hero">
    <div class="hero-content">
        <textarea class="hero-title" name="" id="" cols="20" rows="3" bind:value={title}></textarea>
        <!-- <h1 class="hero-title">
            { title }
        </h1> -->

        <textarea class="hero-description" name="" id="" cols="20" rows="2" bind:value={description}></textarea>
        <!-- <p class="hero-description">
            { description }
        </p> -->

        <input class="white-button hero-button" type="text" bind:value={buttonText}>
        <!-- <a href="{buttonUrl}" class="white-button">
            { buttonText }
        </a> -->

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
        font-size: 42px;
        text-shadow: rgba(0, 10, 62, 0.8) 0 0 40px;
        margin: 20px 0;
    }
    .hero-description {
        max-width: 600px;
        font-size: 18px;
        margin: 20px 0 40px 0;
    }

    input {
        border: none;
        text-align: center;
        font-size: 16px;
        width: 800px;
        background-color: transparent;
        color: white;
    }
    input:active {
        border: 1px solid rgb(200, 200, 200);
    }

    textarea {
        border: none;
        text-align: center;
        width: 900px;
        background-color: transparent;
        color: white;
    }
    textarea:active {
        border: 1px solid rgb(200, 200, 200);
        
    }

    .hero-button {
        background-color: white;
        color:#070021;
    }

    .hero-button:active {
        transform: scale(1);

    }



    @media screen and (max-width: 767px) {
        .hero-content {
            text-align: left;
        }

        .hero-title {
            font-size: 32px;
        }
        

    }

</style>