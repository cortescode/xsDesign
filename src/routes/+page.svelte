<script>
    import DefaultButton from '../components/buttons/DefaultButton.svelte';
    import Header from '../components/headers/Header.svelte';
    import FaQs from '../components/sales/FAQs.svelte';
    import Steps from '../components/sections/Steps.svelte'
    import CtaBanner from '../components/sales/CtaBanner.svelte';
    import MessageBanner from '../components/cards/MessageBanner.svelte';
    import PricingSection from '../components/sections/PricingSection.svelte';
    import CookiesBanner from '../components/pop-ups/CookiesBanner.svelte';
    import PopUp from '../components/pop-ups/PopUp.svelte';
    import Benefits from '../components/sections/Benefits.svelte';

    import { onMount } from "svelte";
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
    <h1 class="title gradient-text">Desarrollamos las webs de los negocios del futuro</h1>
    <!-- <h1 class="title">Obtén el sitio web que despege tu negocio.</h1> -->
    <p>Creamos tu web con superpoderes para que consigas <b>captar la atención de tu usuario, generarle confianza, y convertirlo en cliente</b>.</p>
    <DefaultButton text="Empieza ahora" action={() => {
        window.location.hash = ""; 
        window.location.hash = "#pricing"
        }}
    />
    <a href="#pricing">Ver características</a>
</section>


<section class="pain-point animate">
    <div>
        <img src="/media/assets/images/ecommerce.webp" alt="" srcset="">
    </div>
    <div>
        <h2 class="subtitle">Sabemos lo difícil que es conseguir visitas, <span class="gradient-color">y lo frustrante que es que abandonen antes de comprar</span></h2>
        <p>Necesitas una página web bonita, sí, pero no lo es todo, puedes tener una web increíblemente visual, y no vender absolutamente nada, por lo que nos centraremos en que tengas una página web orientada a la conversión.</p>
    </div>

</section>

<Steps></Steps>
<MessageBanner></MessageBanner>
<Benefits></Benefits>
<PricingSection id="pricing"></PricingSection>
<FaQs></FaQs>
<!-- <PopUp></PopUp> -->
<CookiesBanner></CookiesBanner>


<style>
    .hero {
        display: grid;
        place-items: center;
        gap: 20px;
        padding: 20px;
    }

    .pain-point {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 40px;
        margin: 60px auto;
        padding: 20px;
        max-width: 1150px;
    }

    .pain-point p {
        text-align: right;
    }

    .pain-point img {
        border-radius: 24px;
    }

    .message {
        background-color: rgb(0, 21, 62);
        color: white;
        padding: 10px 20px;
    }

    .message p {
        margin: 0;
        text-align: center;
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


    .subtitle {
        /* Create a gradient color for the text */
        font-size: 2em;
        max-width: 640px;
        text-align: right;
        margin-bottom: 0;
    }

    .gradient-color {
        background: radial-gradient(100% 100% at 100% 0, #5adaff 0, #5468ff 100%);
        /* Set the background size and repeat properties. */
        background-size: 200%;
        background-repeat: repeat;
        /* Use the text as a mask for the background. */
        /* This will show the gradient as a text color rather than element bg. */
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        /* Animate the background-position property tclass="button1ift the gradient. */
        animation: animate 10s linear infinite;
    }


    .hero p {
        font-size: 18px;
        max-width: 640px;
        text-align: center;
    }

    @media screen and (max-width: 900px) {
        .pain-point {
            grid-template-columns: 1fr;
            padding: 28px;
        }

        .title {
            font-size: 2em;
        }
    }


</style>