
<!-- ------------------------------------------ J S ------------------------------------------ -->

<!-- ------------------------------------------ J S ------------------------------------------ -->
<script lang="ts">
    import Logo from '$lib/components/Logo.svelte';
    import { goto } from "$app/navigation";
    import { user } from '$lib/stores/session';
    import { createUserWithEmailAndPassword } from 'firebase/auth';
    import { auth } from '$lib/firebaseConn';

    import { signup } from '$lib/auth';

    if($user) {
        goto("/designer/dashboard")
    }
    

    let errorMessage = "";


    let form = {
        email: "",
        password: "",
    }

    // ------------- SIGNUP FORM ----------------
    async function submitSignup(event: Event) {
        
        let email = form.email
        let password = form.password
        try {
            await signup(email, password)
            goto("/designer")
        } catch (error) {
            errorMessage = "Email or password invalid";
        }
    }

    function backToLastPage(event: Event) {
        window.history.back()
    }

</script>
<!-- ------------------------------------------ H T M L ------------------------------------------ -->
<svelte:head>
    <title>Crea tu cuenta | XS Design</title>
</svelte:head>
<section class="auth-page">
    <div class="form-container animate">
        <form method="POST" class="auth-form" on:submit|preventDefault={submitSignup}>
            <a class="return-link" on:click={backToLastPage}>
                <img class="text-icon vertical-flip" src="/media/assets/icons/right-arrow.png" alt="" srcset="/media/assets/icons/right-arrow.png">
                Back
            </a>
        
        
            <Logo></Logo>
            
            <h2 class="gradient-text">Register for the beta phase</h2>
        
            <p>We only ask that you actively participate by providing us with feedback and improvements about our product. Thank you!</p>
            
            {#if errorMessage != ''}
                <p style="color: red">{errorMessage}</p>
            {/if}
        
            <label for="email">Email</label>
            <input type="text" name="email" id="email" bind:value={form.email}>
            
            <label for="password">Password</label>
            <input type="password" name="password" id="password" bind:value={form.password}>
        <!-- 
            <label for="password">Confirm Password</label>
            <input type="password" name="password" id="confirmed-password" bind:value={form.password}>
         -->
            <button class="default-button auth-button" type="submit"><b>Signup </b></button>
            <span>Do you already have an account? <a href="/auth/login">Login</a></span>
        </form>
    </div>
</section>


<!-- ------------------------------------------ C S S ------------------------------------------ -->
<style>

    .auth-form {
        margin: 0 auto;
        margin-block: 0;
        width: auto;
        max-width: 360px;
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

    @media screen and (max-width: 767px) {
        .auth-form {
            padding: 20px;
        }
    }
</style>