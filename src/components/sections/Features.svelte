<!-- ------------------------------------------ J S ------------------------------------------ -->
<script>
    import FeatureCard from '../cards/FeatureCard.svelte'
</script>


<!-- ------------------------------------------ H T M L ------------------------------------------ -->
<section class="normal-section features animate">
    <h1 class="right-title white-title">Funcionalidades pensadas para impulsar tu negocio</h1>
    <div class="flex-columns">
        <FeatureCard
            iconUrl = "/media/assets/icons/brick.png"
            title = "Diseño impecable por defecto"
            description = "Tenemos plantillas listas para usar para varios modelos de negocio. Ten una web impresionante lista para que la uses."
        >
        </FeatureCard>
        <FeatureCard
            iconUrl = "/media/assets/icons/clients.png"
            title = "Obtén datos de las acciones que toman tus usuarios en la web"
            description = "Esto te permite ver qué estas haciendo bien (y qué mal). Lo que no se mide no se puede mejorar."
        >
        </FeatureCard>
        <FeatureCard
            iconUrl = "/media/assets/icons/lightbulb.png"
            title = "Escribte tus textos con la ayuda y consejo de ChatGPT."
            description = "Integramos la inteligencia artificial de chatGpt en nuestro producto para aumentar tu productividad a la hora de escribir textos para tu web o la de tus clientes"
        >
        </FeatureCard>
        <FeatureCard
            iconUrl = "/media/assets/icons/funnel.png"
            title = "Funnels prediseñados que venden"
            description = "Te entregamos un funnel listo e ideal para que tengas tu idea en el mercado en cuestión de minutos para que puedas validarla lo antes posible"
        >
        </FeatureCard>
    </div>
</section>


<!-- ------------------------------------------ C S S ------------------------------------------ -->
<style>
</style>