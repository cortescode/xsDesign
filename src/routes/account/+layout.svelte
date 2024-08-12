<script lang="ts">
    import Logo from "$UI/Logo.svelte";
    import BackButton from "$UI/buttons/BackButton.svelte";
    import { onMount } from "svelte";

    import { page } from "$app/stores";
    import { onDestroy } from "svelte";
    import { messages } from "$lib/stores/messages";
    import MessageView from "$UI/MessageView.svelte";

    let route: string = "";

    const unsubscribe = page.subscribe(($page) => {
        if ($page.route.id) route = $page.route.id;
    });

    onDestroy(() => {
        unsubscribe();
    });
</script>

<header>
    <div class="back-button-wrapper">
        <button
            class="back-button"
            on:click={() => (window.location.href = "/designer/")}
        >
            <svg width="20" height="20" viewBox="0 0 20 20">
                <path
                    d="M8.388,10.049l4.76-4.873c0.303-0.31,0.297-0.804-0.012-1.105c-0.309-0.304-0.803-0.293-1.105,0.012L6.726,9.516c-0.303,0.31-0.296,0.805,0.012,1.105l5.433,5.307c0.152,0.148,0.35,0.223,0.547,0.223c0.203,0,0.406-0.08,0.559-0.236c0.303-0.309,0.295-0.803-0.012-1.104L8.388,10.049z"
                ></path>
            </svg>
            Back
        </button>
    </div>

    <h2 class="gradient-text">Account Management</h2>
</header>

<slot/>

{#if $messages && $messages.length > 0}
    <MessageView message={$messages[$messages.length-1]}></MessageView>
{/if}

<style>
    header {
        box-sizing: border-box;
        display: grid;
        grid-template-columns: 40px 1fr 40px;
        align-items: center;
        gap: 20px;
        padding: 10px 20px;
        height: 60px;
        width: 100%;
        border-bottom: 1px solid var(--blue);
        background-color: white;
    }

    h2 {
        font-size: 24px;
    }

    h2,
    h3 {
        cursor: default !important;
    }

    header * {
        width: fit-content;
    }

    nav h3 {
        margin: 0 0 20px 0;
        padding: 10px 20px;
        font-size: 22px !important;
    }
    header h2 {
        justify-self: center;
        margin: 0;
    }

    .main {
        box-sizing: border-box;
        display: grid;
        grid-template-columns: 280px 1fr;
        height: 100%;
        background: linear-gradient(60deg, var(--light-blue), #eeeeee);
    }

    .main nav {
        box-sizing: border-box;
        height: calc(100vh - 60px);
        width: 100%;
        background-color: white;
        border-right: 1px solid var(--blue);
        padding: 60px 0px;
    }

    .main nav ul {
        padding: 0;
        margin: 0;
    }
    .main nav ul li {
        margin: 0;
        list-style: none;
        padding: 0;
        width: 100%;
    }

    .main nav ul li a {
        display: block;
        padding: 10px 20px;
        font-size: 18px;
    }
    .main nav ul li h3 {
        display: block;
        padding: 10px 20px;
        font-size: 18px;
    }
    .main nav ul li a:hover {
        background-color: var(--blue);
        color: white;
    }

    a.selected {
        background-color: var(--light-blue);
        font-weight: bold;
        color: var(--blue);
    }

    .back-button {
        display: grid;
        grid-template-columns: auto 1fr;
        align-items: center;
        gap: 20px;
        font-size: 18px;
        text-align: left;
        padding: 6px 18px 6px 12px;
        height: fit-content;
        border-radius: 12px;
        background-color: white;
        border: 1px solid var(--blue);
        width: fit-content;
    }

    .back-button:hover {
        background-color: white;
    }

    .back-button svg {
        transition: padding 0.1s ease-in;
    }
    .back-button:hover svg {
        padding-right: 20px;
    }
</style>
