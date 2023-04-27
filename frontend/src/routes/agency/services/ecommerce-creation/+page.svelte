<script>
    import ServiceHero from "../../../../components/heros/ServiceHero.svelte";
    import CtaBanner from "../../../../components/sales/CtaBanner.svelte";
</script>

<ServiceHero
    imgUrl = "/media/assets/images/ecommerce.webp"
    title = "Tiendas Shopify optimizadas que generan marca y ventas para tu negocio."
    description = "Creamos tiendas online en shopify a medida, optimizadas para la conversión y con un diseño innovador que genere marca y negocio."
    selected_service="Ecommerce"
></ServiceHero>

<section class="text-section animate">
    <h2>Agencia de Ecommerce profesional.</h2>
    <p>
        Siempre que buscamos una agencia ecommerce para cambiar nuestra tienda online o queremos crearla desde cero, lo que buscamos es vender más.
    </p>
    <p>
        Una tienda que convierta mejor, que se posicione más rápido, que llene más el carrito, que enganche. Que compren más, que vuelvan, que genere más euforia que un Black Friday.
    </p>
    <h2>Construye tu marca</h2>
    <p>
        Crear una marca alrededor de tus productos es indispensable para poder escalar las ventas a lo largo del tiempo. Si no consigues que tus clientes sientan un valor diferencial en tu producto, no te comprarán de nuevo (que es lo último que quieres).
    </p>
    <h2>¿Por qué elegirnos? (¿o por qué no hacerlo?)</h2>
    <p>
        En Xsdesign nos gusta trabajar mano a mano con las personas, nos encanta el desarrollo de software, el marketing, somos frikis de la analítica y adoramos la creatividad, pero sobre todo, si hay algo que se nos da bien, son las ventas.</p>
    <p>
        Nos esforzamos por crear y posicionar tiendas online que sean capaces de generar ventas en piloto automático. 
    </p>

</section>

<CtaBanner 
    title="Descubre si nuestro servicio de consultoría es para ti"
    description="Agenda tu llamada gratuita ahora y contacta con nuestro equipo."
    ctaButtonText="Agenda tu llamada"
	ctaUrl="https://calendly.com/xsdesign/videollamada-de-descubrimiento"
></CtaBanner>

<style>
    
    .text-section {
        max-width: 780px;
        margin: -40px auto 40px auto;
    }

    .text-section > h2 {
        font-weight: bold;
        margin: 0;
        margin-block: 0;
        padding-top: 40px;
    }

    .text-section > p {
        font-size: 18px;
    }
</style>