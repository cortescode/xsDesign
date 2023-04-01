<!-- ------------------------------------------ J S ------------------------------------------ -->
<script>
    import WebCard from '../components/cards/WebCard.svelte'
</script>

<!-- ------------------------------------------ H T M L ------------------------------------------ -->
<section class="normal-section animate">
    <h1 class="left-title">
        Algunas webs que hemos creado.
    </h1>
    <div class="grid3x1">
        <WebCard
            imgUrl = "/media/frioantakira/home_page.png"
            title = "Transportes frío antakira"
            description = "Empresa de transportes y logística localizada en Málaga, Antequera."
            linkUrl = "https://transportesfrioantakira.com"
        ></WebCard>
        <WebCard
            imgUrl = "/media/elbuscadordeagua/home_page.png"
            title = "elbuscadordeagua.com"
            description = "Zahorí de Málaga con más de 20 años de experiencia buscando pozos por toda españa"
            linkUrl = "https://elbuscadordeagua.com"
        ></WebCard>
        <WebCard
            imgUrl = "/media/bleckin/home_page.png"
            title = "Bleckin"
            description = "Comunidad de personas interesadas en las criptomonedas y la tecnología blockchain"
            linkUrl = "https://bleckin.com"
        ></WebCard>
    </div>
</section>

<!-- ------------------------------------------ C S S ------------------------------------------ -->
<style>
</style>
