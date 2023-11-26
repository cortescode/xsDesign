<script>
    import { browser } from '$app/environment';

    let showing = false;
    let already_shown = false;

    function manageWhetherShown() {
        if (browser) {	// client-only code here}
            if(!already_shown && window.sessionStorage.getItem("already_shown") == null) {
                showing = true;
                already_shown = true;
                window.sessionStorage.setItem("already_shown", true);
            }

        }
    }

</script>


<svelte:window on:scroll={manageWhetherShown}></svelte:window>

{#if showing}
    <article>
        <p>¡Hola! Utilizamos alguna que otra cookie para mejorar nuestro rendimiento de marketing y poder conocer más a nuestros clientes, todo lo guardamos de forma 100% anónima (por lo que tu privacidad está a salvo)</p>
        <div class="buttons">
            <button class="agree" on:click={() => showing=!showing }>Aceptar cookies</button>
            <button on:click={() => showing=!showing}>Rechazar</button>
        </div>
    </article>
{/if}

<style>

    article {
        position: fixed;
        padding: 20px;
        height: fit-content;
        inset: auto 0 0 0;
        display: grid;
        grid-template-columns: 1fr;
        place-items: center;
        text-align: center;
        gap: 10px;
        background-color: white;
        box-shadow: rgba(4, 0, 80, 0.1) -10px 2px 16px;
        animation: appears .4s;
    }

    article p {
        font-size: 14px;
        max-width: 720px;
    }

    .buttons {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 20px;
        width: fit-content;
    }

    .buttons button {
        padding: 8px 16px;
        border: 2px solid var(--blue);
        border-radius: 24px;
        transition: .2s;
        background-color: white;
    }

    .buttons button.agree {
        background-image: radial-gradient(100% 100% at 100% 0, #5adaff 0, #5468ff 100%);
        color: white;

    }

    .buttons button:hover {
        box-shadow: rgba(4, 0, 80, 0.6) 0 2px 16px;
    }
    
    @keyframes appears {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }

</style>
