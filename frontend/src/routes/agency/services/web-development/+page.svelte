<script>
    import ServiceHero from "../../../../components/heros/ServiceHero.svelte";
    import CtaBanner from "../../../../components/sales/CtaBanner.svelte";
</script>

<svelte:head>
    <title>Desarrollo de aplicaciones web a medida | XS Design</title>
</svelte:head>
<ServiceHero
    imgUrl = "/media/assets/images/digital-strategy.webp"
    title = "Desarrollo de aplicaciones web a medida para emprendedores y starups"
    description = "Realizamos desarrollo full stack a medida donde creamos aplicaciones web innovadoras y preparadas para escalar."
    selected_service="Desarrollo web"
></ServiceHero>

<section class="text-section animate">
    <h2>Desarrollamos la aplicación web que necesitas para hacer realidad tu idea o proyecto.</h2>
    <p>
        Diseñamos y desarrollamos aplicaciones web de calidad, con software fácil de modificar y actualizar, en tecnologías de última generación.
    </p>
    <p>
        Enfocamos e integramos nuestros productos de software de tal forma que permitan recopilar y analizar los datos y acciones de tus usuarios más relevantes para su posterior análisis de cara a tomar las decisiones de tu negocio.
    </p>
    <h3>Desarrollo Frontend</h3>
    <p>El desarrollo frontend en términos simples es la parte visible de tu web, lo que tu y cualquiera vé cuando accede a una página. Los títulos, imágenes, formas, tablas y demás elementos visuales de una página web.</p>
    <p>Se podría considerar cómo la unión del diseño de una página web con la parte técnica que la hace posible.</p>
    <h3>Desarrollo Backend</h3>
    <p>El desarrollo backend (también en términal simples) es la parte que se encarga del negocio. Es decir, el almacenamiento de los datos de usuarios y productos así como las reglas de negocio.</p>
    <p>
        También se encarga de permitir el escalado de tu aplicación y la seguridad de la misma frente a ciberdelincuentes y demás amenzas que se encuentran en Internet.
    </p>
    <h3>Desarrollo Full Stack </h3>
    <p>El desarrollo backend (también en términal simples) es la parte que se encarga del negocio. Es decir, el almacenamiento de los datos de usuarios y productos así como las reglas de negocio.</p>
    <p>
        También se encarga de permitir el escalado de tu aplicación y la seguridad de la misma frente a ciberdelincuentes y demás amenzas que se encuentran en Internet.
    </p>
    <h3>Descubre la magia</h3>
    <p>
        Fusionamos las metodologías de Lean y Scrum para aumentar la eficiencia y tener una fórmula del éxito a la hora de crear productos digitales, cuidando la calidad, funcionalidad y experiencia de uso.
    </p>
    <p>El proceso que seguimos para desarrollar un producto de software de calidad que solucione un problema real y tenga un hueco en el mercado es este:</p>
    <ul>
        <li>
            Definir la idea y el funcionamiento inicial.
        </li>
        <li>
            Crear un MVP (siglas en inglés de Producto mínimo viable).
        </li>
        <li>
            Lanzamos el producto al mercado en una fase beta (o dos fases separadas según el caso), donde poder seguir el desarrollo en base al feedback de usuarios reales externos a la empresa.
        </li>
        <li>
            Priorizamos la adición de funcionalidades conforme al feedback que vallamos obteniendo y eliminamos lo que no se utilice.
        </li>
        <li>
            Proporcionamos datos de cara a que se puedan realizar campañas de marketing con el conocimiento real de los usuarios
        </li>
    </ul>
</section>
<CtaBanner 
    title="Es hora de hacer tu idea realidad"
    description="Agenda tu llamada gratuita ahora y contacta con nuestro equipo."
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

    .text-section > p {
        font-size: 18px;
    }

    .text-section > ul li {
        margin: 20px 10px;
        line-height: 1.5em;
    }
</style>