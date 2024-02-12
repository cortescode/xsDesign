<!-- ------------------------------------------ J S ------------------------------------------ -->
<script lang="ts">
    import Analytics from "./Analytics.svelte";
    import { user } from "$lib/stores/session.js"
    import { onMount } from "svelte";

    export let data: any;

    $: websites = JSON.parse(data?.websites)
    

    onMount(() => {
    })
    
    
</script>


<!-- ------------------------------------------ H T M L ------------------------------------------ -->
<section class="overview">
    <!-- <a class="web-card" target="_blank" rel="noreferrer" href="https://elbuscadordeagua.com">
    <img src="./media/elbuscadordeagua/home_page.png" srcset="./media/elbuscadordeagua/home_page.png" alt="">
      <p>Acceder a la web</p> 
    </a> -->
    {#if websites.length == 0}
        
        <a class="webcard animate" href="/designer/create">

            <!-- <img src="/media/assets/images/earth.png" class="rotate" alt="" srcset="/media/assets/landing.avif"> -->
            <p>You don't still have any website</p>
            <div class="access">
                <span>+ Create now
                    <svg class="svg-icon" viewBox="0 0 20 20">
                        <path d="M1.729,9.212h14.656l-4.184-4.184c-0.307-0.306-0.307-0.801,0-1.107c0.305-0.306,0.801-0.306,1.106,0
                        l5.481,5.482c0.018,0.014,0.037,0.019,0.053,0.034c0.181,0.181,0.242,0.425,0.209,0.66c-0.004,0.038-0.012,0.071-0.021,0.109
                        c-0.028,0.098-0.075,0.188-0.143,0.271c-0.021,0.026-0.021,0.061-0.045,0.085c-0.015,0.016-0.034,0.02-0.051,0.033l-5.483,5.483
                        c-0.306,0.307-0.802,0.307-1.106,0c-0.307-0.305-0.307-0.801,0-1.105l4.184-4.185H1.729c-0.436,0-0.788-0.353-0.788-0.788
                        S1.293,9.212,1.729,9.212z"></path>
                    </svg>
                </span>
            </div>
            
        </a>
    {/if}
    {#each websites as website }
    
        <a class="webcard animate" href="/designer/{website.name}">

            <!-- <img src="/media/assets/images/earth.png" class="rotate" alt="" srcset="/media/assets/landing.avif"> -->
            <p>{website.name}</p>
            <div class="access">
                <span>Access Editor
                    <svg class="svg-icon" viewBox="0 0 20 20">
                        <path d="M1.729,9.212h14.656l-4.184-4.184c-0.307-0.306-0.307-0.801,0-1.107c0.305-0.306,0.801-0.306,1.106,0
                        l5.481,5.482c0.018,0.014,0.037,0.019,0.053,0.034c0.181,0.181,0.242,0.425,0.209,0.66c-0.004,0.038-0.012,0.071-0.021,0.109
                        c-0.028,0.098-0.075,0.188-0.143,0.271c-0.021,0.026-0.021,0.061-0.045,0.085c-0.015,0.016-0.034,0.02-0.051,0.033l-5.483,5.483
                        c-0.306,0.307-0.802,0.307-1.106,0c-0.307-0.305-0.307-0.801,0-1.105l4.184-4.185H1.729c-0.436,0-0.788-0.353-0.788-0.788
                        S1.293,9.212,1.729,9.212z"></path>
                    </svg>
                </span>
            </div>
            
        </a>
    {/each}
</section>
  
  
<!-- ------------------------------------------ C S S ------------------------------------------ -->
<style>
    .overview {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 40px;
        padding: 40px;
        height: fit-content; 
    }

    .webcard {
        background-color: white;
        border-radius: 8px;
        box-shadow: rgba(16, 0, 78, 0.2) 0 -10px 40px;
        text-align: left;
        text-decoration: none;
        transition: .2s;
        height: fit-content;
        height: 280px;
        background: url("/media/assets/cardbg.jpg");
        background-position: 50% 60%;
        background-size: cover;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }

    .webcard > * {
        display: block;;
    }

    .webcard:hover {
        font-weight: 400;
    }

    .webcard > p {
        font-size: 2.4em;
        text-align: left;
        color: white;
        margin: 20px auto;
        width: 100%;
        padding: 20px;
    }

    .webcard:hover > p {
    }

    .webcard:hover {
        transform: scale(0.98);
        box-shadow: rgba(21, 0, 106, 0.32) 0 0 28px;
    }

    .svg-icon {
        fill: none;
        width: 18px;
        height: 18px;
        margin-left: 20px;
    }

    .webcard:hover .svg-icon {
        fill: rgb(0, 248, 255);
    }


    .webcard .access {
        opacity: 0;
        transition: opacity .2s ease-in;
    }

    .webcard:hover .access {
        opacity: 1;
        border-radius: 8px;
        display: grid;
        place-items: center;
        position: absolute;
        width: calc(100% - 40px);
        height: 240px;
        background-color: rgba(0, 6, 28, 0.6);
        padding: 20px;
        z-index: 10;
    }

    .webcard span {
        color: rgba(0, 0, 0, 0);
        font-size: 22px;
    }

    .webcard:hover span {
        color: rgb(0, 248, 255);
    }
  
</style>