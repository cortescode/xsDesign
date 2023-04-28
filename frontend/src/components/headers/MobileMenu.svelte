<script>

    import { user } from '../../lib/session.js';

    export let links;
    export let buttonLink;
    export let buttonText;


    let isClicked = false;


    // This function is called when html button is pressed
    function openCloseMenu () {
        isClicked = isClicked? false : true;
    }
</script>


{#if isClicked}
    <button class="mobile-button" type="button" on:click="{openCloseMenu}">
        <img class="close-icon" src="/media/assets/icons/cross.svg" alt="" srcset="/media/assets/icons/cross.svg">
    </button>

    <div class="mobile-menu" id="menu-content">
        <nav class="mobile-links-list">
            {#each links as { name, link }}
                {#if window.location.pathname == link}
                    <a class="link selected" href={link}>{name}</a>
                {:else }
                    <a class="link" href={link}>{name}</a>
                {/if}

            {/each}
            {#if ($user == null) || !("username" in $user) }
                <a href="/auth/login" class="link">Acceder</a>
                <a href="{buttonLink}" class="gradient-button">{ buttonText }</a>
            {:else }
                <a href="/auth/logout" class="link">Logout</a>
                <a href="/dashboard" class="gradient-button">Dashboard</a>
            {/if}
        </nav>
    </div>

    {:else}
    <button class="mobile-button" type="button" on:click="{openCloseMenu}">
        <img class="open-icon" src="/media/assets/icons/menu.svg" alt="" srcset="/media/assets/icons/menu.svg">
    </button>
{/if}



<style>


    .link {
        padding-right: 10px;
        margin: 4px 10px;
        text-decoration: none;
        color: #333;
        position: relative;
        text-align: right;
    }

    .link.selected {
        font-weight: bold;
        transform: scale(1.08);
        background: linear-gradient(to right, #764ba2, #667eea);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        text-decoration: underline;
    }

    .mobile-menu {
        display: none;
        opacity: 0;
        transition: .2s;
    }
    
    .mobile-button {
        display: none;
        height: 40px;
        width: 40px;
        background-color: white;
        border-radius: 50%;
        position: relative;
        z-index: 25;
        border: none;
        padding: 0;
        margin: 0;
    }

    .mobile-button img {
        width: 32px;
        border-radius: 50%;
    }

    .mobile-button:hover {
        transform: scale(1.1);
    }
    .mobile-button:active {
        transform: scale(.6);
    }



    @media screen and (max-width: 767px) {


        .link {
            display: block;
            font-size: 18px;
            padding: 20px 10px;
        }
        

        .mobile-button {
            justify-self: right;
            display: block;
        }


        .mobile-menu {
            position: absolute;
            inset: 0 0 0 auto;
            opacity: 1;
            background-color: white;
            width: fit-content;
            padding: 40px;
            box-shadow: rgba(0, 60, 255, 0.4) 0 0 40px;
            height: 100vh;

            display: grid;
            place-items: center;
        }

        .mobile-links-list {
            display: block;
            opacity: 1;
            text-align: right;
            height: fit-content;
            
        }
    }

</style>