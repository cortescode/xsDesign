<!-- ------------------------------------------ J S ------------------------------------------ -->
<script>
    import Analytics from "./Analytics.svelte";
    import { user } from "../../../../lib/session.js"
    import { onMount } from "svelte";

    let username = "";
    user.subscribe((data) => {
        console.log("data", data);
        if( data != undefined)
            if("username" in data)
                username=data.username;
    })

</script>


<!-- ------------------------------------------ H T M L ------------------------------------------ -->
<section class="overview">
    <!-- <a class="web-card" target="_blank" rel="noreferrer" href="https://elbuscadordeagua.com">
    <img src="./media/elbuscadordeagua/home_page.png" srcset="./media/elbuscadordeagua/home_page.png" alt="">
      <p>Acceder a la web</p> 
    </a> -->
    <div class="webcard">
        <h2>¡Hola {username}!</h2>
        <p>¡Ya está disponible la versión beta de nuestro diseñador de páginas web! No te olvides de dejarnos tu feedback para que podamos mejorar con tu ayuda.</p>
        <a href="/platform/designer">Acceder al editor</a>
    </div>
    
    <div></div>
    <div></div>
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