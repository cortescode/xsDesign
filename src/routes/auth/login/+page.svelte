<!-- ------------------------------------------ TS ------------------------------------------ -->
<script lang="ts">
    import Logo from "$lib/components/Logo.svelte";

    import { goto } from "$app/navigation";
    import { user, isLoggedIn } from "$lib/stores/session";
    import { login } from "$lib/auth/auth";
    import SignInWithGoogleButton from "$lib/components/SignInWithGoogleButton.svelte";
    import { onMount } from "svelte";
    import { getRedirectResult } from "firebase/auth";

    let errorMessage = "";

    let form = {
        email: "",
        password: "",
    };

    // ------------- LOGIN FORM ----------------
    async function submitLogin(event: Event) {
        let email = form.email;
        let password = form.password;

        try {
            await login(email, password);

            goto("/", { replaceState: true });
        } catch (error) {
            errorMessage = "Email or password invalid";
        }
    }
</script>

<!-- ------------------------------------------ H T M L ------------------------------------------ -->
<svelte:head>
    <title>Inicia sesión | XS Design</title>
</svelte:head>

<form method="POST" class="auth-form" on:submit|preventDefault={submitLogin}>
    <Logo></Logo>

    <h2 class="gradient-text">Login</h2>
    <p>¡We are happy to see you again!</p>

    {#if errorMessage != ""}
        <p style="color: red">{errorMessage}</p>
    {/if}

    <label for="email">Email</label>
    <input type="text" name="email" id="email" bind:value={form.email} />

    <label for="password">Password</label>
    <input
        type="password"
        name="password"
        id="password"
        bind:value={form.password}
    />

    <button class="designer-button auth-button" type="submit">
        <b>Login </b>
    </button>

    <span>
        Don't you already have an account? 
        <a href="/auth/signup">Signup</a>
    </span>
</form>


<style>

    .auth-form {
        display: grid;
        grid-template-columns: 1fr;
        text-align: left;
        padding: 0 !important;
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

</style>
