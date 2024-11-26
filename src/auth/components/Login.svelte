<!-- ------------------------------------------ TS ------------------------------------------ -->
<script lang="ts">
    import { goto } from "$app/navigation";
    import { login } from "../auth";

    export let redirect_to: string = "/dashboard";
    let errorMessage = "";

    let form = {
        email: "",
        password: "",
    };

    // ------------- LOGIN FORM ----------------
    async function submitLogin(event: Event) {
        let email = form.email;
        let password = form.password;

        if (email?.length < 3 || !email.includes("@")) {
            errorMessage = "Please introduce a valid email";
            return;
        }

        if (password?.length == 0) {
            errorMessage = "Please introduce the password";
            return;
        }

        const logged_in = await login(email, password);
        if (!logged_in) {
            errorMessage = "Email or password invalid";
            return;
        }
        goto(redirect_to, { replaceState: true });
    }
</script>

<form class="auth-form" on:submit|preventDefault={submitLogin}>
    <h3 class="gradient-text">We are happy to see you again!</h3>

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
