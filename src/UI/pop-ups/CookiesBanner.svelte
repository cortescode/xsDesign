<script lang="ts">
    import { browser } from '$app/environment';
    import { onMount } from 'svelte';
    import { getCookie, setCookie } from '$lib/cookies';

    let showing = false;
    
    let already_shown: boolean = false;

    const COOKIE_NAME = "cookies_banner_shown"

    $: {
        already_shown
    }

    onMount(() => {
        let value = getCookie(COOKIE_NAME)
        if(value)
            already_shown = true;
    })

    
    function manageWhetherShown() {
        if (browser) {	// client-only code here}
            if(!already_shown) {
                showing = true;
                already_shown = true;
                setCookie(COOKIE_NAME, "true", 30)
            }

        }
    }

</script>


<svelte:window on:scroll={manageWhetherShown}></svelte:window>

{#if showing}
    <article>
        <div class="text">
            <p>¡Hello! We use some cookies to gather data that allows us to offer you a better product.</p>
        </div>
        <div class="buttons">
            <button class="agree" on:click={() => showing=!showing }>Accept cookies</button>
            <button on:click={() => showing=!showing}>Reject</button>
        </div>
    </article>
{/if}

<style>

    article {
        position: fixed;
        padding: 16px 32px;
        height: fit-content;
        inset: 90vh 0 0 0;
        display: grid;
        grid-template-columns: 1fr auto;
        place-items: center;
        gap: 10px;
        background-color: white;
        box-shadow: rgba(4, 0, 80, 0.1) -10px 2px 16px;
        animation: appears .4s;
        max-width: calc(100% - 40px);
    }

    article p {
        font-size: 14px;
        max-width: 720px;

    }

    .text {
        width: 100%;
        display: grid;
        place-items: flex-start;
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
        background-color: var(--blue);
        color: white;

    }

    .buttons button:hover {
        box-shadow: rgba(4, 0, 80, 0.6) 0 2px 16px;
    }

    @media screen and (max-width: 767px) {
        article {
            display: grid;
            grid-template-columns: 1fr;
        }

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
