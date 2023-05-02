
<!-- ------------------------------------------ J S ------------------------------------------ -->

<script>
    import LoginForm from "../../../components/auth/LoginForm.svelte";

</script>


<!-- ------------------------------------------ H T M L ------------------------------------------ -->
<svelte:head>
    <title>Inicia sesión | XS Design</title>
</svelte:head>
<section class="auth-page">
    <div class="form-container animate">
        <LoginForm></LoginForm>
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