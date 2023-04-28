<!-- ------------------------------------------ J S ------------------------------------------ -->
<script>
    import Card from '../cards/Card.svelte';

</script>


<!-- ------------------------------------------ H T M L ------------------------------------------ -->
<section class="animate">
    <h1 class="left-title">¿Qué nos diferencia del resto?</h1>
    <div class="flex-columns">
        <Card
            iconUrl = "/media/assets/icons/code.svg"
            title = "Somos expertos en desarrollo, no solo en diseño y marketing."
            description = "
                        Depende del proyecto creamos webs utilizando plataformas modernas cómo webflow o 
                        shopify, o ponemos a nuestros programadores y diseñadores a trabajar 
                        en tu proyecto. Estamos artos de webs lentas y mediocres creadas en wordpress."
        >
        </Card>
        <Card
            iconUrl = "/media/assets/icons/infinite.svg"
            title = "Utilizamos metodología ágiles cómo LEAN o SCRUM"
            description = "El resumen de este tipo de metodologías es planificar, ejecutar, medir, decidir en base 
                        los datos obtenidos y repedir el proceso. Esto nos permite entregrar nuestros servicios de diseño y 
                        desarrollo web de forma ágil, entregando resultados de calidad y permitiendo la mejora continua y 
                        crecimiento de tu negocio."
        >
        </Card>

        <Card
            iconUrl = "/media/assets/icons/squares.svg"
            title = "Integramos I.A en nuestros procesos"
            description = "Incorporamos las más nuevas herramientas de inteligencia artificial para aumentar la 
                    productividad y calidad de nuestras páginas web, así como de los artículos y cartas de ventas de las mismas."
        >
        </Card>
    </div>
</section>


<!-- ------------------------------------------ C S S ------------------------------------------ -->
<style>

</style>