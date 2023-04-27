<!-- ------------------------------------------ J S ------------------------------------------ -->
<script>

    import Header from '../components/headers/Header.svelte';
    import Hero from '../components/heros/Hero.svelte';
    import Testimonials from '../sections/Testimonials.svelte';
    import Portfolio from '../sections/Portfolio.svelte';
	import Cards from '../sections/Cards.svelte';
    import CtaBanner from '../components/sales/CtaBanner.svelte';

    import { onMount } from 'svelte';
    import ServicesSection from '../sections/ServicesSection.svelte';
    import MessageBanner from '../components/cards/messageBanner.svelte';


</script>

<!-- ------------------------------------------ H T M L ------------------------------------------ -->

<!-- Header Section -->
<Header
    buttonLink = "https://calendly.com/xsdesign/videollamada-de-descubrimiento"
    buttonText = "Agendar llamada">
</Header>


<!-- Hero Section -->
<Hero
    title = "
        Diseñamos páginas webs que convierten visitantes en clientes para tu negocio.
    "
    description = "
		Creamos páginas web profesionales, modernas y 
		optimizadas que te permiten aumentar tus ventas y reservas en el mundo online.
    "  
    buttonText = "
        Agenda una llamada de descrubrimiento
    "  
	buttonUrl = "#pricing"
    videoUrl = "/media/herobg3.mp4"
>
</Hero>
<!-- Main Section -->
<main>
	<Cards></Cards>

    <MessageBanner></MessageBanner>

	<ServicesSection></ServicesSection>

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

<!-- ------------------------------------------ C S S ------------------------------------------ -->
<style>

</style>
