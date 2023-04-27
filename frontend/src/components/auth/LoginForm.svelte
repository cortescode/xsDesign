<script>

    import { handleAuthForm } from '../../lib/auth.js';
    import Logo from '../Logo.svelte';

    let errorMessage = ""


    let form = {
        email: "",
        password: "",
    }


    // ------------- LOGIN FORM ----------------
    function LoginForm(event) {
        errorMessage = '';
        let formData = new FormData();

        formData.append("email", form.email);
        formData.append("password", form.password);
        
        handleAuthForm('login', formData).then(response => { errorMessage = response })
    }

    function backToLastPage(event) {
        window.history.back()
    }

</script>

<form method="POST" class="auth-form" on:submit|preventDefault={LoginForm}>
    <a class="return-link" on:click={backToLastPage}>
        <img class="text-icon vertical-flip" src="/media/assets/icons/right-arrow.png" alt="" srcset="/media/assets/icons/right-arrow.png">
        Volver
    </a>


    <Logo></Logo>
    
    <h2 class="gradient-text">Inicia sesión</h2>
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
    .auth-form {
        margin: 0 auto;
        margin-block: 0;
        width: 360px;
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
        font-weight: bold;
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