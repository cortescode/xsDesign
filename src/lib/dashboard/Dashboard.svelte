<!-- ------------------------------------------ J S ------------------------------------------ -->
<script lang="ts">
    import Header from "$UI/headers/DashboardHeader.svelte";

    import Websites from "./services/Websites.svelte";
    import Feedback from "./services/Feedback.svelte";
    import Logout from "$auth/components/Logout.svelte";
    import Plans from "./services/Plans.svelte";
    import Templates from "./services/Templates.svelte";
    import RoadMap from "./services/RoadMap.svelte";
    import Billing from "./services/Billing.svelte";

    export let data: any;

    let websites_services = [
        {
            name: "All Sites",
            component: Websites,
            icon: `<path d="M17.701,3.919H2.299c-0.223,0-0.405,0.183-0.405,0.405v11.349c0,0.223,0.183,0.406,0.405,0.406h15.402c0.224,0,0.405-0.184,0.405-0.406V4.325C18.106,4.102,17.925,3.919,17.701,3.919 M17.296,15.268H2.704V7.162h14.592V15.268zM17.296,6.352H2.704V4.73h14.592V6.352z M5.947,5.541c0,0.223-0.183,0.405-0.405,0.405H3.515c-0.223,0-0.405-0.182-0.405-0.405c0-0.223,0.183-0.405,0.405-0.405h2.027C5.764,5.135,5.947,5.318,5.947,5.541"></path>
                    `,
        },
        {
            name: "Templates",
            component: Templates,
            icon: `<path d="M8.627,7.885C8.499,8.388,7.873,8.101,8.13,8.177L4.12,7.143c-0.218-0.057-0.351-0.28-0.293-0.498c0.057-0.218,0.279-0.351,0.497-0.294l4.011,1.037C8.552,7.444,8.685,7.667,8.627,7.885 M8.334,10.123L4.323,9.086C4.105,9.031,3.883,9.162,3.826,9.38C3.769,9.598,3.901,9.82,4.12,9.877l4.01,1.037c-0.262-0.062,0.373,0.192,0.497-0.294C8.685,10.401,8.552,10.18,8.334,10.123 M7.131,12.507L4.323,11.78c-0.218-0.057-0.44,0.076-0.497,0.295c-0.057,0.218,0.075,0.439,0.293,0.495l2.809,0.726c-0.265-0.062,0.37,0.193,0.495-0.293C7.48,12.784,7.35,12.562,7.131,12.507M18.159,3.677v10.701c0,0.186-0.126,0.348-0.306,0.393l-7.755,1.948c-0.07,0.016-0.134,0.016-0.204,0l-7.748-1.948c-0.179-0.045-0.306-0.207-0.306-0.393V3.677c0-0.267,0.249-0.461,0.509-0.396l7.646,1.921l7.654-1.921C17.91,3.216,18.159,3.41,18.159,3.677 M9.589,5.939L2.656,4.203v9.857l6.933,1.737V5.939z M17.344,4.203l-6.939,1.736v9.859l6.939-1.737V4.203z M16.168,6.645c-0.058-0.218-0.279-0.351-0.498-0.294l-4.011,1.037c-0.218,0.057-0.351,0.28-0.293,0.498c0.128,0.503,0.755,0.216,0.498,0.292l4.009-1.034C16.092,7.085,16.225,6.863,16.168,6.645 M16.168,9.38c-0.058-0.218-0.279-0.349-0.498-0.294l-4.011,1.036c-0.218,0.057-0.351,0.279-0.293,0.498c0.124,0.486,0.759,0.232,0.498,0.294l4.009-1.037C16.092,9.82,16.225,9.598,16.168,9.38 M14.963,12.385c-0.055-0.219-0.276-0.35-0.495-0.294l-2.809,0.726c-0.218,0.056-0.351,0.279-0.293,0.496c0.127,0.506,0.755,0.218,0.498,0.293l2.807-0.723C14.89,12.825,15.021,12.603,14.963,12.385"></path>`,
        },
    ];
    let settings_services = [
        {
            name: "Plans",
            component: Plans,
            icon: `<path d="M13.889,11.611c-0.17,0.17-0.443,0.17-0.612,0l-3.189-3.187l-3.363,3.36c-0.171,0.171-0.441,0.171-0.612,0c-0.172-0.169-0.172-0.443,0-0.611l3.667-3.669c0.17-0.17,0.445-0.172,0.614,0l3.496,3.493C14.058,11.167,14.061,11.443,13.889,11.611 M18.25,10c0,4.558-3.693,8.25-8.25,8.25c-4.557,0-8.25-3.692-8.25-8.25c0-4.557,3.693-8.25,8.25-8.25C14.557,1.75,18.25,5.443,18.25,10 M17.383,10c0-4.07-3.312-7.382-7.383-7.382S2.618,5.93,2.618,10S5.93,17.381,10,17.381S17.383,14.07,17.383,10"></path>`,
        },

        {
            name: "Billing",
            component: Billing,
            icon: `<path d="M14.781,14.347h1.738c0.24,0,0.436-0.194,0.436-0.435v-1.739c0-0.239-0.195-0.435-0.436-0.435h-1.738c-0.239,0-0.435,0.195-0.435,0.435v1.739C14.347,14.152,14.542,14.347,14.781,14.347 M18.693,3.045H1.307c-0.48,0-0.869,0.39-0.869,0.869v12.17c0,0.479,0.389,0.869,0.869,0.869h17.387c0.479,0,0.869-0.39,0.869-0.869V3.915C19.562,3.435,19.173,3.045,18.693,3.045 M18.693,16.085H1.307V9.13h17.387V16.085z M18.693,5.653H1.307V3.915h17.387V5.653zM3.48,12.608h7.824c0.24,0,0.435-0.195,0.435-0.436c0-0.239-0.194-0.435-0.435-0.435H3.48c-0.24,0-0.435,0.195-0.435,0.435C3.045,12.413,3.24,12.608,3.48,12.608 M3.48,14.347h6.085c0.24,0,0.435-0.194,0.435-0.435s-0.195-0.435-0.435-0.435H3.48c-0.24,0-0.435,0.194-0.435,0.435S3.24,14.347,3.48,14.347"></path>`,
        },
    ];

    let community_services = [
        {
            name: "RoadMap",
            component: RoadMap,
            icon: `<path d="M11.709,7.438H8.292c-0.234,0-0.427,0.192-0.427,0.427v8.542c0,0.234,0.192,0.427,0.427,0.427h3.417c0.233,0,0.426-0.192,0.426-0.427V7.865C12.135,7.63,11.942,7.438,11.709,7.438 M11.282,15.979H8.719V8.292h2.563V15.979zM6.156,11.709H2.74c-0.235,0-0.427,0.191-0.427,0.426v4.271c0,0.234,0.192,0.427,0.427,0.427h3.417c0.235,0,0.427-0.192,0.427-0.427v-4.271C6.583,11.9,6.391,11.709,6.156,11.709 M5.729,15.979H3.167v-3.416h2.562V15.979zM17.261,3.167h-3.417c-0.235,0-0.427,0.192-0.427,0.427v12.812c0,0.234,0.191,0.427,0.427,0.427h3.417c0.234,0,0.427-0.192,0.427-0.427V3.594C17.688,3.359,17.495,3.167,17.261,3.167 M16.833,15.979h-2.562V4.021h2.562V15.979z"></path>`,
        },
        {
            name: "Give us Feedback",
            component: Feedback,
            icon: `<path d="M17.659,3.681H8.468c-0.211,0-0.383,0.172-0.383,0.383v2.681H2.341c-0.21,0-0.383,0.172-0.383,0.383v6.126c0,0.211,0.172,0.383,0.383,0.383h1.532v2.298c0,0.566,0.554,0.368,0.653,0.27l2.569-2.567h4.437c0.21,0,0.383-0.172,0.383-0.383v-2.681h1.013l2.546,2.567c0.242,0.249,0.652,0.065,0.652-0.27v-2.298h1.533c0.211,0,0.383-0.172,0.383-0.382V4.063C18.042,3.853,17.87,3.681,17.659,3.681 M11.148,12.87H6.937c-0.102,0-0.199,0.04-0.27,0.113l-2.028,2.025v-1.756c0-0.211-0.172-0.383-0.383-0.383H2.724V7.51h5.361v2.68c0,0.21,0.172,0.382,0.383,0.382h2.68V12.87z M17.276,9.807h-1.533c-0.211,0-0.383,0.172-0.383,0.383v1.755L13.356,9.92c-0.07-0.073-0.169-0.113-0.27-0.113H8.851v-5.36h8.425V9.807z"></path>`,
        },
    ];

    let active_service: string = websites_services[0].name;
    let active_service_component: any = websites_services[0].component;

</script>

<!-- ------------------------------------------ H T M L ------------------------------------------ -->
<svelte:head>
    <title>Dashboard | XS Design</title>
</svelte:head>
<section class="dashboard">
    <Header></Header>

    <div class="left-menu">
        <div class="left-menu-navs">
            <nav>
                <span class="left-menu-nav-title">Websites</span>
                <ul>
                    {#each websites_services as service, index}
                        <li>
                            <button
                                
                                class="left-menu-button {
                                    active_service == service['name']
                                        ? 'active'
                                        : ''}"
                                    on:click={() => {
                                            active_service = service['name']
                                            active_service_component = service['component']
                                        }
                                    }
                                >
                                <svg class="svg-icon" viewBox="0 0 20 20">
                                    {@html service["icon"]}
                                </svg>
                                {service["name"]}
                            </button>
                        </li>
                    {/each}
                </ul>
            </nav>
            <nav>
                <span class="left-menu-nav-title">Settings</span>
                <ul>
                    {#each settings_services as service, index}
                        <li>
                            <button
                                class="left-menu-button {
                                active_service == service['name']
                                    ? 'active'
                                    : ''}"
                                on:click={() => {
                                    active_service = service['name']
                                    active_service_component = service['component']
                                }}
                            >
                                <svg class="svg-icon" viewBox="0 0 20 20">
                                    {@html service["icon"]}
                                </svg>
                                {service["name"]}
                            </button>
                        </li>
                    {/each}
                </ul>
            </nav>
            <nav>
                <span class="left-menu-nav-title">Community</span>
                <ul>
                    {#each community_services as service, index}
                        <li>
                            <button
                                class="left-menu-button {
                                    active_service == service['name']
                                        ? 'active'
                                        : ''}"
                                    on:click={() => {
                                        active_service = service['name']
                                        active_service_component = service['component']
                                    }}
                                >
                                <svg class="svg-icon" viewBox="0 0 20 20">
                                    {@html service["icon"]}
                                </svg>
                                {service["name"]}
                            </button>
                        </li>
                    {/each}
                </ul>
            </nav>
        </div>
        <div class="bottom-buttons">
            <Logout />
        </div>
    </div>
    <div class="service">
        <svelte:component this={active_service_component} {data} />
    </div>
    <div></div>
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
        grid-template-rows: 3fr 1fr;
        align-items: center;
        background-color: white;
    }

    .left-menu .bottom-buttons {
        padding: 20px 10px;
    }
    .left-menu nav {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin-bottom: 20px;
    }


    .left-menu-nav-title {
        font-weight: lighter;
        font-size: 16px;
        color: var(--dark-blue);
        padding: 10px 20px;
    }

    .left-menu ul {
        list-style: none;
        align-items: center;
        width: 100%;
        margin: 0px;
        padding: 10px;
    }
    .left-menu li {
        list-style: none;
        margin: 0;
        padding: 0;
    }
    .left-menu-button {
        font-size: 16px;
        padding: 12px 24px;
        border: none;
        color: rgb(53, 53, 82);
        background-color: white;
        text-align: left;
        display: flex;
        align-items: center;
        border-radius: 12px;
        width: 100%;
    }

    .left-menu-button.active {
        font-size: 18px;
        cursor: pointer;
        background: var(--light-blue);
        color: var(--dark);
    }

    .left-menu-button:hover {
        position: relative;
        cursor: pointer;
        background: #c2d6ff;
        color: var(--dark-blue);
        z-index: 2;
    }

    .left-menu-button.active .svg-icon {
        margin-right: 24px;
    }

    .left-menu-button .svg-icon {
        margin-right: 16px;
    }

    .left-menu-button:hover .svg-icon {
        margin-right: 24px;
        width: 20px;
        transition: margin 0.2s ease-in;
    }

    .svg-icon {
        fill: currentColor;
        width: 20px;
        margin-right: 10px;
        transition: margin 0.2s ease-in;
    }

    .service {
        grid-column-start: 2;
        grid-column-end: 11;

        padding: 0;
        overflow: scroll;

        width: 100%;
        height: calc(100vh - 34px);
    }
</style>
