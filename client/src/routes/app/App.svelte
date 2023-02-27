<!-- ------------------------------------------ J S ------------------------------------------ -->
<script>

    import Header from '../../components/headers/Header.svelte';
    import Hero from '../../components/heros/HeroApp.svelte';
    import Features from '../../components/sections/Features.svelte';
    import CtaBanner from '../../components/sales/CtaBanner.svelte';
    
</script>

<!-- ------------------------------------------ H T M L ------------------------------------------ -->
<Header
	buttonLink = "/auth/signup"
	buttonText = "Registrarse"
></Header>
<Hero
        title = "
            Estamos desarrollando una nueva plataforma de creación y 
            administración de Páginas Webs apoyadas en I.A.
        "
        description = "
            Registrate ahora y obtén acceso a la beta del producto 
            y a 1 mes gratis en su lanzamiento. Desliza y descrubre 
            cómo pretendemos revolucionar la forma en la que administras 
            la web de tu negocio.
        "  
        button = "
            Obtener acceso anticipado
        "  
        videoUrl = "/media/herobg2.mp4"
    >
    </Hero>
<main>
    <Features></Features>
</main>
<CtaBanner
    title="Registrate ahora y accede a la beta privada."
    description="¿Eres un early adopter? ¡Te estamos buscando!"
    ctaButtonText="Registrate gratis"
    ctaUrl="/auth/signup"
></CtaBanner>



<!-- ------------------------------------------ C S S ------------------------------------------ -->
<style>

</style>