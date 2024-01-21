<script>
    import DefaultButton from '$lib/components/buttons/DefaultButton.svelte';
    import Header from '$lib/components/headers/Header.svelte';
    import FaQs from '$lib/components/sales/FAQs.svelte';
    import Steps from '$lib/components/sections/Steps.svelte'
    import CtaBanner from '$lib/components/sales/CtaBanner.svelte';
    import MessageBanner from '$lib/components/cards/MessageBanner.svelte';
    import PricingSection from '$lib/components/sections/PricingSection.svelte';
    import CookiesBanner from '$lib/components/pop-ups/CookiesBanner.svelte';
    import PopUp from '$lib/components/pop-ups/PopUp.svelte';
    import Benefits from '$lib/components/sections/Benefits.svelte';
    import EditorHeader from '$lib/components/headers/EditorHeader.svelte';
    import HeaderApp from '$lib/components/headers/HeaderApp.svelte';
    import DashboardHeader from '$lib/components/headers/DashboardHeader.svelte';

    import { onMount } from "svelte";
    import { goto } from '$app/navigation';
    import ImageHero from '$lib/components/heros/ImageHero.svelte';

/* 
    export let data;

    onMount(() => {
        console.log(data)
    })
*/
    
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