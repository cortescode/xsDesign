<script>
    import DefaultButton from '$UI/buttons/DefaultButton.svelte';
    import { goto } from '$app/navigation';
    import HeaderApp from '$UI/headers/HeaderApp.svelte';
</script>

<svelte:head>
    <title>La página que buscas no existe... | XS Design</title>
</svelte:head>


<HeaderApp/>

<section class="hero">
    <div>
        <h1 class="gradient-text">Error 404</h1>
        <h2>The page you are looking for seems not to exists...</h2>
        <DefaultButton text="Go to home" action={() => {
                goto("/")
            }}
        />
    </div>
    <div>
        <img alt="error 404" src="/media/assets/error-page-image.png" srcset="/media/assets/error-page-image.png" />
    </div>
    
</section>


<style>
    .hero {
        display: grid;
        grid-template-columns: 1fr 1fr;
        place-items: center;
        gap: 20px;
        padding: 20px;
    }

    h1 {
        /* Create a gradient color for the text */
        /* background: linear-gradient(20deg, #4150d1, #27d2de); */
        font-size: 3.4em;
        max-width: 640px;
        margin-bottom: 0;
        font-style: italic;
    }

    h2 {
        font-size: 2em;
        max-width: 640px;
        margin-bottom: 40px;
    }

    img {
        width: 500px;
    }

    @media screen and (max-width: 900px) {

        h1 {
            font-size: 2.6em;
        }
        h2 {
            font-size: 1.8em;
        }
    }


</style>