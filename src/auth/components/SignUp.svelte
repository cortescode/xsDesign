<!-- ------------------------------------------ J S ------------------------------------------ -->
<script lang="ts">
    import { signup } from "../auth";
    import { goto } from "$app/navigation";

    export let redirect_to: string = "/dashboard";

    let errorMessage = "";

    let form = {
        email: "",
        password: "",
        confirm_password: "",
    };

    // ------------- SIGNUP FORM ----------------
    async function submitSignup(event: Event) {
        let email = form.email;
        let password = form.password;
        let confirm_password = form.confirm_password;

        if(!validateCredentials(email, password, confirm_password)) {
            return;
        }

        let signed_up = await signup(email, password);
        if (!signed_up) {
            errorMessage = "Email already in use or invalid password";
            return;
        }
        
        goto(redirect_to, { replaceState: true });
    }

    function validateCredentials(email: string, password: string, confirm_password: string) {
        if (email?.length < 3 || !email.includes("@")) {
            errorMessage = "Please introduce a valid email";
            return false;
        }

        if (password != confirm_password) {
            errorMessage = "The two passwords do not match";
            return false;
        }

        return true;
    }
</script>

<!-- ------------------------------------------ H T M L ------------------------------------------ -->

<form method="POST" class="auth-form" on:submit|preventDefault={submitSignup}>
    <h3 class="gradient-text">Welcome to the beta phase</h3>

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

    <label for="password">Confirm Password</label>
    <input
        type="password"
        name="password"
        id="confirmed-password"
        bind:value={form.confirm_password}
    />

    <button class="designer-button auth-button" type="submit"
        ><b>Signup </b></button
    >
    <span>Do you already have an account? <a href="/auth/login">Login</a></span>
</form>

<!-- ------------------------------------------ C S S ------------------------------------------ -->
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
