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
        let cookie_value = getCookie(COOKIE_NAME)
        if(cookie_value)
            already_shown = true;
    })

    
    function manageWhetherShown() {
        if (browser) {	// client-only code here}
            if(!already_shown) {
                showing = true;
            }

        }
    }

    function acceptCookies() {
        showing = !showing;
        already_shown = true;
        setCookie(COOKIE_NAME, "true", 30)
    }

</script>


<svelte:window on:scroll={manageWhetherShown}></svelte:window>

{#if showing}
    <div class="wrapper">
        <article>
            <div class="image-wrapper">
                <img alt="cookie" src="/media/assets/cookie.png"/>
            </div>
            <div class="text">
                <p>¡Hello! We use some cookies to gather data that allows us to offer you a better product.</p>
            </div>
            <div class="buttons">
                <button class="agree" on:click={() => acceptCookies() }>Accept cookies</button>
                <button on:click={() => {
                    showing=!showing
                    already_shown=true;
                }}>Reject</button>
            </div>
        </article>
    </div>
{/if}

<style>

    .wrapper {
        box-sizing: border-box;
        position: fixed;
        inset: 0;
        width: 100vw;
        height: 100vh;
        display: grid;
        place-items: flex-end flex-start;
        padding: 40px;
        z-index: 100;
    }

    article {
        box-sizing: border-box;
        padding: 16px 32px;
        height: fit-content;
        display: grid;
        grid-template-columns: 1fr;
        place-items: center;
        gap: 20px;
        background-color: white;
        box-shadow: rgba(4, 0, 80, 0.1) -10px 2px 16px;
        animation: appears .4s;
        width: calc(100% - 40px);
        max-width: 400px;
        border-radius: 24px;
    }


    .image-wrapper {
        width: fit-content;
        justify-self: flex-end;
        margin: -60px -60px 0 0;
    }

    .image-wrapper img {
        width: 80px;
    }

    article p {
        font-size: 14px;
        max-width: 720px;
        text-align: center;

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

    .buttons button.agree:hover {
        background-color: rgb(13, 4, 27);
        box-shadow: rgb(48, 63, 200) 0 0 120px 0;
    }

    .buttons button:hover {
        box-shadow: rgba(4, 0, 80, 0.6) 0 2px 16px;
    }

    @media screen and (max-width: 767px) {

        .wrapper {
            place-items: center center;
            padding: 10px;
            background-color: rgba(0, 0, 0, 0.2);
        }
        article {
            display: grid;
            grid-template-columns: 1fr;
            border-radius: 20px;
            padding: 16px;
        }

        .image-wrapper {
            margin: -40px -40px 0 0;
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
