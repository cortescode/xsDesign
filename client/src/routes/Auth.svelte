<script>
    import Header from "../components/Header.svelte"
 
    let signedUp = true;

    let form_submitted_successfully = false
    let form_submitted_memssage = ""

    function toggle() {
        if(signedUp == true) signedUp = false;
        else signedUp = true
    }


    let login_form = {
        email: "",
        password: ""
    }

    function handleLoginForm(event) {
        let formData = new FormData()
        console.log(email, password)
        formData.append("email", login_form.email)
        formData.append("password", login_form.password)
        fetch('/auth/login', {
            method: 'POST',
            body: formData
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
        })
    }


    let signup_form = {
        username: "",
        email: "",
        password: "",
    }

    function handleSignupForm(event) {
        let formData = new FormData()
        
        formData.append("username", signup_form.username)
        formData.append("email", signup_form.email)
        formData.append("password", signup_form.password)

        fetch('/auth/signup', {
            method: 'POST',
            body: formData
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

<Header></Header>
<section class="login-form-container">

    {#if form_submitted_successfully}
        <h2>{form_submitted_memssage}</h2>
        <a href="/dashboard">Ir al dashboard</a>
        
    {/if}

    <p>{form_submitted_memssage}</p>
    {#if (!form_submitted_successfully && signedUp)}
        <!-- LOGIN -->
        <form method="POST" class="login-form" on:submit|preventDefault={handleLoginForm}>
            <h2 class="welcome-message">Nos alegra verte de vuelta.</h2>
            
            <label for="email">Email</label>
            <input type="text" name="email" id="email" bind:value={login_form.email}>
            
            <label for="password">Password</label>
            <input type="password" name="password" id="password" bind:value={login_form.password}>
            
            <button class="login-button" type="submit"><b>Login </b></button>
            <span>¿Aún no estás registrado? <a href="/signup">Regístrate</a></span>
        </form>
    {/if}

    {#if (!form_submitted_successfully && !signedUp)}
        <!-- SIGNUP -->
        <form method="POST" class="login-form" on:submit|preventDefault={handleSignupForm}>
            <h2 class="welcome-message">Gracias por elegirnos.</h2>

            <label for="username">Username</label>
            <input type="text" name="username" id="name" bind:value={signup_form.username}>
            
            <label for="email">Email</label>
            <input type="text" name="email" id="email" bind:value={signup_form.email}>
            
            <label for="password">Password</label>
            <input type="password" name="password" id="password" bind:value={signup_form.password}>

            <button class="login-button" type="submit"><b>Signup </b></button>
            <span>¿Ya estás registrado? <a href="/login">Inicia sesión</a></span>
        </form>
    {/if}




    <button on:click={toggle} style="margin: 20px;">change</button>

    
</section>

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