<!-- ------------------------------------------ TS ------------------------------------------ -->
<script lang="ts">
    import Login from "$auth/components/Login.svelte";

    let { data } = $props();
    const redirect_to = data.redirect_to;

</script>

<!-- ------------------------------------------ H T M L ------------------------------------------ -->
<svelte:head>
    <title>Inicia sesión | XS Design</title>
</svelte:head>

{#if redirect_to}
    <Login {redirect_to} />
{:else}
    <Login />
{/if}