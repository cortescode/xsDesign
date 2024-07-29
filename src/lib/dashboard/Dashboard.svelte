<!-- ------------------------------------------ J S ------------------------------------------ -->
<script lang="ts">
    import Header from '$UI/headers/DashboardHeader.svelte';

    import Websites from './services/Websites.svelte';
    import Feedback from './services/Feedback.svelte';
    import Logout from '$auth/components/Logout.svelte';


    export let data: any;


    let services = [
        {
            "name": "Sites",
            "component": Websites,
        },
        {
            "name": "Give us Feedback",
            "component": Feedback,
        }
    ]

    let active_service: any = services[0]

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
                {#each services as service, index }
                    <li>
                        <button class="left-menu-button { 
                                (active_service["name"]==service["name"]) ? "active" : "" 
                        }" on:click={() => active_service = service}>

                            <svg class="svg-icon" viewBox="0 0 20 20">
                                <path d="M17.701,3.919H2.299c-0.223,0-0.405,0.183-0.405,0.405v11.349c0,0.223,0.183,0.406,0.405,0.406h15.402c0.224,0,0.405-0.184,0.405-0.406V4.325C18.106,4.102,17.925,3.919,17.701,3.919 M17.296,15.268H2.704V7.162h14.592V15.268zM17.296,6.352H2.704V4.73h14.592V6.352z M5.947,5.541c0,0.223-0.183,0.405-0.405,0.405H3.515c-0.223,0-0.405-0.182-0.405-0.405c0-0.223,0.183-0.405,0.405-0.405h2.027C5.764,5.135,5.947,5.318,5.947,5.541"></path>
                            </svg>
                            {service["name"]}
                        </button>
                    </li>
                {/each}

            </ul>
        </nav>
        <div class="bottom-buttons">
            <Logout/>
        </div>
    </div>
    <div class="service">
    	<svelte:component this={ active_service["component"] } {data}/>
    </div>
    <div>
        
    </div>
</section>


<!-- ------------------------------------------ C S S ------------------------------------------ -->
<style>

    * {
        box-sizing: border-box;
    }
    .dashboard {
        display: grid;
        grid-template-columns: 280px 1fr;
        grid-template-rows: 1fr;
        padding: 0;
        margin: 0;

        max-height: 100vh;
        max-width: 100vw;

        overflow: hidden;
    }

    .left-menu {
        grid-column: 1 / span 1;

        width: 100%;
        height: 100%;
        min-width: 200px;
        max-width: 280px;
        
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 5fr 1fr;
        align-items: center;
        background-color: white;

        border-right: 1px solid var(--blue);
    }

    .left-menu .bottom-buttons {
        border-top: 1px solid var(--blue);
    }

    .left-menu .bottom-buttons a {
        display: block;
        padding: 20px 20px;
        text-decoration: none;
        font-size: 18px;
    }

    .left-menu .bottom-buttons a:hover{
        background-color: var(--blue);
        color: white;
    }

    .left-menu nav {
        height: 100%;
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
        font-size: 16px;
        padding: 20px 20px;
        border: none;
        color: var(--dark);
        background-color: white;
        text-align: left;
        display: flex;
        align-items: center;
        width: 100%;
    }

    .left-menu-button.active {
        font-size: 16px;
        cursor: pointer;
        background: var(--blue);
        color: white;
    }

    .left-menu-button.active .svg-icon {
        margin-right: 18px;
    }


    .left-menu-button:hover {
        position: relative;
        font-size: 16px;
        cursor: pointer;
        background: var(--blue);
        color: white;
        z-index: 2;
    }

    .left-menu-button:hover .svg-icon {
        margin-right: 18px;
        width: 28px;
        transition: margin .2s ease-in;
    }


    .service {
        grid-column-start: 2;
        grid-column-end: 11;

        padding: 0;
        overflow: scroll;

        width: 100%;
        height: calc(100vh - 34px);
    }

    .svg-icon {
        fill: currentColor;
        width: 28px;
        margin-right: 10px;
        transition: margin .2s ease-in;
    }


</style>