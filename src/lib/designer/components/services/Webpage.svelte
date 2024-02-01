<!-- ------------------------------------------ J S ------------------------------------------ -->
<script lang="ts">
    import Analytics from "./Analytics.svelte";
    import { user } from "$lib/stores/session.js"
    import { onMount } from "svelte";
    import type { Web } from "../../../../routes/designer/interfaces";
    import type { PageData } from "../../../../routes/$types";

    export let data;


    $: websites = JSON.parse(data?.websites)
    

    console.log(websites)
    onMount(() => {
        console.log(websites)
    })
    
    
</script>


<!-- ------------------------------------------ H T M L ------------------------------------------ -->
<section class="overview">
    <!-- <a class="web-card" target="_blank" rel="noreferrer" href="https://elbuscadordeagua.com">
    <img src="./media/elbuscadordeagua/home_page.png" srcset="./media/elbuscadordeagua/home_page.png" alt="">
      <p>Acceder a la web</p> 
    </a> -->
    {#each websites as website }
        <div class="webcard">
            <h2>{website.name}</h2>
            <a href="/designer/{website.name}">acceder</a>
        </div>
    {/each}

    <div class="webcard">
        <h2>Create your first webpage</h2>
        <p>Discover the potential of xsdesign</p>
        <a href="/designer/create">+ Create</a>
    </div>
    
</section>
  
  
<!-- ------------------------------------------ C S S ------------------------------------------ -->
<style>
    .overview {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr 1fr;
        gap: 40px;
        text-align: center;
        margin: 0;
        padding: 20px;
    }

    .webcard {
        background-color: white;
        padding: 20px;
        border-radius: 8px;
        box-shadow: rgba(16, 0, 78, 0.2) 0 -10px 40px;
        text-align: none;
        text-decoration: none;
        transition: .2s;
    }

    .webcard > h2 {
        margin: 0 auto;
    }

    .webcard:hover {
        transform: scale(0.98);
        box-shadow: rgba(21, 0, 106, 0.32) 0 0 28px;
    }

    .webcard a:hover {
        background: linear-gradient(to right, #667eea, #764ba2);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
  
</style>