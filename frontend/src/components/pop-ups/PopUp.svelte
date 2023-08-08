
<script>
    import { onMount } from "svelte";
    export let showPopUp = false;

    function closePopUp() {
        showPopUp = false;
    }

    onMount(() => {
        setTimeout(() => {
            showPopUp = true
        }, 8000)
    });


</script>

<!-- ------------------------------------------ H T M L ------------------------------------------ -->
{#if showPopUp}
    <div class="pop-up-container" class:showPopUp>

        <div class="pop-up">
            <button class="close-button" on:click={closePopUp}>
                <img src="/media/assets/icons/cross.svg" alt="Cerrar" srcset="/media/assets/icons/cross.svg">
            </button>
            <slot>
                <div class="columns">
                    <div class="info">
                        <h3>Descargate nuestro nuevo mini-ebook.</h3>
                        <p>Aprende todo lo que necesitas para convertir tu web en un máquina de ventas.</p>
                    </div>
                    <img class="ebook-image" src="/media/resources/ebook-tablet-img.webp" alt="ebook">
                </div>
                <a class="gradient-button" href="resources/lead-magnet">Descargar gratis</a>
            </slot>
        </div>
    </div>
{/if}

<style>
    .pop-up-container {
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background-color: rgba(0,0,0,0.6);
        display: grid;
        place-items: center;
        z-index: 100;
        opacity: 0;
        pointer-events: none;
        transition: all 0.2s ease-in-out;
    }

    .pop-up-container.showPopUp {
        opacity: 1;
        pointer-events: all;
    }

    .pop-up {
        background-color: white;
        max-width: 400px;
        padding: 20px;
        border-radius: 10px;
        position: relative;
        display: grid;
        place-items: center;
        margin: 10px;
    }

    .close-button {
        position: absolute;
        top: 10px;
        right: 10px;
        background-color: transparent;
        border: none;
        font-size: 20px;
        cursor: pointer;
    }

    .close-button img {
        width: 28px;
    }

    .columns {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 28px;
        margin-bottom: 20px;
    }

    .ebook-image {
        max-height: 240px;
        margin: 20px 0;
    }

    @media screen and (max-width: 900px) {

        .pop-up {
            max-width: 300px;
        }
        
        .columns {
            grid-template-columns: 1fr;
            place-items: center;
            gap: 10px;
        }

        .info {
            text-align: center;
        }

        .ebook-image {
            margin: 10px 0;
        }
    }



</style>