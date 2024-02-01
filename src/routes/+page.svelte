<script lang="ts">
    import Landing from './Landing.svelte';
    let shouldRender = false;

    export let data;

    let isLoggedIn: boolean = data.isLoggedIn || false;
</script>

<svelte:head>
    <title>Get the website that revolutionizes the image of your business | XS Design</title>
    <meta name="description" content="Get the website that revolutionizes the image of your business" />
</svelte:head>


<Landing/>