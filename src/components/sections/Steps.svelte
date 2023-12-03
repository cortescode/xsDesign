<script>
    import DefaultButton from "../buttons/DefaultButton.svelte";

    export let title = "Tu web premium en 4 simples pasos";
</script>

<section class="animate">
    <div class="steps-columns">
        <div class="left-content">
            <h1 >{title}</h1>
            <h3 class="subtitle">Descubre nuestro simple procedimiento desde que empezamos a trabajar contigo hasta que te entregamos tu web.</h3>

            <img src="/media/assets/images/digital-strategy.webp" alt="">
        </div>
        <ul class="titles-list">
            <li>
                <span>Paso 1.</span>
                <p>
                    Adquieres nuestro servicio y te redirijimos a un formulario para que nos proporciones todos los datos que necesitamos para empezar a investigarte.
                </p>
            </li>
            <li>
                <span>Paso 2.</span>
                <p>
                    Agendamos una reunión donde nos cuentes tus objetivos en más detalle, te contemos qué hemos descubierto y obtengamos todos los detalles que nos faltan para hacer una web que funcione estándo 100% alineada con tu marca y mensaje.
                </p>
            </li>
            <li>
                <span>Paso 3.</span>
                <p>
                    Mantenemos el contacto y obtienes 2 versiones de diseño para tu web en menos de lo que canta un gallo, eliges el que más te gusta.
                </p>
            </li>
            <li>
                <span>Paso 4.</span>
                <p>
                    Te entregamos tu página web profesional, optimizada, y fácilmente administrable (si es que la quieres administrar tu) para tu negocio.
                </p>
            </li>
        </ul>
    </div>
    <div class="button-wrapper">
        <DefaultButton text="Reserva tu sitio" />
    </div>
</section> 



<style>
    section {
        margin: 40px auto;
        max-width: 1150px;
    }
    h1 {
        /* Create a gradient color for the text */
        background: radial-gradient(100% 100% at 100% 0, #5adaff 0, #5468ff 100%);
        font-size: 2.4em;
        /* Set the background size and repeat properties. */
        background-size: 200%;
        background-repeat: repeat;
        /* Use the text as a mask for the background. */
        /* This will show the gradient as a text color rather than element bg. */
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        /* Animate the background-position property tclass="button1ift the gradient. */
        animation: animate 10s linear infinite;
        max-width: 640px;
        margin-bottom: 0;
        text-align: left;
        margin: 0 0;
    }
    
    .subtitle {
        text-align: left;
        margin: 40px 0;
        font-size: 18px;
        font-weight: 400 !important;
        max-width: 400px;
    }
    .steps-columns {
        display: grid;
        grid-template-columns: 1fr 2fr;
        justify-content: center;
        gap: 20px;
        margin: 20px;
    }
    .left-content img {
        align-self: center;
        border-radius: 24px;
    }

    .titles-list {
        list-style: none;
        margin-top: -40px;
    }
    .titles-list li{
        list-style: none;
        padding: 20px 20px;
        margin: 40px 0;
        border-radius: 8px;
        background-color: #d8e2ff;
        /* box-shadow: rgba(0, 5, 8, 0.2) 0px 0px 12px; */
    }

    .titles-list li p{
        font-size: 16px;
        font-weight: 400;
        margin-block: 0;
    }

    .titles-list li span{
        display: block;
        font-size: 22px;
        font-weight: bold;
        margin-bottom: 12px;
        color: var(--blue);
    }

    .button-wrapper {
        display: grid;
        justify-content: center;
        margin-top: 20px;
        width: 100%;
    }

	
    @media screen and (max-width: 767px) {

        .steps-columns {
            display: block;
        }

        .steps-columns img {
            width: 100%;
        }

        .titles-list {
            padding: 0;
            margin: 40px 0 0 0;
        }

        .titles-list li {
            margin: 20px 0;
        }
    }

</style>