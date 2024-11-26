<!-- ------------------------------------------ J S ------------------------------------------ -->
<script lang="ts">
    import { onMount } from 'svelte';
    import Logo from '../Logo.svelte';


    let y: number;

    $: y;

</script>
  


<!-- ------------------------------------------ H T M L ------------------------------------------ -->
<header class="header">
    <div class="header-content">
        <Logo></Logo>

        <div class="button-container">
            <!-- <a href="/agency">Web Agency</a> -->
            <!-- <a href="/pricing">Made with xsdesign</a> -->
            <a class="hide-on-mobile" href="/pricing">Pricing</a>
            <a class="hide-on-mobile" href="/blog">Blog</a>
            <a href="/auth/login">Login</a>
            <a href="/auth/signup" class="cta">Access Beta for Free</a>
        </div>
    </div>

    {#if y > 50}

        <a href="/auth/signup" class="cta-mobile animate">Access Beta for Free</a>
    {/if}
    
</header>


<svelte:window bind:scrollY={y} />


<!-- ------------------------------------------ C S S ------------------------------------------ -->
<style>

    header {
        position: sticky;
        inset: 0 0 auto 0;
        z-index: 10;
        padding: 12px 24px;
        width: auto;
        /* 
        backdrop-filter: blur(50px);
        box-shadow: rgba(4, 0, 80, 0.1) -10px 2px 20px;
        */

    }
    .header-content {
        display: grid;
        grid-template-columns: auto 1fr;
        align-items: center;
        justify-items: center;
        height: auto;
        max-width: 1280px;
        margin: 0 auto;
    }

    .button-container {
        justify-self: right;
    }


    a {
        background: white;
        padding: 10px 20px;
        border-radius: 12px;
        text-decoration: none;
        font-size: 16px;
        transition: .2s;
        margin-left: 20px;
    }
    a:hover {
        color: white;
        background: rgb(13, 4, 27);
        box-shadow: rgb(48, 63, 200) 0 0 120px 0;
    }

    .cta {
        color: white;
        background: rgb(67, 28, 225);
    }


    /* BUTTONS STYLES */

    .button-container {
        display: flex;
        justify-content: right;
        align-items: center;
    }

    .button-container a {
        display: flex;
        justify-content: right;
        align-items: center;
    }

    .button-container a img {
        width: 18px;
    }

    .cta-mobile {
        display: none;
    }

    @media screen and (max-width: 850px) {
        .cta {
            display: none !important;
        }

        .cta-mobile {
            display: grid !important;
            justify-content: center !important;
            align-items: center !important;
            position: fixed;
            height: 40px;
            inset: auto 10px 10px 10px;
            width: calc(100% - 20px);
            margin: 0 !important;
            padding: 10px 0 !important;
            color: white;
            background-color: var(--blue);
        }

        .cta-mobile:hover{
            background-color: var(--dark);
            box-shadow: rgb(48, 63, 200) 0 0 120px 0;
        }

        .hide-on-mobile {
            display: none !important;
        }

    }

</style>

