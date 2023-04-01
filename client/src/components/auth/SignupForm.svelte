<!-- ------------------------------------------ J S ------------------------------------------ -->
<script>
    import { handleAuthForm } from '../../services/auth.js';
    import Logo from '../Logo.svelte';

    let errorMessage = "";


    let form = {
        username: "",
        email: "",
        password: "",
    }

    // ------------- SIGNUP FORM ----------------
    function SignupForm(event) {
        let formData = new FormData()
        
        formData.append("username", form.username);
        formData.append("email", form.email);
        formData.append("password", form.password);

        handleAuthForm('signup', formData).then(response => errorMessage = response);
    }

</script>


<!-- ------------------------------------------ H T M L ------------------------------------------ -->
<form method="POST" class="auth-form" on:submit|preventDefault={SignupForm}>
    <a href="/">
        <img class="text-icon vertical-flip" src="/media/assets/icons/right-arrow.png" alt="" srcset="/media/assets/icons/right-arrow.png">
        Volver
    </a>


    <Logo></Logo>
    
    <h2 class="gradient-text">Registrate gratis y accede a la beta privada del software de XS Design</h2>

    <p>Solo te pedimos que participes activamente entregándonos feedback y mejoras sobre nuestro producto. ¡Gracias!</p>
    
    {#if errorMessage != ''}
        <p style="color: red">{errorMessage}</p>
    {/if}

    <label for="username">Username</label>
    <input type="text" name="username" id="name" bind:value={form.username}>
    
    <label for="email">Email</label>
    <input type="text" name="email" id="email" bind:value={form.email}>
    
    <label for="password">Password</label>
    <input type="password" name="password" id="password" bind:value={form.password}>
<!-- 
    <label for="password">Confirm Password</label>
    <input type="password" name="password" id="confirmed-password" bind:value={form.password}>
 -->
    <button class="gradient-button auth-button" type="submit"><b>Signup </b></button>
    <span>¿Ya estás registrado? <a href="/auth/login">Inicia sesión</a></span>
</form>


<!-- ------------------------------------------ C S S ------------------------------------------ -->
<style>

</style>