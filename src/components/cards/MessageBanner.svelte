<script>
    import DefaultButton from "../buttons/DefaultButton.svelte";


</script>

<article>
    <div class="content animate">
        <h1>La pregunta es: ¿Estás dispuesto a invertir en tu negocio para hacerlo <span class="colored-text">más rentable</span>?</h1>
        <p>Porque esto no es un gasto, es una inversión. Piénsalo, si ganas un par de clientes más al mes (perfectamente posible), ¿Merece la pena?.</p>
        <DefaultButton text="Obtén tu web" action={() => {
            window.location.hash = ""; 
            window.location.hash = "#pricing"
            }}
        />
    </div>
</article>

<style>
    article {
        margin: 60px auto;
        background-image: radial-gradient(100% 100% at 100% 0, #5aa2ffcd 0, #27359eb7 100%), url("/media/assets/images/webBackground.jpeg");
        background-position: center;
        background-size: cover;
        background-attachment: fixed;
		display: grid;
		place-items: center;
		padding: 60px 20px;
		color: white;
        text-align: center;
        width: calc(100% - 40px);
        max-width: 1400px;
        border-radius: 24px;
    }

    .colored-text {
        color: #fffb00;
        text-decoration: underline;
    }

    article h1 {
        font-size: 2.6em;
        width: 100%;
        max-width: 800px;
        color: white;
    }

    article p {
        width: 100%;
        max-width: 680px;
        font-size: 18px;
        font-weight: 400 !important;
        color: white;
        margin-top: 0;
        margin-bottom: 40px;
    }

    .content {
        display: grid;
        place-items: center;
    }


    .banner-button {
        margin-top: 40px !important;
        margin: auto;
    }



    @media screen and (max-width: 767px) {
        article {
            width: calc(100vw - 40px);
            margin-left: -20px;
            border-radius: 0;
        }
    }
</style>