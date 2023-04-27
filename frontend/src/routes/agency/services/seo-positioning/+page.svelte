<script>
    import ServiceHero from "../../../../components/heros/ServiceHero.svelte";
    import CtaBanner from "../../../../components/sales/CtaBanner.svelte";
</script>

<ServiceHero
    imgUrl = "/media/assets/images/seo.webp"
    title = "Posicionamiento Web SEO profesional"
    description = "Posicionamos páginas web en google y los motores de búsqueda más relevantes para que los usuarios te encuentren a tí cuando busquen tu producto o servicio."
    selected_service="Posicionamiento SEO"
></ServiceHero>

<section class="text-section animate">
    <h2>Descubre qué te ofrecemos con nuestro servicio de consultoría y estrategia digital</h2>
    <h3>Creamos estrategias a medida</h3>
    <p>
        El SEO no es comprar enlaces y crear contenidos, ni tampoco informes automatizados de una herramienta. Es mucho más.
    </p>
    <p>
        Estudiamos el negocio de cada cliente como si fuera propio, y aplicamos nuestra experiencia crear estrategias personalizadas y priorizar las tareas que tengan el mayor retorno para la inversión en SEO de nuestros clientes.
    </p>
    <h3>Convertimos datos en resultados de negocio</h3>
    <p>
        Lo que se mide se puede mejorar, es por eso que nos centramos nuestro SEO en los datos que tu web nos proporciona. Invesigamos tu web y tu negocio en profundidad para tomar decisiones basadas en datos.
    </p>
    <p>
        Nuestro trabajo es conocer, medir y mejorar los KPIs más importantes de tu negocio y crear estrategias que devuelvan resultados con impacto de negocio: conseguir más tráfico, más leads o más ventas
    </p>
</section>

<CtaBanner 
    title="Estás a solo unos clicks de tu tienda online lista para vender"
    description="Agenda tu llamada gratuita ahora y resuelve cualquier duda sobre nuestro producto."
    ctaButtonText="Agendar llamada"
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