
<script>
    import { createEventDispatcher, onMount } from "svelte";
    import DefaultButton from "../buttons/DefaultButton.svelte";
    const dispatch = createEventDispatcher();

    export let showPopUp = false;

    function closePopUp() {
        showPopUp = false;
        dispatch("close");
    }

    onMount(() => {
        dispatch("open");
    });


</script>

<!-- ------------------------------------------ H T M L ------------------------------------------ -->
<div class="pop-up-container" class:showPopUp>

    <div class="pop-up">
        <button class="close-button" on:click={closePopUp}>X</button>
        <slot>
            <h2>Obtén ahora nuestro ebook nuevo mini-ebook.</h2>
            <img class="ebook-image" src="/media/resources/ebook-tablet-img.webp" alt="ebook">
            <DefaultButton action={() => window.location.pathname = 'resources/lead-magnet'} text="Obtener Ahora" ></DefaultButton>
        </slot>
    </div>
</div>


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
        padding: 32px;
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

    .ebook-image {
        width: 100%;
        max-width: 200px;
        margin: 20px 0;
    }
</style>