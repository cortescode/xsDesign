<!-- ------------------------------------------ J S ------------------------------------------ -->

<!-- ------------------------------------------ J S ------------------------------------------ -->
<script lang="ts">
    import SignUp from "$auth/components/SignUp.svelte";

    let { data } = $props();

    const redirect_to = data.redirect_to;
    
</script>

<!-- ------------------------------------------ H T M L ------------------------------------------ -->
<svelte:head>
    <title>Crea tu cuenta | XS Design</title>
</svelte:head>



{#if redirect_to}
    <SignUp {redirect_to} />
{:else}
    <SignUp />
{/if}