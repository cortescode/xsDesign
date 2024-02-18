
<!-- ------------------------------------------ J S ------------------------------------------ -->

<!-- ------------------------------------------ J S ------------------------------------------ -->
<script lang="ts">
    import Logo from '$lib/components/Logo.svelte';
    import { goto } from "$app/navigation";
    import { user } from '$lib/stores/session';
    import { signup } from '$lib/auth';

    import SignInWithGoogleButton from '$lib/components/SignInWithGoogleButton.svelte';

    if($user) {
        goto("/designer/")
    }

    let errorMessage = "";


    let form = {
        email: "",
        password: "",
        confirm_password: "",
    }

    // ------------- SIGNUP FORM ----------------
    async function submitSignup(event: Event) {
        
        let email = form.email
        let password = form.password
        let confirm_password = form.confirm_password

        if(password != confirm_password) {
            errorMessage = "The two passwords do not match"
            return
        }

        try {
            await signup(email, password)
            goto("/designer")
        } catch (error) {
            errorMessage = "Email or password invalid";
        }
    }

    function backToLastPage(event: Event) {
        goto("/", { replaceState: true })
    }
    

</script>
<!-- ------------------------------------------ H T M L ------------------------------------------ -->
<svelte:head>
    <title>Crea tu cuenta | XS Design</title>
</svelte:head>
<section class="auth-page">
    <div class="form-container animate">
        <form method="POST" class="auth-form" on:submit|preventDefault={submitSignup}>
            
            <div class="back-button-wrapper">
                <button on:click={backToLastPage}> 
                    <svg width="20" height="20" viewBox="0 0 20 20">
                        <path d="M8.388,10.049l4.76-4.873c0.303-0.31,0.297-0.804-0.012-1.105c-0.309-0.304-0.803-0.293-1.105,0.012L6.726,9.516c-0.303,0.31-0.296,0.805,0.012,1.105l5.433,5.307c0.152,0.148,0.35,0.223,0.547,0.223c0.203,0,0.406-0.08,0.559-0.236c0.303-0.309,0.295-0.803-0.012-1.104L8.388,10.049z"></path>
                    </svg>   
                    Back 
                </button>
            </div>
        
            <Logo></Logo>
            
            <h2 class="gradient-text">Register for the beta phase</h2>
        
            <p>Welcome to the next-generation website builder</p>
            
            {#if errorMessage != ''}
                <p style="color: red">{errorMessage}</p>
            {/if}
        
            <label for="email">Email</label>
            <input type="text" name="email" id="email" bind:value={form.email}>
            
            <label for="password">Password</label>
            <input type="password" name="password" id="password" bind:value={form.password}>
        
            <label for="password">Confirm Password</label>
            <input type="password" name="password" id="confirmed-password" bind:value={form.confirm_password}>
         
            <button class="designer-button auth-button" type="submit"><b>Signup </b></button>
            <span>Do you already have an account? <a href="/auth/login">Login</a></span>
        </form>
            
        <div class="divider"></div>
        <SignInWithGoogleButton></SignInWithGoogleButton>
    </div>
</section>


<!-- ------------------------------------------ C S S ------------------------------------------ -->
<style>

    .back-button-wrapper {
        width: fit-content;
        height: fit-content;
        color: var(--dark);
        fill: var(--dark);
    }

    .back-button-wrapper button {
        display: grid;
        grid-template-columns: auto 1fr;
        align-items: center;
        gap: 20px;
        font-size: 18px;
        text-align: left;
        padding: 6px 18px 6px 12px;
        border-radius: 12px;
        margin-bottom: 40px;
        border: 1px solid var(--blue);
        background-color: white;
    }

    .back-button-wrapper button:hover {
        background-color: white;
    }

    .back-button-wrapper svg {
        transition: padding .1s ease-in;
    }
    .back-button-wrapper:hover svg {
        padding-right: 20px;
    }


    .divider {
        width: 100%;
        height: 1px;
        background-color: rgb(255, 70, 70);
        border-radius: 2px;
        
        margin-top: 20px;
    }

    .auth-page {
        max-width: calc(100vw - 20px);
        height: calc(100vh - 20px);
        padding: 10px;
        display: grid;
        place-items: center;
    }

    
    .form-container {
        margin: 0 auto;
        margin-block: 0;
        width: auto;
        max-width: 360px;
        height: fit-content;
        padding: 34px;
        box-shadow: rgba(0, 62, 155, 0.2) 0 -0 40px;
        background-color: white;
        border-radius: 8px;

    }

    .auth-form {
        display: grid;
        grid-template-columns: 1fr;
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