<!-- ------------------------------------------ J S ------------------------------------------ -->
<script>
    import { onMount } from 'svelte';

    import Header from '../components/headers/Header.svelte';
    import Hero from '../components/heros/Hero.svelte';
    import Testimonials from '../components/sections/Testimonials.svelte';
    import Portfolio from '../components/sections/Portfolio.svelte';
	import Cards from '../components/sections/Cards.svelte';
    import CtaBanner from '../components/sales/CtaBanner.svelte';

    import ServicesSection from '../components/sections/ServicesSection.svelte';
    import MessageBanner from '../components/cards/MessageBanner.svelte';

    import PopUp from '../components/pop-ups/PopUp.svelte';

    import { user, getSessionUserData } from "../lib/session";

    onMount(() => {
        getSessionUserData().then( (user_data) => user.set(user_data)).catch((error) => {
            console.log(error);
            user.set(null);
        })
	});



</script>

<!-- ------------------------------------------ H T M L ------------------------------------------ -->
<svelte:head>
    <title>Agencia de desarrollo web y marketing basado en datos | XS Design</title>
</svelte:head>
<!-- Header Section -->
<Header
    buttonLink = "https://calendly.com/xsdesign/videollamada-de-descubrimiento"
    buttonText = "Agendar llamada">
</Header>


<!-- Hero Section -->
<Hero
    title = "
        Diseñamos webs que convierten visitantes en clientes para tu negocio.
    "
    description = "
		Creamos páginas web profesionales, modernas y 
		optimizadas que te permiten aumentar tus ventas y reservas en el mundo online.
    "  
    buttonText = "
        Agenda una llamada de descrubrimiento
    "  
	buttonUrl = "https://calendly.com/xsdesign/videollamada-de-descubrimiento"
    videoUrl = "/media/herobg4.webm"
    videoCover = "/media/herobg4.webp"
>
</Hero>
<!-- Main Section -->
<main>
	<ServicesSection></ServicesSection>

    <MessageBanner></MessageBanner>

	<Cards></Cards>

    <Portfolio></Portfolio>

	<!-- <Steps></Steps> -->

    <Testimonials></Testimonials>
</main>

<!-- Cta Section -->
<CtaBanner
	title="Obtén la web que necesita tu negocio"
	description="
				Creamos la web de tu negocio y te entregamos las herramientas 
				necesarias para que tengas éxito en el mercado online. Contacta 
				con nuestro equipo y descubre cómo podemos ayudarte."
	ctaButtonText="Agenda una llamada de descubrimiento"
	ctaUrl="https://calendly.com/xsdesign/videollamada-de-descubrimiento"
></CtaBanner>

<PopUp />


<!-- ------------------------------------------ C S S ------------------------------------------ -->
<style>

</style>
