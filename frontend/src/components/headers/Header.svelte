<!-- ------------------------------------------ J S ------------------------------------------ -->
<script>
    import { user, logout } from '../../lib/session.js';

    import Logo from '../Logo.svelte'
    import ServicesLinkBanner from './ServicesLinkBanner.svelte';
    import MobileMenu from './MobileMenu.svelte';
    import { onMount } from 'svelte';

    export let buttonText;
    export let buttonLink;

    let links = [
      { name: 'home', link: '/' },
      { name: 'servicios +', link: '/agency/services'},
      { name: 'contacto', link: '/agency/contact' }
    ];

    let pathname = "";

    $: {
        links;
    }

    onMount(() => {
        pathname = window.location.pathname;
        console.log(pathname)
    })

    function setSelectedLink(event) {
        setTimeout(() => {
            pathname = window.location.pathname;
            links = links;
        }, 100)
        

    }
</script>
  


<!-- ------------------------------------------ H T M L ------------------------------------------ -->
<header id="header">
    <div class="header-content">
        <Logo></Logo>
  
        <nav class="links-list">
            {#each links as { name, link }}
                {#if (pathname.includes(link) && link.length > 1) || pathname == link }
                    <a class="link selected" href={link} on:click={setSelectedLink}>
                        <span>{name}</span>
                    </a>
                {:else if name == 'servicios +'}
                    <a class="link expanded-link" href={link} on:click={setSelectedLink}>
                        <span>{name}</span>
                        <div class="expanded-links">
                            <ServicesLinkBanner></ServicesLinkBanner>
                        </div>
                    </a>
                {:else}
                    <a class="link" href={link} on:click={setSelectedLink}>
                        <span>{name}</span>
                    </a>
                {/if}

            {/each}
        </nav>
        <div class="button-container">
            {#if ($user == null) || !("username" in $user) }
                <a href="/auth/login" class="login-link">Acceder</a>
                <button onclick="location.href='{buttonLink}'" class="gradient-button">{ buttonText }</button>
            {:else }
                <a class="login-link" on:click={logout}>Cerrar sesión</a>
                <button onclick="location.href='/platform/dashboard'" class="gradient-button">Dashboard</button>
            {/if}
        </div>

        <MobileMenu links={links} buttonText={buttonText} buttonLink={buttonLink}></MobileMenu>

    </div>
</header>




<!-- ------------------------------------------ C S S ------------------------------------------ -->
<style>
    header {
        background-color: rgb(255, 255, 255);

        position: sticky;
        inset: 0 0 auto 0;
        z-index: 40;

        box-shadow: rgba(4, 0, 80, 0.1) -10px 2px 16px;
    }

    .header-content {
        display: grid;
        grid-template-columns: 1fr 2fr 1fr;
        align-items: center;
        justify-items: center;
        max-width: 1280px;
        margin: 0 auto;

    }
    
    .links-list{
        display: flex;
        align-items: center;
        justify-content: center;
    }


    .link {
        padding-right: 10px;
        margin: 4px 10px;
        text-decoration: none;
        color: #333;
    }

    .link:hover > span {
        background: linear-gradient(to right, #667eea, #764ba2);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
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

    .link .expanded-links {
        transform: scale(0);
        opacity: 0;
        position: fixed;
        inset: 52px 0 auto 0;
        display: flex;
        justify-content: center;
        font-weight: 400;
        width: 100vw;
        transition: .4s;
        transition-delay: 0 .6s;
    }

    .link:hover .expanded-links {
        transform: scale(1);
        opacity: 1;
        color: white;
    }
    .link:not(:hover) .expanded-links {
        transition-delay: .2s;
    }

    .login-link {
        padding-right: 10px;
        margin-right: 10px;
        border-right: 1px solid rgb(0, 8, 73);
        margin: 4px 10px;
        text-decoration: none;
        color: #333;
    }

    .login-link:hover {
        background: linear-gradient(to right, #667eea, #764ba2);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }


    /* BUTTONS STYLES */

    .button-container {
        display: flex;
        justify-content: right;
        align-items: center;
        width: 100%;
    }

    @media screen and (max-width: 767px) {
        header {
            background-color: rgb(255, 255, 255);
            padding: 8px 20px;
            width: calc(100% - 40px);

            position: sticky;
            inset: 0 0 auto 0;
            overflow: visible;
            z-index: 40;

            box-shadow: rgba(4, 0, 80, 0.1) -10px 2px 16px;
        }

        .header-content {
            display: grid;
            grid-template-columns: 1fr 1fr;
            align-items: center;
            justify-items: center;
        }


        .links-list {
            display: none;
        }

        .button-container {
            display: none;
        }
    }


</style>

