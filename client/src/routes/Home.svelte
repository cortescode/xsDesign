<!-- ------------------------------------------ J S ------------------------------------------ -->
<script>

    import Header from '../components/headers/Header.svelte';
    import Hero from '../components/heros/Hero.svelte';
    import Testimonials from '../components/sections/Testimonials.svelte';
    import Portfolio from '../components/sections/Portfolio.svelte';
	import Cards from '../components/sections/Cards.svelte';
	import PricingComponent from '../components/sales/PricingComponent.svelte';
    import CtaBanner from '../components/sales/CtaBanner.svelte';
    import Steps from '../components/sections/Steps.svelte';

</script>

<!-- ------------------------------------------ H T M L ------------------------------------------ -->
<!-- Header Section -->
<Header
	buttonLink = "/pricing"
	buttonText = "Precios"
></Header>

<!-- Hero Section -->
<Hero
    title = "
        Creamos páginas webs que convierten visitantes en clientes para tu negocio.
    "
    description = "
		Contamos con varios años de experiencia superando las expectativas 
		de nuestros clientes. Creamos páginas web profesionales, modernas y 
		optimizadas que te permiten aumentar tus ventas y reservas en el mundo online.
    "  
    buttonText = "
        Contratar servicio
    "  
	buttonUrl = "#pricing"
    videoUrl = "/media/herobg3.mp4"
>
</Hero>

<!-- Main Section -->
<main>
	<Cards></Cards>

	<Steps></Steps>
    <Portfolio></Portfolio>


    <Testimonials></Testimonials>
	<PricingComponent></PricingComponent>
</main>

<!-- Cta Section -->
<CtaBanner
	title="Obtén la web que necesita tu negocio"
	description="
				Creamos la web de tu negocio y te entregamos las herramientas 
				necesarias para que tengas éxito en el mercado online. Contacta 
				con nuestro equipo y descubre cómo podemos ayudarte."
	ctaButtonText="Contactar"
	ctaUrl="/contact"
></CtaBanner>

<!-- ------------------------------------------ C S S ------------------------------------------ -->
<style>

</style>
