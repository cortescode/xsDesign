<!-- ------------------------------------------ J S ------------------------------------------ -->
<script>
    import Header from './Header.svelte';

    import Overview from './services/Overview.svelte'
    import Analytics from './services/Analytics.svelte';
    import Emails from './services/Emails.svelte';
    import Webpage from './services/Webpage.svelte';

    let services = {
        'overview': Overview,
        'analytics': Analytics,
        'Werbpage': Webpage,
        'Emails': Emails
    }

    let active_service = services['overview']

</script>


<!-- ------------------------------------------ H T M L ------------------------------------------ -->
<Header></Header>
<section>
    <div class="left-menu">
        <nav>
            <ul>
                <li>
                    <button class="left-menu-button">
                        Overview
                    </button>
                </li>
                <li>
                    <button class="left-menu-button">
                        Emails
                    </button>
                </li>
                <li>
                    <button class="left-menu-button">
                        Webpapge
                    </button>
                </li>
                <li>
                     <button class="left-menu-button">
                        Analytics
                     </button>
                </li>
            </ul>
            <button class="left-menu-button">
                + Add service
            </button>
        </nav>
    </div>
    <div class="service">
    	<svelte:component this={active_service} />
    </div>
    <div>
        
    </div>
</section>


<!-- ------------------------------------------ C S S ------------------------------------------ -->
<style>
    section {
        display: grid;
        grid-template-columns: 1fr 5fr 1fr;
        grid-template-rows: 1fr;
        max-width: 100%;
        background-color: white;
        justify-content: center;
        justify-items: center;
        align-items: center;
        margin: 0;
        padding: 0;
        max-height: 98vh;
        overflow: hidden;
    }
    .left-menu {
        width: 100%;
        max-height: 100vh;
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 1fr 5fr 1fr;
        justify-content: center;
        justify-items: center;
        align-items: center;
    }

    .left-menu ul {
        list-style: none;
        justify-self: center;
        align-items: center;
        margin: 0;
        padding: 0;
    }
    .left-menu li {
        list-style: none;
        margin: 0;
        padding: 0;
    }
    .left-menu-button {
        background-color: white;
        border-radius: 0;
        width: 100%;
        color: rgb(0, 4, 37);
    }
    .left-menu-button:hover {
        background-color: aliceblue;
    }

    .service {
        width: 100%;
        height: 100%;
        display: grid;
        justify-content: center;
        justify-items: center;
        margin: 0;
    }

</style>