<script>
    export let id = "pricing"
    import PricingCard from "../cards/PricingCard.svelte";

    let landingPro = [
        "Consultoría de 2 horas",
        "Una sola página",
        "Dominio y Email corporativo (si no tienes)",
        "Conexión con CMS",
        "Optimizada para vender",
        "Alineada con tu mensaje y con tu marca",
        "SEO on page",
        /* "Cumplimiento de la legalidad vigente" */
    ]

    let businessPro = [
        "todo lo anterior +",
        "Análisis de competencia",
        "Hasta 5 páginas",
        "Blog",
        "SEO estratégico",
    ]

    let academyPro = [
        "todo lo de Business Pro +",
        "Desarrollo personalizado",
        "Hasta 10 infoproductos",
        "Embudos de venta",
        "3 meses de seguimiento",
    ]


    let ecommercePro = [
        "todo lo de Business Pro +",
        "Desarrollo personalizado",
        "Hasta 50 productos",
        "3 meses de seguimiento",
    ]



</script>
<!-- 
    export let iconUrl;
    export let title;
    export let description;
    export let price;
    export let caracteristics; // list of strings
    export let linkUrl;
    export let linkText; -->

<section class="animate" id={id}>
    <h1>Toma <span class="gradient-color">Acción</span></h1>
    <p>*Si no quedas satisfecho te devolvemos tu dinero.</p>
    <div class="price-columns">
        <PricingCard linkUrl="https://buy.stripe.com/dR62ceamL0cya1qfZ4" title="Landing Pro" description="Tu landing page de alta conversión" price="395€" characteristics={landingPro}/>
        <PricingCard linkUrl="https://buy.stripe.com/6oE8ACbqP6AWehG6ov" title="Business Pro" description="La web de tu negocio de alto rendimiento lista para convertir y escalar" price="795€" characteristics={businessPro}/>
        <PricingCard linkUrl="https://buy.stripe.com/bIY4km52r7F01uU4go" title="Academy Pro" description="Obtén tu academia online propia. Deja de pagar comisiones por alojar tus infoproductos." price="1495€" characteristics={academyPro}/>
        <PricingCard linkUrl="https://buy.stripe.com/7sI6sufH54sOb5u9AJ" title="Ecommerce Pro" description="Una tienda online enfocada en la conversión y generación de marca" price="2495€" characteristics={ecommercePro}/>
    </div>
</section>

<style>
    section {
        margin: 40px auto;
        max-width: 1150px;
        padding: 20px;
    }
    .price-columns {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        margin: 40px auto;
        max-width: 1150px;
        gap: 40px;
    }
    h1 {

        font-size: 2.8em;
        max-width: 640px;
        text-align: center;
        margin: 20px auto;
    }

    p {
        text-align: center;
    }


    @media screen and (max-width: 900px) {
        section {
            padding: 28px;
        }
        .price-columns {
            grid-template-columns: repeat(1, 1fr);
        }
    }

</style>


