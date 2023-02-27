<!-- ------------------------------------------ J S ------------------------------------------ -->
<script>
    import ServiceCard from "../cards/ServiceCard.svelte";

</script>


<!-- ------------------------------------------ H T M L ------------------------------------------ -->
<section id="pricing">
    <h1>Descubre nuestros paquetes de desarrollo web</h1>
    <p>¿No sabes qué web necesita tu negocio o buscas otras características? <br/> <a class="text-link" href="/contact">Contacta con nuestro equipo</a>.</p>
    <div class="flex-columns">
        <ServiceCard
        iconUrl = "/media/assets/icons/brick.png"
        title = "Sitio web moderno y profesional"
        description = "Página web moderna y optimizada para posicionarte en Internet, ideal para dar tus primeros pasos con buen pie en el mercado digital."
        price = "295 €"
        caracteristics = {["Diseño altamente optimizado", "Posicionamiento SEO", "Hasta 5 páginas", "formulario de contacto", "Análisis de visitas y clicks"]}
        linkUrl = "https://buy.stripe.com/8wM8AC2UjaRc5La3cc"
        linkText = "Adquirir"
        >
        </ServiceCard>

        <ServiceCard
            iconUrl = "/media/assets/icons/brick.png"
            title = "Web profesional con Blog incluido"
            description = "Web profesional fácilmente administrable para que obtengas visibilidad en el mercado online."
            price = "495 €"
            caracteristics = {["Todo lo anterior +", "Blog optimizado para SEO", "Páginas ilimitadas","Múltiples formularios", "Login de usuarios",]}
            linkUrl = "https://buy.stripe.com/7sIbMO66vgbw2yY3cd"
            linkText = "Adquirir"
        >
        </ServiceCard>

        <ServiceCard
            iconUrl = "/media/assets/icons/brick.png"
            title = "Tienda online de alta conversión"
            description = "Tienda online de alta conversión que te permita escalar tus ventas de forma online aún con la alta competencia actual."
            price = "895 €"
            caracteristics = {["Todo lo anterior +", "Tienda online integrada", "Sistema de email marketing", "Pruebas A/B"]}
            linkUrl = "https://buy.stripe.com/9AQ5oq7az8J4gpO9AC"
            linkText = "Adquirir"
        >
        </ServiceCard>
    </div>
</section> 

<!-- ------------------------------------------ C S S ------------------------------------------ -->
<style>

</style>
