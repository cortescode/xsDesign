<!-- ------------------------------------------ J S ------------------------------------------ -->
<script>
    import { onMount } from 'svelte';
    import DarkLogo from '../DarkLogo.svelte'


</script>
  


<!-- ------------------------------------------ H T M L ------------------------------------------ -->
<header class="header">
    <div class="header-content">
        <DarkLogo></DarkLogo>

        <div class="button-container">
            <a href="/contact">Acceder a la fase Alpha</a>
        </div>
    </div>
    
    
</header>




<!-- ------------------------------------------ C S S ------------------------------------------ -->
<style>

    header {
        position: sticky;
        inset: 0 0 auto 0;
        z-index: 10;
        padding: 12px 24px;
        width: auto;
        background-color:rgba(30, 12, 47, .6);
        backdrop-filter: blur(50px);

        box-shadow: rgba(4, 0, 80, 0.1) -10px 2px 20px;

    }
    .header-content {
        display: grid;
        grid-template-columns: 1fr 1fr;
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
        background: rgb(67, 28, 225);
        padding: 10px 20px;
        border-radius: 12px;
        color: white;
        text-decoration: none;
        font-size: 16px;
        transition: .2s;
    }
    a:hover {
        background: rgb(13, 4, 27);
        box-shadow: rgb(48, 63, 200) 0 0 120px 0;
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


</style>

