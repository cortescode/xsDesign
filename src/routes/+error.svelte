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

/* 
    export let data;

    onMount(() => {
        console.log(data)
    })
*/
    
</script>

<svelte:head>
    <title>Obtén la web que revolucione la imagen de tu negocio | XS Design</title>
    <meta name="description" content="Obtén el sitio web que despege tu negocio. Creamos las webs de los negocios del futuro." />
</svelte:head>



<!-- <div class="message">
    <p>En breves subimos precios. Y cuando los subimos... ya no hay marcha atrás. ¡Aprovecha ahora!</p>
</div> -->
<Header
    buttonLink = "#pricing"
    buttonText = "Empieza ahora" 
/>

<!-- https://calendly.com/xsdesign/videollamada-de-descubrimiento -->


<!-- Hero Section -->

<section class="hero">
    <h1 class="title gradient-text">La página que buscas parece no existir...</h1>
    <!-- <h1 class="title">Obtén el sitio web que despege tu negocio.</h1> -->
    <DefaultButton text="Ir a la página principal" action={() => {
        goto("/")
    }}/>
</section>




<style>
    .hero {
        display: grid;
        place-items: center;
        gap: 20px;
        padding: 20px;
    }

    .title {
        /* Create a gradient color for the text */
        /* background: linear-gradient(20deg, #4150d1, #27d2de); */
        font-size: 3.4em;
        /* Animate the background-position property tclass="button1ift the gradient. */
        animation: animate 10s linear infinite;
        max-width: 640px;
        text-align: center;
        margin-bottom: 0;
    }


    @media screen and (max-width: 900px) {

        .title {
            font-size: 2em;
        }
    }


</style>