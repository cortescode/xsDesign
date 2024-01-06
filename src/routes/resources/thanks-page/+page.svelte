<script>
    import Logo from "../../../components/Logo.svelte";
    import DefaultButton from "../../../components/buttons/DefaultButton.svelte";
    import Card from "../../../components/cards/Card.svelte";
    import DependentPopUp from "../../../components/pop-ups/DependentPopUp.svelte";
    import PricingSection from "../../../components/sections/PricingSection.svelte";
    import { storeLead } from "../../../utils/leads_manager";




</script>


<svelte:head>
    <title>Gracias por tu descarga - Ebook Gratuito | XS Design</title>
    <meta name="desctiption" content="Gracias por descargar el ebook acerca de los 3 secretos que utilizamos con negocios online como el tuyo para crear webs que generan negocio." />
</svelte:head>

<div class="landing">

    <div class="logo-container animate">
        <Logo></Logo>
    </div>

    <div class="info animate">
        <h1><span class="gradient-text">Listo, tu ebook está en camino</span>, debería llegar a tu correo en cuestión de segundos.</h1>
        <p>Por último recordarte que si bien cuanto mas sepas mejor, a la hora de implementar quizás no debas ser tu quien lleve a cabo tu nueva web, o ser tu quien mejore tu página actual.</p>
        <p>Nosotros te creamos una página web moderna, rápida y optimizada con la que conviertas un alto porcentaje de tu tráfico en ventas. De echo, si no quedas satisfecho te devolvemos el dinero.</p>
        
    </div>

    <PricingSection></PricingSection>

    <div class="footer-message">
        <p>
            *En xsdesign.co no creemos en cursos, servicios, productos o 
            programas para hacerse «rico» rápido. Creemos en el trabajo duro, en el 
            largo plazo y en aportar valor a la sociedad de forma ética. Para eso están 
            diseñados nuestros servicios de diseño de páginas web de alta conversión. 
            Estamos aquí para crear tu mejor imagen online 
            y que avances lo más rápido posible. 
        </p>
        <p>
            Nos reservamos el derecho de admisión a todos nuestros programas. 
            Los resultados de nuestros clientes no son típicos y varían. Cada vez 
            que enseñamos resultados de clientes o nuestros propios son única y exclusivamente 
            con propósitos ilustrativos y en ningún caso constituyen una promesa de resultado 
            específico. No somos responsables de los impuestos que puedas tener que llegar a 
            pagar en tu país por aplicar correctamente nuestras estrategias. 

            ©2023 xsdesign.co
        </p>

    </div>

</div>



<style>

    .landing {
        display: grid;
        place-items: center;
        background-color: white;
        max-width: 100vw;
        margin: 0;
        padding: 40px 20px;
        min-height: calc(100vh - 80px);
    }

    .logo-container {
        width: fit-content;
        margin-bottom: 40px;
    }
    
    .info {
        width: 100%;
        max-width: 680px;
    }

    .info h1 {
        font-size: 40px;
        font-weight: 700;
        line-height: 1.2;
        margin-bottom: 20px;
    }
    .footer-message {
        padding-top: 120px;
        font-size: 12px;
        line-height: 1.2;
        text-align: center;
        max-width: 820px;
        margin: 0 auto;
    }

    .landing-button {
        align-items: center;
        background-image: linear-gradient(144deg,#AF40FF, #5B42F3 50%,#00DDEB);
        border: 0;
        border-radius: 8px;
        box-shadow: rgba(151, 65, 252, 0.2) 0 15px 30px -5px;
        box-sizing: border-box;
        color: #FFFFFF;
        display: flex;
        font-family: Phantomsans, sans-serif;
        font-size: 20px;
        justify-content: center;
        line-height: 1em;
        max-width: 100%;
        min-width: 140px;
        padding: 3px;
        text-decoration: none;
        user-select: none;
        -webkit-user-select: none;
        touch-action: manipulation;
        white-space: nowrap;
        cursor: pointer;
    }

    .landing-button:active,
    .landing-button:hover {
        outline: 0;
    }

    .landing-button span {
        background-color: rgb(13, 15, 142);
        padding: 16px 24px;
        border-radius: 6px;
        width: 100%;
        height: 100%;
        transition: 300ms;
    }

    .landing-button:hover span {
        background: none;
    }



    @media screen and (max-width: 767px) {

        .button-container {
            width: 100%;
            display: grid;
            place-items: center;
        }
        .columns {
            flex-direction: column;
            gap: 0;
        }

        .info {
            max-width: 100%;
            text-align: center;
        }

        .ebook-image {
            margin-top: 40px;
        }

        .landing-button {
            font-size: 24px;
            min-width: 196px;
        }

        .benefits {
            display: grid;
            grid-template-columns: 1fr;
        }
    }

</style>