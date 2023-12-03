<!-- ------------------------------------------ J S ------------------------------------------ -->
<script>
    import Benefit from '../cards/Benefit.svelte';

</script>


<!-- ------------------------------------------ H T M L ------------------------------------------ -->
<section class="animate">
    <h2>Obtienes esto y mucho más:</h2>
    <div class="columns">
        <Benefit
            iconUrl = "/media/assets/icons/code.svg"
            title = "Mejora de la experiencia de tu cliente"
        >
        </Benefit>
        <Benefit
            iconUrl = "/media/assets/icons/infinite.svg"
            title = "Eliminación de objeciones"
        >
        </Benefit>

        <Benefit
            iconUrl = "/media/assets/icons/squares.svg"
            title = "Información valiosa sobre tu cliente"
        >
        </Benefit>

        <Benefit
            iconUrl = "/media/assets/icons/persons.svg"
            title = "Aumento de la autoridad de tu negocio"
        >
        </Benefit>
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
        padding: 10px;
    }
    section h1 {
        text-align: center !important;
        margin-bottom: 40px;
    }

    @media screen and (max-width: 900px) {
        .columns {
            grid-template-columns: repeat(1, 1fr);
            gap: 20px;
        }
    }

</style>