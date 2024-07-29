<script lang="ts">
    import Designer from "$designer/Designer.svelte";
    import { website } from "$lib/stores/website.js";

</script>

<svelte:head>
    <title>Websites Designer| XS Design</title>
</svelte:head>

<div class="wrapper">
    <Designer></Designer>
</div>


<style>
	.wrapper {
		height: 100vh;
		margin: 0;
        background-color: white;
	}

</style>           