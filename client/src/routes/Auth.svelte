
<!-- ------------------------------------------ J S ------------------------------------------ -->

<script>
    import LoginForm from "../components/auth/LoginForm.svelte";
    import SignupForm from "../components/auth/SignupForm.svelte";
 
    let form_submitted_successfully = false;
    let form_submitted_memssage = "";

    let location = window.location.pathname;
</script>


<!-- ------------------------------------------ H T M L ------------------------------------------ -->
<section class="auth-page">
    <div class="form-container">

        {#if form_submitted_successfully}
            <div>
                <h2>{form_submitted_memssage}</h2>
                <a href="/dashboard">Ir al dashboard</a>
            </div>
        {/if}

        <!-- LOGIN -->
        {#if location == '/auth/login'}
            <LoginForm></LoginForm>
        {/if}

        <!-- SIGNUP -->
        {#if location == '/auth/signup'}
            <SignupForm></SignupForm>
        {/if}
    </div>
</section>



<!-- ------------------------------------------ C S S ------------------------------------------ -->
<style>
    .auth-page {
        display: grid;
        place-items: center;
        height: calc(100vh - 40px);
        max-width: 100%;
    }

    .form-container {
        margin: auto;
        padding: 0;
        max-width: fit-content;
    }

   

</style>