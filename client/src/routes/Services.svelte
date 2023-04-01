<!-- ------------------------------------------ J S ------------------------------------------ -->
<script>

    import Header from '../components/headers/Header.svelte';
    import Hero from '../components/heros/HeroApp.svelte';
    import Features from '../sections/Features.svelte';
    import CtaBanner from '../components/sales/CtaBanner.svelte';

    import { animate } from '../utils/animations/animate.js'

	import { onMount } from 'svelte';


	onMount(() => animate());
    
</script>

<!-- ------------------------------------------ H T M L ------------------------------------------ -->
<Header
	buttonLink = "/auth/signup"
	buttonText = "Registrarse"
></Header>
<Hero
        title = "
            Servicios enfocados en digitalizar el núcleo de tu negocio para que puedas competir 
            y triunfar en tu sector.
        "
        description = "
            Creamos estrategias y software a medida que te generan una ventaja competitiva enorme en 
            la nueva época digital en la que nos encontramos.
        "  
        button = "
            Ver servicios.
        "  
        videoUrl = "/media/herobg2.mp4"
    >
    </Hero>
<main>
    <Features></Features>
</main>
<CtaBanner
    title="Mejoramos la experiencia digital de tus clientes. Posicionamos tu negocio en internet. Reducimos tus costes"
    description="Estás a un solo paso de triunfar tu negocio"
    ctaButtonText="Contáctanos ahora"
    ctaUrl="/auth/signup"
></CtaBanner>



<!-- ------------------------------------------ C S S ------------------------------------------ -->
<style>

</style>