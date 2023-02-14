
<!-- ------------------------------------------ J S ------------------------------------------ -->

<script>
    import Header from "../components/Header.svelte"
 
    // Variable to swith 
    let signedUp = true;

    let form_submitted_successfully = false
    let form_submitted_memssage = ""

    // Provisional toggle to switch between signup and login form
    function changeForm() {
        if(signedUp == true) signedUp = false;
        else signedUp = true
    }



    let form = {
        username: "",
        email: "",
        password: "",
    }


    // ------------- LOGIN FORM ----------------
    function LoginForm(event) {
        let formData = new FormData()
        
        formData.append("email", form.email)
        formData.append("password", form.password)
        
        handleForm('login', formData)
    }


    // ------------- SIGNUP FORM ----------------
    function SignupForm(event) {
        let formData = new FormData()
        
        formData.append("username", form.username)
        formData.append("email", form.email)
        formData.append("password", form.password)

        handleForm('signup', formData)
    }



    // ------------- GENERAL FORM ----------------
    // This
    function handleForm(type, form) {

        fetch(`/auth/${ type }`, {
            method: 'POST',
            body: form
        }).then((response) => {
                if(response.status != 200) {

                }
                return response.json()
            }
        ).then((data) => {
            if(data['status'] == 'error'){
                form_submitted_memssage = 'Ha habido un error con los datos introducidos, por favor vuelve a introducirlos'
            } else if(data['status'] == 'successful'){
                form_submitted_successfully = true;
                window.location = "/home";
            }
        }).catch((error) => {
            console.log("An error occurred during request")
            console.log(error)
        })

    }

</script>


<!-- ------------------------------------------ H T M L ------------------------------------------ -->


<Header></Header>
<section class="login-form-container">

    {#if form_submitted_successfully}

        <div>
            <h2>{form_submitted_memssage}</h2>
            <a href="/dashboard">Ir al dashboard</a>
        </div>
        
    {/if}


     <!-- LOGIN -->

    {#if (!form_submitted_successfully && signedUp)}
       
        <form method="POST" class="login-form" on:submit|preventDefault={LoginForm}>
            {#if form_submitted_memssage != ''}
                <p style="color: red">{form_submitted_memssage}</p>
            {/if}
            
            <h2 class="welcome-message">Nos alegra verte de vuelta.</h2>
            
            <label for="email">Email</label>
            <input type="text" name="email" id="email" bind:value={form.email}>
            
            <label for="password">Password</label>
            <input type="password" name="password" id="password" bind:value={form.password}>
            
            <button class="login-button" type="submit"><b>Login </b></button>
            <span>¿Aún no estás registrado? <a href="/signup">Regístrate</a></span>
        </form>

    {/if}


    <!-- SIGNUP -->

    {#if (!form_submitted_successfully && !signedUp)}

        <form method="POST" class="login-form" on:submit|preventDefault={SignupForm}>
            {#if form_submitted_memssage != ''}
                <p style="color: red">{form_submitted_memssage}</p>
            {/if}
            <h2 class="welcome-message">Gracias por elegirnos.</h2>

            <label for="username">Username</label>
            <input type="text" name="username" id="name" bind:value={form.username}>
            
            <label for="email">Email</label>
            <input type="text" name="email" id="email" bind:value={form.email}>
            
            <label for="password">Password</label>
            <input type="password" name="password" id="password" bind:value={form.password}>

            <button class="login-button" type="submit"><b>Signup </b></button>
            <span>¿Ya estás registrado? <a href="/login">Inicia sesión</a></span>
        </form>

    {/if}

    <button on:click={changeForm} style="margin: 20px;">change</button>

</section>



<!-- ------------------------------------------ C S S ------------------------------------------ -->

<style>
    .login-form-container {
        margin-top: 60px;
        display: grid;
        place-items: center;
    }


    .login-form {
        max-width: 460px;
        min-width: 360px;
        padding: 34px;
        box-shadow: rgba(0, 5, 8, 0.4) 8px 4px 12px;
        display: grid;
        place-items: center;
        background-color: white;
        border-radius: 8px;
    }

    .login-form * {
        width: 100%;
    }

    .login-form span {
        margin-top: 16px;
        font-size: 14px;
    }

    .welcome-message {
        text-align: center;
        font-family: "Open Sans";
        font-weight: 900;
    }

    .login-form label {
        padding: 8px 0;
        margin: 6px 0 4px 0;
    }

    .login-form input {
        width: calc(100% - 16px);
        font-size: 14px;
        padding: 6px;
        margin: 0px 0 4px 0;
    }
    
    .login-button {
	    border-radius: 8px;
        width: 100%;
        margin: 28px 0 0 0;
    }
</style>