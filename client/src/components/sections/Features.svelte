<!-- ------------------------------------------ J S ------------------------------------------ -->
<script>
    import FeatureCard from '../cards/FeatureCard.svelte'
</script>


<!-- ------------------------------------------ H T M L ------------------------------------------ -->
<section class="normal-section features">
    <h1 class="right-title">Funcionalidades pensadas para impulsar tu negocio</h1>
    <div class="flex-columns">
        <FeatureCard
            iconUrl = "/media/assets/icons/brick.png"
            title = "Diseño impecable por defecto"
            description = "Tenemos plantillas listas para usar para varios modelos de negocio"
        >
        </FeatureCard>
        <FeatureCard
            iconUrl = "/media/assets/icons/lightbulb.png"
            title = "+ Productividad con I.A."
            description = "Integramos la inteligencia artificial de chatGpt en nuestros procesos para aumentar tu productividad a la hora de escribir textos para tu web o tus clientes"
        >
        </FeatureCard>
        <FeatureCard
            iconUrl = "/media/assets/icons/clients.png"
            title = "Genera + leads para tu negocio"
            description = "Generamos más leads para tu negocio gracias a pruebas A/B y nuestras webs optimizadas para conversión"
        >
        </FeatureCard>
        <FeatureCard
            iconUrl = "/media/assets/icons/funnel.png"
            title = "Valida tu idea con funnels prediseñados simples y eficaces"
            description = "Te entregamos un funnel listo e ideal para que tengas tu idea en el mercado en cuestión de minutos para que puedas validarla lo antes posible"
        >
        </FeatureCard>
    </div>
</section>


<!-- ------------------------------------------ C S S ------------------------------------------ -->
<style>

</style>