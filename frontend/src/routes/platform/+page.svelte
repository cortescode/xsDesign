<!-- ------------------------------------------ J S ------------------------------------------ -->
<script>

    import Header from '../../components/headers/Header.svelte';
    import Hero from '../../components/heros/HeroApp.svelte';
    import Features from '../../components/sections/Features.svelte';
    import CtaBanner from '../../components/sales/CtaBanner.svelte';

    import HeaderApp from '../../components/headers/HeaderApp.svelte';
</script>

<!-- ------------------------------------------ H T M L ------------------------------------------ -->
<svelte:head>
    <title>Crea tu landing page optimizada en cuestión minutos | XS Design</title>
</svelte:head>

<div class="page-container">
    <HeaderApp></HeaderApp>
    <Hero
            title = "
            Desarrolla landing pages profesionales en cuestión de minutos
            "
            description = "
                Registrate ahora y obtén acceso a la fase Alpha del producto 
                y a 3 mes gratis en su lanzamiento.
            "  
            button = "
                Obtener acceso anticipado (fase Alpha)
            "  
        >
    </Hero>
    <main>
        <Features></Features>
    </main>
</div>
<!-- 
<CtaBanner
    title="Registrate ahora y accede a la beta privada."
    description="¿Eres un early adopter? ¡Te estamos buscando!"
    ctaButtonText="Registrate gratis"
    ctaUrl="/auth/signup"
></CtaBanner>
 -->


<!-- ------------------------------------------ C S S ------------------------------------------ -->
<style>
    .page-container {
        background-image: linear-gradient(90deg,rgba(30, 6, 50, 0.7), rgba(4, 10, 46, 0.7)), url("/media/assets/images/landing-background.jpg");
        background-position: center;
        background-size: cover;
    }
</style>