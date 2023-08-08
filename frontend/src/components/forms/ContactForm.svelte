<!-- ------------------------------------------ J S ------------------------------------------ -->
<script>
    import Logo from "../Logo.svelte";

    function backToLastPage(event) {
        window.history.back()
    }


    function sendConstactFormToServer(event) {
        event.preventDefault()
        let formData = new FormData(event.target)
        console.log(formData)
        let data = Object.fromEntries(formData.entries())
        
        // send the data to the server with a fetch POST request
        fetch('/marketing/contact-message', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(response => {
            console.log(response)
            if (response.status == 200) {
                alert('Mensaje enviado correctamente')
                window.location.href = '/'
            } else {
                alert('Ha habido un error al enviar el mensaje')
            }
        }).catch(error => {
            console.log(error)
            alert('Ha habido un error al enviar el mensaje')
        })
    }

    
</script>

<!-- ------------------------------------------ H T M L ------------------------------------------ -->
<form on:submit={sendConstactFormToServer} method="POST" class="auth-form contact-form animate">
    <a class="return-link" on:click={backToLastPage}>
        <img class="text-icon vertical-flip" src="/media/assets/icons/right-arrow.png" alt="" srcset="/media/assets/icons/right-arrow.png">
        Volver
    </a>
    
    <Logo></Logo>

    <h3 class="gradient-text">Resuelve cualquier duda que tengas acerca de nuestros productos o servicios</h3>
    <h3>Envíanos tu consulta:</h3>
        
    <label for="name" required>Nombre</label>
    <input type="text" name="name" id="name">
        
    <label for="empresa">Empresa</label>
    <input type="text" name="business_name" id="business_name">

    <label for="email" requiered>Correo electrónico</label>
    <input type="email" name="email" id="email">
        
    <label for="size">Número de empleados (opcional)</label>
    <input type="text" name="size" id="size">

    <label for="message" requiered>Mensaje</label>
    <textarea name="message" cols="30" rows="10"></textarea>
        
    <button class="gradient-button auth-button"><b>Enviar </b></button>
    <span>Gracias por contactar con XS Design. Antes de 24 horas te habremos respondido, estate atento a tu correo.</span>
</form>



<!-- ------------------------------------------ C S S ------------------------------------------ -->
<style>
    .contact-form{
        width: auto;
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

    @media screen and (max-width: 767px) {
        .auth-form {
            padding: 20px;
        }
    }
</style>