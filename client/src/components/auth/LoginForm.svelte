<script>

    import { handleAuthForm } from '../../services/auth.js';
    import Logo from '../Logo.svelte';

    let errorMessage = ""


    let form = {
        username: "",
        email: "",
        password: "",
    }


    // ------------- LOGIN FORM ----------------
    function LoginForm(event) {
        errorMessage = ''
        let formData = new FormData()
        
        formData.append("email", form.email)
        formData.append("password", form.password)
        
        handleAuthForm('login', formData).then(response => {
            if('Error' in response)
                errorMessage = response
        })
    }


</script>

<form method="POST" class="auth-form" on:submit|preventDefault={LoginForm}>
    <a href="/">
        <img class="text-icon vertical-flip" src="/media/assets/icons/right-arrow.png" alt="" srcset="/media/assets/icons/right-arrow.png">
        Volver
    </a>


    <Logo></Logo>
    
    <h2 class="gradient-text">Inicia sesión en XS Design</h2>
    <p>¡Nos alegra verte de vuelta!</p>

    {#if errorMessage != ''}
        <p style="color: red">{errorMessage}</p>
    {/if}
    
    <label for="email">Email</label>
    <input type="text" name="email" id="email" bind:value={form.email}>
    
    <label for="password">Password</label>
    <input type="password" name="password" id="password" bind:value={form.password}>
    
    <button class="gradient-button auth-button" type="submit"><b>Login </b></button>
    <span>¿Aún no estás registrado? <a href="/auth/signup">Regístrate</a></span>
</form>


<style>

</style>