<script lang="ts">
    import Landing from './Landing.svelte';
    import Dashboard from './(designer)/Dashborad.svelte';

    let shouldRender = false;

    export let data;

    let isLoggedIn: boolean = data.isLoggedIn || false;
</script>

<svelte:head>
    <title>Get the website that revolutionizes the image of your business | XS Design</title>
    <meta name="description" content="Get the website that revolutionizes the image of your business" />
</svelte:head>


{#if !isLoggedIn}
    <Landing/>
{:else }
    <Dashboard></Dashboard>
{/if}
