<script lang="ts">
    import Designer from "$lib/designer/components/Designer.svelte";
    import { website } from "$lib/designer/components/website";


    export let data
    
    $website = data.website
</script>

<svelte:head>
    <title>Diseñador de landing pages | XS Design</title>
</svelte:head>

<div class="wrapper">
    <Designer></Designer>
</div>


<style>
	.wrapper {
		height: 100vh;
		margin: 0;
	}

</style>           