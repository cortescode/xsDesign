<!-- ------------------------------------------ J S ------------------------------------------ -->
<script lang="ts">
    import { user } from '$lib/stores/session';
    
    import Logo from '../Logo.svelte';
    import DefaultButton from '../buttons/DefaultButton.svelte';
    import MobileMenu from './MobileMenu.svelte';
    import { onMount } from 'svelte';


    export let buttonText: string;
    export let buttonLink: string;


    export let links = [
      { name: 'home', link: '/' },
      { name: 'servicios', 
        sublinks: [
            { name: 'Diseño de páginas web', link: '/services/web-design' },
            { name: 'Embudos de venta', link: '/services/sales-funnel' },
            { name: 'Desarrollo de aplicaciones', link: '/services/web-development' },
            { name: 'Posicionamiento Seo', link: '/services/seo-positioning' }
        ]},
        { name: 'ebook gratuito', link: '/resources/lead-magnet' },
        { name: 'iniciar sesión', link: '/auth/login' }
    ];

    let pathname = "";

    onMount(() => {
        pathname = window.location.pathname;
    })

    

    function setSelectedLink() {
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
        
        <div class="links-wrapper">
            <nav class="links-list">
                {#each links as link}
                    {#if (pathname.includes(link['link']) && link['link'].length > 1) || pathname == link }
                        <a class="link selected" href={link['link']} on:click={setSelectedLink}>
                            <span>{link['name']}</span>
                        </a>
                    {:else}
                        {#if 'sublinks' in link}
                            <span class="link">
                                <span>{link['name']}</span>
                                <div class="floating-links">
                                    {#each link['sublinks'] as sublink}
                                    <a href="{sublink['link']}">
                                        {sublink['name']}
                                    </a>
                                    {/each}
                                </div> 
                            </span>
                        {:else }
                            <a class="link" href={link['link']} on:click={setSelectedLink}>
                                <span>{link['name']}</span>
                            </a>

                        {/if}
                    {/if}
    
                {/each}
            </nav>
            <div class="button-container">
                    <DefaultButton text={buttonText} action={ () => location.href=buttonLink}></DefaultButton>
            </div>
    
        </div>
        <MobileMenu links={links} buttonText={buttonText} buttonLink={buttonLink}></MobileMenu>

    </div>
</header>




<!-- ------------------------------------------ C S S ------------------------------------------ -->
<style>
    header {
        background-color: rgb(255, 255, 255);

        position: sticky;
        height: fit-content;
        inset: 0 0 auto 0;
        z-index: 40;

        box-shadow: rgba(4, 0, 80, 0.1) -10px 2px 16px;
    }

    .header-content {
        display: grid;
        grid-template-columns: 1fr auto;
        align-items: center;
        justify-items: center;
        max-width: 1280px;
        margin: 0 auto;
        padding: 6px 0;

    }

    .links-wrapper {
        display: grid;
        grid-template-columns: 1fr auto;
    }
    
    .links-list{
        display: flex;
        align-items: center;
        justify-content: center;
    }


    .link {
        padding: 10px 0 10px 0;
        margin: 4px 22px 4px 20px;
        text-decoration: none;
        color: #333;
        transition: .2s;
    }

    .link:hover {
        border-bottom: 2px solid var(--blue);
        font-weight: bold;
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

    .floating-links {
        display: grid;
        grid-template-columns: 1fr 1fr;
        opacity: 0;
        transform: scale(0);
        position: fixed;
        background-color: white;
        box-shadow: rgba(0, 60, 255, 0.2) 0 0 40px;
        inset: 72px auto auto auto;
        width: 340px;
        border: 1px solid var(--default-blue);
        border-radius: 8px;
        z-index: 10;
        transition: opacity, transform .4s;
    }


    .floating-links a{
        display: block;
        font-weight: 400;
        padding: 20px 20px;
        border-bottom: 1px solid var(--default-blue);
        line-height: 1.4em;
        border-radius: 8px;
        transition: .2s;
    }

    .floating-links a:hover{
        font-weight: 600;
        background-image: radial-gradient(100% 100% at 100% 0, #5adaff 0, #5468ff 100%);
        box-shadow: rgba(0, 60, 255, 0.2) 0 0 40px;
        transform: scale(1.04);
        color: white;
    }
   
    .link:hover .floating-links {
        transform: scale(1);
        opacity: 1;
    }
    .link:not(:hover) .floating-links {
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
        margin-left: 10px;
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
        
        .links-wrapper {
            display: none;
        }

        .button-container {
            display: none;
        }
    }


</style>

