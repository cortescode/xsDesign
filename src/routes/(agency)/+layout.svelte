<script>
    import FlashCard from "$lib/components/cards/FlashCard.svelte";

    let shouldRender = false;

    
</script>


<slot/>
<section>
    Copyright © 2023 XS Design SL – Creación web para negocios atrevidos – todos los derechos reservados
    <br>
    <a href="/legal/legal-advice">Aviso legal</a>
    <a href="/legal/privacy-politics">Política de Privacidad</a>
</section>

{#if shouldRender}
    <FlashCard></FlashCard>
{/if}


<style>
    section {
        margin: 0;
        padding: 16px 20px;
        background-color: rgb(18, 0, 72);
        max-width: calc(100vw - 40px);
        color: white;
        text-align: center;
        line-height: 2em;
    }
    a {
        margin: 0 10px;
        font-weight: bold;
        color: white;
    }
    a:hover {
        text-decoration: underline;
    }
</style>