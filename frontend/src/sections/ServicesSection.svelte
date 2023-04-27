<!-- ------------------------------------------ J S ------------------------------------------ -->
<script>
    import ServiceCard from '../components/cards/ServiceCard.svelte';
import WebCard from '../components/cards/WebCard.svelte';
</script>


<!-- ------------------------------------------ H T M L ------------------------------------------ -->
<section class="animate" id="services">
    <h1 class="right-title">Lo que necesita tu negocio, a un click de distancia.</h1>
    <div class="services">
        <ServiceCard
            iconUrl = "/media/assets/icons/ico-design.svg"
            title = "Diseño y optimización de páginas Web."
            description = "
                        Diseñamos webs profesionales y optimizadas que te permiten resaltar y posicionarte por encima de tu competencia."
            linkUrl="/agency/services/web-design"
        >
        </ServiceCard>
        <ServiceCard
            iconUrl = "/media/assets/icons/ico-dev.svg"
            title = "Creación y optimización de Tiendas Online"
            description = "Creamos tiendas online de alta conversión, preparadas para escalar. Empieza a facturar en cuestión de días."
            linkUrl="/agency/services/ecommerce-creation"
        >
        </ServiceCard>

        <ServiceCard
            iconUrl = "/media/assets/icons/ico-devsec.svg"
            title = "Posicionamiento SEO"
            description = "Posicionamos tu web en internet para que tus clientes, y los de tu competencia, te encuentren a tí."
            linkUrl="/agency/services/seo-positioning"
        >
        </ServiceCard>
        <ServiceCard
            iconUrl = "/media/assets/icons/ico-embedded.svg"
            title = "Desarrollo de Aplicaciones Web para startups"
            description = "Desarrollamos tu idea tecnológica (servicio full-stak), para emprendedores y startups que quieren disrumpir el mercado."
            linkUrl="/agency/services/web-development"
        >
        </ServiceCard>
        
    </div>
</section>


<!-- ------------------------------------------ C S S ------------------------------------------ -->
<style>
    .services {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 40px;
        width: fit-content;
        margin: 60px auto
    }
</style>