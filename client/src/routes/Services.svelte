<!-- ------------------------------------------ J S ------------------------------------------ -->
<script>

    import Header from '../components/headers/Header.svelte';
    import Hero from '../components/heros/HeroApp.svelte';
    import Features from '../sections/Features.svelte';
    import ServicesSection from '../sections/ServicesSection.svelte';
    import CtaBanner from '../components/sales/CtaBanner.svelte';

    import { animate } from '../utils/animations/animate.js'

	import { onMount } from 'svelte';


	onMount(() => animate());
    
</script>

<!-- ------------------------------------------ H T M L ------------------------------------------ -->
<Header
	buttonLink = "/pricing"
	buttonText = "Precios"
></Header>
<Hero
        title = "
            Servicios enfocados en digitalizar el núcleo de tu negocio para que triunfes en la nueva era digital.
        "
        description = "
            Creamos estrategias, páginas webs y software a medida que te generan una ventaja competitiva enorme en 
            la nueva época digital en la que nos encontramos.
        "  
        button = "
            Ver servicios
        "  
        image = "/media/assets/images/websimage2.webp"
    >
    </Hero>
<main>
    <ServicesSection></ServicesSection>
</main>
<CtaBanner
    title="Aumentamos tu facturación, rentabilidad y calidad de vida."
    description="Estás a un solo paso de triunfar con tu negocio, agenda tu llamada y descubre cómo si podemos ayudarte."
    ctaButtonText="Realizar llamada de descubrimiento"
    ctaUrl="https://calendly.com/xsdesign/videollamada-de-descubrimiento"
></CtaBanner>



<!-- ------------------------------------------ C S S ------------------------------------------ -->
<style>

</style>