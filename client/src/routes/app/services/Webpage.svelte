<!-- ------------------------------------------ J S ------------------------------------------ -->
<script>
    import Analytics from "./Analytics.svelte";
    import { user } from "../../../services/session.js"

    // let username = user.suscribe(userData => username = userData.username)

</script>


<!-- ------------------------------------------ H T M L ------------------------------------------ -->
<section class="overview">
    <!-- <a class="web-card" target="_blank" rel="noreferrer" href="https://elbuscadordeagua.com">
    <img src="./media/elbuscadordeagua/home_page.png" srcset="./media/elbuscadordeagua/home_page.png" alt="">
      <p>Acceder a la web</p> 
    </a> -->
    <div class="webcard">
        <h2>¡Hola {$user.username}!</h2>
        <p>Aún no puedes crear ninguna web, en las proximas semanas abriremos la versión beta que desbloqueará el crear una web básica, te avisaremos por correo.</p>
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
        padding: 10px;
        border-radius: 8px;
        box-shadow: rgba(8, 0, 40, 0.2) 0 0 28px;
        text-align: none;
        text-decoration: none;
        transition: .2s;
    }

    .webcard:hover {
        transform: scale(0.98);
        box-shadow: rgba(8, 0, 40, 0.32) 0 0 28px;
    }
  
</style>