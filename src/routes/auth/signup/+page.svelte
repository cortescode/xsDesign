<!-- ------------------------------------------ J S ------------------------------------------ -->

<!-- ------------------------------------------ J S ------------------------------------------ -->
<script lang="ts">
    import Logo from "$lib/components/Logo.svelte";
    import { goto } from "$app/navigation";
    import { user } from "$lib/stores/session";
    import { signup } from "$lib/auth/auth";

    import SignInWithGoogleButton from "$lib/components/SignInWithGoogleButton.svelte";

    if ($user) {
        goto("/designer/");
    }

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

        if (password != confirm_password) {
            errorMessage = "The two passwords do not match";
            return;
        }

        try {
            await signup(email, password);
            goto("/designer");
        } catch (error) {
            errorMessage = "Email or password invalid";
        }
    }

    function backToLastPage(event: Event) {
        goto("/", { replaceState: true });
    }
</script>

<!-- ------------------------------------------ H T M L ------------------------------------------ -->
<svelte:head>
    <title>Crea tu cuenta | XS Design</title>
</svelte:head>

<form method="POST" class="auth-form" on:submit|preventDefault={submitSignup}>
    <Logo></Logo>

    <h2 class="gradient-text">Register for the beta phase</h2>

    <p>Welcome to the next-generation website builder</p>

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
