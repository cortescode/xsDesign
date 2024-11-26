<script lang="ts">
    import EmailModification from "$auth/components/EmailModification.svelte";
    import EmailVerification from "$auth/components/EmailVerification.svelte";
    import AccountDeletion from "$auth/components/AccountDeletion.svelte";


</script>


<section class="wrapper">
    <EmailVerification></EmailVerification>
    <EmailModification></EmailModification>
    <AccountDeletion></AccountDeletion>
</section>


<style>

    .wrapper {
        box-sizing: border-box;
        padding: 60px 40px;
        width: 100vw;
        max-width: none;
        height: 100%;
        max-height: calc(100vh - 60px);
        overflow: auto;
        margin: 0;
        display: grid;
        place-items: center;
    }


    @keyframes messageAppareance {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }

</style>