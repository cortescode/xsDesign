<script>
    import DefaultButton from '$lib/components/buttons/DefaultButton.svelte';
    import Header from '$lib/components/headers/Header.svelte';
    import { goto } from '$app/navigation';
</script>

<svelte:head>
    <title>La página que buscas no existe... | XS Design</title>
</svelte:head>

<Header
    buttonLink = "#pricing"
    buttonText = "Empieza ahora" 
/>
<section class="hero">
    <div>
        <h1 class="gradient-text">Error 404</h1>
        <h2 >La página que buscas parece no existir...</h2>
        <DefaultButton text="Ir a la página principal" action={() => {
                goto("/")
            }}
        />
    </div>
    <div>
        <img alt="error 404" src="/media/assets/images/ecommerce.webp" srcset="/media/assets/images/ecommerce.webp" />
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

    @media screen and (max-width: 900px) {

        h1 {
            font-size: 2.6em;
        }
        h2 {
            font-size: 1.8em;
        }
    }


</style>