<!-- ------------------------------------------ J S ------------------------------------------ -->
<script>
    import Header from '$lib/components/headers/DashboardHeader.svelte';

    import Overview from '$lib/designer/components/services/Overview.svelte'
    import Analytics from '$lib/designer/components/services/Analytics.svelte';
    import Emails from '$lib/designer/components/services/Emails.svelte';
    import Webpage from '$lib/designer/components/services/Webpage.svelte';
    import { onMount } from 'svelte';

    export let data;


    let services = {
        'overview': Overview,
        'analytics': Analytics,
        'webpage': Webpage,
        'emails': Emails,
    }

    let active_service = services['webpage']

</script>


<!-- ------------------------------------------ H T M L ------------------------------------------ -->
<svelte:head>
    <title>Dashboard | XS Design</title>
</svelte:head>
<section class="dashboard">
    <Header></Header>
    
    <div class="left-menu">
        <nav>
            <ul>
                <li>
                    <button class="left-menu-button active-button">
                        <img class="left-svg" src="/media/assets/icons/home.svg" style="margin-bottom: 4px;" alt=" " srcset="/media/assets/icons/home.svg"> 
                        Web
                    </button>
                </li>
                <li>
                    <button class="left-menu-button">
                        <img class="left-svg" src="/media/assets/icons/graph-file.svg" alt=" " srcset="/media/assets/icons/graph-file.svg"> 
                        Formulario
                    </button>
                </li>

                <li>
                     <button class="left-menu-button">
                        <img class="left-svg" src="/media/assets/icons/data.svg" alt=" " srcset="/media/assets/icons/data.svg"> 
                        Pruebas
                     </button>
                </li>
            </ul>
        </nav>
    </div>
    <div class="service">
    	<svelte:component this={active_service} {data}/>
    </div>
    <div>
        
    </div>
</section>


<!-- ------------------------------------------ C S S ------------------------------------------ -->
<style>
    .dashboard {
        display: grid;
        grid-template-columns: 10;
        grid-template-rows: 10;
        padding: 0;
        margin: 0;

        max-height: 100vh;
        max-width: 100vw;

        overflow: hidden;
    }

    .left-menu {
        grid-column: 1 / span 1;
        grid-row: 2 / span 9;

        width: 100%;
        max-height: 100vh;
        min-width: 200px;
        
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 1fr 5fr 1fr;
        align-items: center;
        background-color: white;
        border-right: 1px solid rgba(21, 10, 93, 0.1);
    }

    .left-menu ul {
        list-style: none;
        align-items: center;
        width: 100%;
        margin: 80px 0 20px 0;
        padding: 0;
    }
    .left-menu li {
        list-style: none;
        margin: 0;
        padding: 0;
    }
    .left-menu-button {
        font-size: 14px;
        padding: 20px 20px;
        border: none;
        color: rgb(0, 4, 37);
        background-color: white;
        text-align: left;
        display: flex;
        align-items: center;
        transition: .2s;
    }

    .left-menu-button:hover {
        font-size: 16px;
        background-color: aliceblue;
        cursor: pointer;
        background: linear-gradient(to right, #764ba2, #667eea);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        text-decoration: underline;
    }

    .active-button {
        font-size: 18px;
        background-color: aliceblue;
        cursor: pointer;
        background: linear-gradient(to right, #764ba2, #667eea);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        text-decoration: underline;

    }

    .service {
        grid-column-start: 2;
        grid-column-end: 10;
        grid-row-start: 2;
        grid-row-end: 10;

        padding: 10px 20px;
        overflow-y: scroll;
        overflow-x: hidden;

        width: 100%;
        height: 100%;
    }

</style>