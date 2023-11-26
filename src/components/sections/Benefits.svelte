<!-- ------------------------------------------ J S ------------------------------------------ -->
<script>
    import Card from '../cards/Card.svelte';

</script>


<!-- ------------------------------------------ H T M L ------------------------------------------ -->
<section class="animate">
    <h2>Obtienes esto y mucho más:</h2>
    <div class="columns">
        <Card
            iconUrl = "/media/assets/icons/code.svg"
            title = "Mejora tu Marca"
            description = "
                        Aumenta la confianza de tus clientes potenciales con un diseño web
                        profesional y optimizado a la altura de tu proyecto."
        >
        </Card>
        <Card
            iconUrl = "/media/assets/icons/infinite.svg"
            title = "Empieza a vender YA."
            description = "Nos apoyamos en un equipo versátil y la última tecnología para entregar nuestras soluciones a la velocidad de la luz."
        >
        </Card>

        <Card
            iconUrl = "/media/assets/icons/infinite.svg"
            title = "Obtén información valiosa."
            description = "Obtenemos información valiosa sobre tu cliente. Nos apoyamos en un equipo versátil y la última tecnología para entregar nuestras soluciones a la velocidad de la luz."
        >
        </Card>

        <Card
            iconUrl = "/media/assets/icons/infinite.svg"
            title = "Aumenta la reputación de tu negocio."
            description = "Nos apoyamos en un equipo versátil y la última tecnología para entregar nuestras soluciones a la velocidad de la luz."
        >
        </Card>
    </div>
</section>


<!-- ------------------------------------------ C S S ------------------------------------------ -->
<style>

    .columns {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        margin: 40px auto;
        max-width: 1150px;
        gap: 40px;
    }
    section {
        display: grid;
        place-items: center;
    }
    section h1 {
        text-align: center !important;
        margin-bottom: 40px;
    }
</style>