<!-- ------------------------------------------ J S ------------------------------------------ -->
<script>
    import Logo from "../Logo.svelte";

    function backToLastPage(event) {
        window.history.back()
    }
</script>

<!-- ------------------------------------------ H T M L ------------------------------------------ -->
<form action="https://formsubmit.co/ff504add07c0e72b633fc8feeb88ec6b" method="POST" class="auth-form contact-form animate">
    <a class="return-link" on:click={backToLastPage}>
        <img class="text-icon vertical-flip" src="/media/assets/icons/right-arrow.png" alt="" srcset="/media/assets/icons/right-arrow.png">
        Volver
    </a>
    
    <Logo></Logo>

    <h3 class="gradient-text">Resuelve cualquier duda que tengas acerca de nuestros productos o servicios</h3>
    <h3>Envíanos tu consulta:</h3>
        
    <label for="email">Nombre</label>
    <input type="text" name="email" id="email">
        
    <label for="empresa">Empresa</label>
    <input type="text" name="empresa" id="empresa">

    <label for="email">Correo electrónico</label>
    <input type="email" name="email" id="email">
        
    <label for="size">Número de empleados (opcional)</label>
    <input type="text" name="size" id="size">

    <label for="message">Mensaje</label>
    <textarea name="message" cols="30" rows="10"></textarea>
        
    <button class="gradient-button auth-button" type="submit"><b>Enviar </b></button>
    <span>Gracias por contactar con XS Design. Antes de 24 horas te habremos respondido, estate atento a tu correo.</span>
</form>



<!-- ------------------------------------------ C S S ------------------------------------------ -->
<style>
    .contact-form{
        width: 90%;
        max-width: 600px;
        margin: 0;
    }

    .contact-form span{
        text-align: center;
    }


    .auth-form {
        margin: 0 auto;
        margin-block: 0;
        height: fit-content;
        padding: 34px;
        box-shadow: rgba(0, 62, 155, 0.2) 0 -0 40px;
        display: grid;
        grid-template-columns: 1fr;
        background-color: white;
        border-radius: 8px;
        text-align: left;
    }

    .return-link {
        margin-bottom: 20px;
    }

    .auth-form h2 {
        text-align: left;
    }

    .auth-form * {
        max-width: 100%;
    }

    .auth-form span {
        margin-top: 16px;
        font-size: 14px;
    }

    .auth-form label {
        padding: 8px 0;
        margin: 6px 0 4px 0;
    }

    .auth-form input {
        width: calc(100% - 16px);
        font-size: 14px;
        padding: 6px;
        margin: 0px 0 4px 0;
    }

    .auth-button {
        border-radius: 8px;
        width: 100%;
        margin: 28px 0 0 0;
    }


    .auth-form a:hover .text-icon {
        margin-right: 20px;
    }
</style>