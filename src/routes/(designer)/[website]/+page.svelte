<script lang="ts">
    import Designer from "$lib/designer/components/Designer.svelte";

    import type { Web } from "./interfaces"

    export let data: Web
    
    let website = data.website
</script>

<svelte:head>
    <title>Diseñador de landing pages | XS Design</title>
</svelte:head>

<div class="wrapper">
    <Designer website={website}></Designer>
</div>


<style>
	.wrapper {
		height: 100vh;
		margin: 0;
	}

</style>           