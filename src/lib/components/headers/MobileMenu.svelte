<script>

    import DefaultButton from '../buttons/DefaultButton.svelte';

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

    <div class="menu-page-wrapper"></div>
    <div class="mobile-menu" id="menu-content">
        <nav class="mobile-links-list">
            {#each links as { name, link }}
                {#if window.location.pathname == link}
                    <a class="link selected" href={link}>{name}</a>
                {:else }
                    <a class="link" href={link}>{name}</a>
                {/if}

            {/each}

            <div class="button-wrapper">
                <DefaultButton text={"Obtén tu web"} action={ () => {
                        location.href=buttonLink;
                        openCloseMenu();
                    } 
                }></DefaultButton>
            </div>
        </nav>
    </div>

{:else}
    <button class="mobile-button" type="button" on:click="{openCloseMenu}">
        <img class="open-icon" src="/media/assets/icons/menu.svg" alt="" srcset="/media/assets/icons/menu.svg">
    </button>
{/if}



<style>

    .button-wrapper {
        margin-top: 20px;
    }

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
        background-color: rgba(255, 255, 255, 0.4);
        backdrop-filter: blur(20px);
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

        .menu-page-wrapper {
            position: fixed;
            inset: 0 0 0 0;
            height: 100vh;
            width: 100vw;
            overflow: hidden;
        }

        .mobile-menu {
            position: fixed;
            inset: 0 0 0 auto;
            opacity: 1;
            background-color: rgba(255, 255, 255, 0.9);
            backdrop-filter: blur(10px);
            width: fit-content;
            padding: 40px;
            box-shadow: rgba(0, 60, 255, 0.4) 0 0 40px;
            height: calc(100vh - 80px);

            display: grid;
            place-items: center;
            animation: menuOpening .4s;

        }


        .mobile-links-list {
            display: block;
            opacity: 1;
            text-align: right;
            height: fit-content;
            
        }
    }


    @keyframes menuOpening {
        0% {
            transform: translateX(400px);
        }
        100% {
            transform: translateX(0px);
        }
    }

</style>