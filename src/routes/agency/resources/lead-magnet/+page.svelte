<script lang="ts">
    import Logo from "$lib/components/Logo.svelte";
    import DefaultButton from "$lib/components/buttons/DefaultButton.svelte";
    import Card from "$lib/components/cards/Card.svelte";
    import DependentPopUp from "$lib/components/pop-ups/DependentPopUp.svelte";
    import { storeLead } from "$lib/leads";


    let popUpShown = false;

    let name: string;
    let email: string;

    $: {
        name, email
    }


    // function that will be called when the user clicks on the form button and validates the form before allow to download the ebook
    async function validateFormAndDownload() {
        // get the form
        const form = document.querySelector(".pop-up--form");

        // validate the values
        if (name.length < 3) {
            alert("Por favor, introduce un nombre válido");
            return;
        }

        if (email.length < 3 || !email.includes("@")) {
            alert("Por favor, introduce un correo válido");
            return;
        }


        popUpShown = false;

        // Send the data to the backend
        await storeLead(name, email);

        // if the values are valid, download the ebook
        downloadEbook();

    }

    function downloadEbook() {
        // Download the ebook that is located in /media/resources/ebook.pdf
        window.location.pathname = '/resources/thanks-page'
        //window.open("/media/resources/ebook.pdf");

    }

</script>


<svelte:head>
    <title>3 secretos para aumentar las ventas de tu web - Ebook Gratuito | XS Design</title>
    <meta name="desctiption" content="Los 3 secretos que utilizamos con negocios online como el tuyo para crear webs que generan negocio." />
</svelte:head>

<div class="landing">

    <div class="logo-container animate">
        <Logo></Logo>
    </div>

    <div class="columns">
        <div class="info animate">
            <h1>Los <span class="gradient-text">3 secretos</span> que utilizamos con negocios online como el tuyo para <span class="gradient-text">crear webs que generan negocio.</span></h1>
            <h3>Es gratis, ameno y directo al grano.</h3>
            <div class="benefits">
                <div class="benefit">
                    Aumenta la confianza de tus posibles clientes
                </div>

                <article class="benefit">
                    Genera branding y autoridad
                </article>

                <article class="benefit">
                    No pierdas el tiempo en "atajos" que no funcionan.
                </article>
            </div>
            <div class="button-container">
                <DefaultButton action={() => popUpShown=true} text="DESCARGAR AHORA" />
            </div>
        </div>

        

        <div class="right-container">
            <img class="ebook-image animate" src="/media/resources/ebook-tablet-img.webp" alt="ebook">
        </div>

    </div>

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

    <DependentPopUp showPopUp={popUpShown} on:close={() => popUpShown = false}>
        <div class="pop-up--form">
            <Logo></Logo>

            <h2>Último paso para descargar los 3 secretos.</h2>
            <p>Introduce tu nombre + correo, clicka el botón y se descargará automáticamente</p>

            <input type="text" placeholder="tu nombre" name="name" bind:value={name} />
            <input type="text" placeholder="tu mejor correo" name="email" bind:value={email}/>
            <br>
            <br>
            <!-- <button class="landing-button form-button" on:click={validateFormAndDownload}><span class="text">DESCARGAR AHORA</span></button> -->
            <DefaultButton text="DESCARGAR AHORA" action={validateFormAndDownload}></DefaultButton>
        </div>
    </DependentPopUp>
    
</div>



<style>

    .landing {
        display: grid;
        align-items: flex-start;
        justify-content: center;
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
    /* Crea los estilos para que existan las dos columnas, ocupando un máximo de 1200px, un margen de 40px entre ambas columnas y que se convierta en una sola colummna en dispositivos móviles */
    .columns {
        display: flex;
        justify-content: space-between;
        max-width: 1200px;
        margin: 0 auto;
        gap: 120px;
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

    .button-container {
        width: fit-content;
        margin: 40px 0;
    }

    .form-button {
        margin-top: 40px;
    }

    .benefits {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        gap: 20px;
        margin-top: 40px;
    }

    .benefit {
        padding: 20px;
        background-color: white;
        border-radius: 16px;
        line-height: 1.4em;
        font-size: 18px;
        max-width: calc(100% - 40px);
        box-shadow: rgba(60, 118, 176, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(60, 118, 176, 0.4) 0px -3px 0px inset;
    }

    .pop-up--form {
        display: grid;
        place-items: center;
    }

    .ebook-image {
        width: 100%;
        max-width: 500px;
    }

    .right-container {
        display: grid;
        place-items: center;
    }

    input {
        width: calc(100% - 16px);
        font-size: 18px;
        font-family: Comfortaa;
        padding: 6px;
        margin: 10px 0 4px 0;
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