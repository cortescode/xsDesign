<script lang="ts">
    import Logo from '$lib/components/Logo.svelte';

    import { goto } from "$app/navigation"
    import { user, isLoggedIn } from '$lib/stores/session';
    import SignInWithGoogleButton from '$lib/components/SignInWithGoogleButton.svelte';
    if($user) {
        goto("/", { replaceState: true })
    }
    

    function backToLastPage(event: Event) {

        goto("/", { replaceState: true })
    }

</script>
<!-- ------------------------------------------ H T M L ------------------------------------------ -->
<svelte:head>
    <title>Inicia sesión | XS Design</title>
</svelte:head>
<section class="auth-page">
    <div class="form-container animate">
        <div class="back-button-wrapper">
            <button on:click={backToLastPage}> 
                <svg width="20" height="20" viewBox="0 0 20 20">
                    <path d="M8.388,10.049l4.76-4.873c0.303-0.31,0.297-0.804-0.012-1.105c-0.309-0.304-0.803-0.293-1.105,0.012L6.726,9.516c-0.303,0.31-0.296,0.805,0.012,1.105l5.433,5.307c0.152,0.148,0.35,0.223,0.547,0.223c0.203,0,0.406-0.08,0.559-0.236c0.303-0.309,0.295-0.803-0.012-1.104L8.388,10.049z"></path>
                </svg>   
                Back 
            </button>
        </div>
        <slot></slot>
            
        <div class="divider"></div>
        <SignInWithGoogleButton></SignInWithGoogleButton>
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
        max-width: calc(100vw - 20px);
        height: calc(100vh - 20px);
        padding: 10px;
        display: grid;
        place-items: center;
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


    @media screen and (max-width: 767px) {
        .form-container {
            max-width: none !important;
        }
    }

</style>