<!-- ------------------------------------------ J S ------------------------------------------ -->
<script>
    import WebCard from '../cards/WebCard.svelte'
</script>

<!-- ------------------------------------------ H T M L ------------------------------------------ -->
<section class="normal-section animate">
    <h1 class="left-title">
        Algunas webs que hemos creado.
    </h1>
    <div class="grid3x1">
        <WebCard
            imgUrl = "/media/frioantakira/home_page.webp"
            title = "Transportes frío antakira"
            description = "Empresa de transportes y logística localizada en Málaga, Antequera."
            linkUrl = "https://frio-antakira-ded9fa.webflow.io/"
        ></WebCard>
        <WebCard
            imgUrl = "/media/elbuscadordeagua/home_page.webp"
            title = "elbuscadordeagua.com"
            description = "Zahorí de Málaga con más de 20 años de experiencia buscando pozos por toda españa"
            linkUrl = "https://elbuscadordeagua.com"
        ></WebCard>
        <WebCard
            imgUrl = "/media/bleckin/home_page.webp"
            title = "Bleckin"
            description = "Comunidad de personas interesadas en las criptomonedas y la tecnología blockchain"
            linkUrl = "https://bleckin.webflow.io/"
        ></WebCard>
    </div>
</section>

<!-- ------------------------------------------ C S S ------------------------------------------ -->
<style>
</style>
