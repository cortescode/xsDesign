<!-- ------------------------------------------ J S ------------------------------------------ -->
<script>
    import { user } from '../../services/session.js';

    export let buttonText;
    export let buttonLink;

    let links = [
      { name: 'home', link: '/' },
      { name: 'app', link: '/app' },
      { name: 'contacto', link: '/contact' }
    ];


    let isClicked = false;

    // This function is called when html button is pressed
    function openCloseMenu () {
        isClicked = isClicked? false : true;
    }
 
</script>
  


<!-- ------------------------------------------ H T M L ------------------------------------------ -->
<header id="header">
    <div class="logo-container">
        <a href="/">
            <h1 class="logo logo-header">XS Design</h1>
        </a>
    </div>
  
    <nav class="links-list">
        {#each links as { name, link }}
            {#if window.location.pathname == link}
                <a class="link selected" href={link}>{name}</a>
            {:else }
                <a class="link" href={link}>{name}</a>
            {/if}

        {/each}
    </nav>
    <div class="button-container">
        {#if ($user == null) || !("username" in $user) }
            <a href="/auth/login" class="login-link">Acceder</a>
            <button onclick="location.href='{buttonLink}'" class="gradient-button">{ buttonText }</button>
        {:else }
            <a href="/auth/logout" class="login-link">Logout</a>
            <button onclick="location.href='/dashboard'" class="gradient-button">Dashboard</button>
        {/if}
    </div>


    {#if isClicked}

        <button class="mobile-button" type="button" on:click="{openCloseMenu}">
            <img class="close-icon" src="./media/assets/icons/cross.svg" alt="" srcset="./media/assets/icons/cross.svg">
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
            </nav>
            <div class="mobile-button-container">
                {#if ($user == null) || !("username" in $user) }
                    <a href="/auth/login" class="login-link">Acceder</a>
                    <button href="location.href='{buttonLink}'" class="gradient-button">{ buttonText }</button>
                {:else }
                    <a href="/auth/logout" class="login-link">Logout</a>
                    <button onclick="location.href='/dashboard'" class="gradient-button">Dashboard</button>
                {/if}
            </div>
        </div>

    {:else}
        <button class="mobile-button" type="button" on:click="{openCloseMenu}">
            <img class="open-icon" src="./media/assets/icons/menu.svg" alt="" srcset="./media/assets/icons/menu.svg">
        </button>
    {/if}
 
</header>




<!-- ------------------------------------------ C S S ------------------------------------------ -->
<style>
    header {
        display: grid;
        grid-template-columns: 1fr 4fr 1fr;
        align-items: center;
        justify-items: center;
        background-color: rgb(255, 255, 255);
        padding: 0 40px;
        width: calc(100% - 80px);

        position: sticky;
        inset: 0 0 auto 0;
        z-index: 40;

        box-shadow: rgba(4, 0, 80, 0.1) -10px 2px 16px;
    }

    .logo-header {
        font-size: 24px;
        width: auto;
        align-items: center;
        justify-self: flex-start;
    }

    .links-list{
        display: flex;
        align-items: center;
        justify-content: center;
    }

    a {
        margin: 0;
        padding: 0;
        text-decoration: none;
        color: #333;
        transition: .2s;
    }
    a:hover {
        font-weight: bold;
        transform: scale(1.08);
        background: linear-gradient(to right, #764ba2, #667eea);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        text-decoration: underline;
    }

    .link {
        padding-right: 10px;
        margin: 4px 10px;
        text-decoration: none;
        color: #333;
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

    .login-link {
        padding-right: 10px;
        margin-right: 10px;
        border-right: 1px solid rgb(0, 8, 73);
        margin: 4px 10px;
        text-decoration: none;
        color: #333;
    }


    /* BUTTONS STYLES */

    .button-container {
        display: flex;
        justify-content: right;
        align-items: center;
    }

    .mobile-button {
        display: none;
        height: 40px;
        width: 40px;
        background-color: white;
        border-radius: 50%;
        transition: .2s;
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
        header {
            display: grid;
            grid-template-columns: 1fr 1fr;
            align-items: center;
            justify-items: center;
            background-color: rgb(255, 255, 255);
            padding: 0 20px;
            width: calc(100% - 40px);

            position: sticky;
            inset: 0 0 auto 0;
            overflow: visible;
            z-index: 40;

            box-shadow: rgba(4, 0, 80, 0.1) -10px 2px 16px;
        }

        .logo-container {
            justify-self: left;
        }


        .mobile-button {
            justify-self: right;
            display: block;
        }



        .link {
            display: block;
            font-size: 18px;
            padding: 20px 10px;
        }
        

        .links-list {
            display: none;
        }

        .button-container {
            display: none;
        }

        .mobile-menu {
            position: absolute;
            inset: 0 0 0 auto;
            background-color: white;
            width: 60%;
            height: 100vh;

            display: grid;
            place-items: center;
        }

        .mobile-links-list {
            display: block;
            text-align: left;
            align-self: flex-end;
            
        }
        .mobile-button-container {
            display: block;
            align-self: flex-start;
        }

        .mobile-button-container a {
            display: block;
            font-size: 18px;
            padding: 20px 10px;
            border: none;
        }
    }


</style>

