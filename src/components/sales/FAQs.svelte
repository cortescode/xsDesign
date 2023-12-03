<script>
    import DefaultButton from "../buttons/DefaultButton.svelte";
    import { onMount } from 'svelte';

    let faqs = [
        {
            question: "¿Cuanto tiempo tardais en crear la web?",
            answer: "Alrededor de una semana para el plan Landing Pro y hasta 2 semanas en Business Pro. Los otros planes varían mucho en función de las necesidades específicas. Los sitios más complejos tardarán más tiempo en desarrollarse.",
            isOpen: false
        },
        {
            question: "¿Existe devolución?",
            answer: "Sí. Puedes anular el pedido sin problema si el resultado no es el deseado y te devolveremos el 110% de tu dinero. Has leído bien, el 110% del coste. Aún no nos ha pasado. ¿Serás el primero? lo dudo, pero siempre tienes la opción.",
            isOpen: false
        },
        {
            question: "¿Cuantas revisiones existen?",
            answer: "Te mostramos varios prototipos hasta que decidas a corde a tu gusto. Luego, una vez entregamos la web final, tienes hasta 3 revisiones sin coste adicional. Nunca hemos llegado a la tercera (de hecho, lo más probable es que no necesites ninguna), pero, como simepre, te damos la opción.",
            isOpen: false
        },
    ];

    $: faqs;

    let openIndex = -1;

    function toggleFaq(index) {
        if (openIndex === index) {
            openIndex = -1;
        } else {
            openIndex = index;
        }
    }

    onMount(() => {
        openIndex = -1;
    });
</script>

<section class="faqs-section animate">
    <h2 class="title">Lo que más nos preguntan <span class="gradient-color">antes de comprar:</span></h2>
    {#each faqs as faq, index}
        <div class="faq" on:click={() => toggleFaq(index)} class:active={openIndex === index}>
            <div class="question-wrapper">
                <h2>{faq.question}</h2>

                <div class="icon">
                    {#if openIndex === index}
                        -
                    {:else}
                        +
                    {/if}
                </div>
            </div>
            {#if openIndex === index}
                <p>{faq.answer}</p>
            {/if}
        </div>
    {/each}
    <div class="button-wrapper">
        <DefaultButton text="¡Elige ya tu plan!" action={() => {
            window.location.hash = "";
            window.location.hash = "#pricing";
        }}/>
    </div>
</section>

<style>
    .title {
        font-size: 2.8em;
        max-width: 640px;
        margin-bottom: 0;
        margin-bottom: 40px;
    }

    .faqs-section {
        margin: 40px auto;
        padding: 40px;
        max-width: 1150px;
    }

    .faq {
        padding: 20px;
        margin: 20px 0;
        background-color: #d8e2ff;
        border-radius: 24px;
        cursor: pointer;
        transition: .2s;
    }

    .faq:hover {
        background-color: white;
        box-shadow: #d8e2ff 0 0 40px;
    }

    .faq h2 {
        margin: 0;
        font-weight: bold;
        font-size: 1.6em;
    }

    .faq p {
        display: none;
        font-size: 1.4em;
    }
    .faq p:hover {
        cursor: pointer;
    }

    .faq.active p {
        display: block;
        font-size: 18px;
        margin-top: 20px;
        text-shadow: #ffffff 2px 0 20px;
    }

    .question-wrapper {
        display: grid;
        grid-template-columns: 1fr 40px;
    }

    .question-wrapper:hover {
        cursor: pointer;
    }

    .question-wrapper h2:hover {
        cursor: pointer;
    }

    .question-wrapper .icon {
        font-size: 32px;
    }

    .button-wrapper {
        display: grid;
        justify-content: center;
        margin-top: 40px;
        width: 100%;
    }
</style>
