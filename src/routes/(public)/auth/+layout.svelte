<script lang="ts">
    import Logo from '$UI/Logo.svelte';
    import { onMount } from 'svelte';
    import { goto } from "$app/navigation"
    import { user, isLoggedIn } from '$auth/stores/session';
    import SignInWithGoogleButton from "$auth/components/SignInWithGoogleButton.svelte"
    import BackButton from '$UI/buttons/BackButton.svelte';

    const {data, children} = $props();
    console.log("data: ", data);
    let redirect_to = data.redirect_to;
    console.log("redirect_to: ", redirect_to);

</script>
<!-- ------------------------------------------ H T M L ------------------------------------------ -->
<svelte:head>
    <title>Inicia sesión | XS Design</title>
</svelte:head>
<section class="auth-page">
    <div class="form-container animate">
        <div class="back-button-wrapper">
            <BackButton></BackButton>
        </div>
        {@render children?.()}
            
        <div class="divider"></div>
        {#if redirect_to}
            <SignInWithGoogleButton {redirect_to}></SignInWithGoogleButton>
        {:else}
            <SignInWithGoogleButton></SignInWithGoogleButton>
        {/if}
    </div>
</section>


<style>

    .back-button-wrapper {
        width: fit-content;
        height: fit-content;
        color: var(--dark);
        fill: var(--dark);
    }

    .back-button-wrapper button {
        display: grid;
        grid-template-columns: auto 1fr;
        align-items: center;
        gap: 20px;
        font-size: 18px;
        text-align: left;
        padding: 6px 18px 6px 12px;
        border-radius: 12px;
        margin-bottom: 40px;
        border: 1px solid var(--blue);
        background-color: white;
    }

    .back-button-wrapper button:hover {
        background-color: white;
    }

    .back-button-wrapper svg {
        transition: padding .1s ease-in;
    }
    .back-button-wrapper:hover svg {
        padding-right: 20px;
    }


    .divider {
        width: 100%;
        height: 1px;
        background-color: rgb(255, 70, 70);
        border-radius: 2px;
        
        margin-top: 20px;
    }

    .auth-page {
        background: linear-gradient(-45deg, #dad4fd, #a595ff, #de9c76, var(--blue), var(--dark));
        background-size: 400% 400%;
        animation: gradient 20s ease infinite;
        max-width: calc(100vw - 20px);
        height: calc(100vh - 20px);
        padding: 10px;
        display: grid;
        place-items: center;
        margin: 0;
    }

    .form-container {
        margin: 0 auto;
        margin-block: 0;
        width: auto;
        max-width: 360px;
        height: fit-content;
        padding: 20px;
        box-shadow: rgba(0, 62, 155, 0.2) 0 -0 40px;
        background-color: white;
        border-radius: 8px;

    }


    @keyframes gradient {
        0% {
            background-position: 0% 50%;
        }
        50% {
            background-position: 100% 50%;
        }
        100% {
            background-position: 0% 50%;
        }
    }


    @media screen and (max-width: 767px) {
        .form-container {
            max-width: none !important;
        }
    }

</style>