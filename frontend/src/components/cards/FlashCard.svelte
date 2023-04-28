<script>
    import { onMount } from "svelte";

    let nodeRef;

    onMount(() => {
        setTimeout(() => {
            nodeRef.style.display="grid";
        }, 4000)
    })
    
    function removeChild() {
        nodeRef.parentNode.removeChild(nodeRef)
    }
</script>

<article bind:this={nodeRef} class="animate">
    <button on:click={removeChild}><img src="/media/assets/icons/cross.svg" alt="close"></button>
    <h3 class="gradient-text">
        ¿Eres un early adopter? ¡Te estamos buscando!
    </h3>
    <p>Accede a la fase Alpha de nuestra plataforma de creación de landing pages con I.A integrada y obtén 3 meses gratis en su lanzamiento.</p>
    <a on:click={removeChild} href="/platform" class="gradient-button">Obtener más información</a>
</article>

<style>
    article {
        position: fixed;
        inset: auto 10px 10px auto;
        border-radius: 12px;
        padding: 20px;
        max-width: 280px;
        height: fit-content;
        background-color: white;
        display: none;
        grid-template-columns: 1fr;
        box-shadow: rgba(0, 60, 255, 0.4) 0 0 40px;
    }

    article > button {
        justify-self: right;
        border-radius: 50%;
        aspect-ratio: 1;
        border: none;
        transition: .2s;
    }

    article > button:hover {
        transform: scale(1.2);
    }

    article > button > img {
        max-width: 24px;
        border-radius: 50%;
    }

    article > h3 {
        font-size: 18px;
        margin: 20px 0 10px 0;
    }

    article > p {
        font-size: 14px;
        margin-bottom: 20px;
    }
</style>