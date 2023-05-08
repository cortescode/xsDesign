<script>
    import ServiceHero from "../../../../components/heros/ServiceHero.svelte";
    import CtaBanner from "../../../../components/sales/CtaBanner.svelte";
</script>


<svelte:head>
    <title>Creación y optimización de tiendas online en shopify | XS Design</title>
</svelte:head>
<ServiceHero
    imgUrl = "/media/assets/images/seo.webp"
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
    <p>
        Si quieres conseguir esos objetivos, hay una pieza indispensable:
    </p>
    <h3>Una tienda online diferencial que genere branding</h3>
    <p>
        Crear marca alrededor de tus productos es fundamental para poder escalar las ventas a lo largo del tiempo, y tu web es una de los mejores medios de diferenciación de los que dispones (a parte del produco en sí, por supuesto). 
    </p>
    <p>
        Si no consigues que tus clientes se sientan a gusto en tu web, donde compran tus productos, los perderás como clientes más pronto que tarde.
    </p>
    <p>
        Ahora tienes dos opciones, crear tu tienda por tu cuenta, o confiar en expertos. Ambas opciones te pueden llevar al mismo destino, pero una es mas rápida que otra.
    </p>
    <h3>¿Por qué elegirnos? <span>¿o por qué no hacerlo?</span></h3>
    <p>
        En Xsdesign nos gusta trabajar mano a mano con las personas, nos encanta el desarrollo de software, el marketing, somos frikis de la analítica y adoramos la creatividad, pero sobre todo, si hay algo que se nos da bien, son las ventas.</p>
    <p>
        Nos esforzamos por crear y posicionar tiendas online que sean capaces de generar ventas en piloto automático. 
    </p>
    <p>
        Sin embargo, si tienes una mentalidad de corto plazo o no valoras la importancia de una tienda online profesional, quizán no seamos tu mejor opción.
    </p>

</section>

<CtaBanner 
    title="Descubre si encajamos con tu negocio"
    description="Agenda tu llamada gratuita ahora y contacta con nuestro equipo para resolver cualquier duda que tengas. Luego ya decides si quieres que te ayudemos o prefieres intentarlo por tu cuenta."
    ctaButtonText="Agenda tu llamada"
	ctaUrl="https://calendly.com/xsdesign/videollamada-de-descubrimiento"
></CtaBanner>

<style>
    
    .text-section {
        max-width: 780px;
        margin: -40px auto 40px auto;
        padding: 20px;
    }

    .text-section > h2 {
        font-weight: bold;
        margin: 0;
        margin-block: 0;
        padding-top: 40px;
    }

    .text-section > h3 > span {
        font-size: 16px;
    }

    .text-section > p {
        font-size: 18px;
    }
</style>