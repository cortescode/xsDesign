
<!-- ------------------------------------------ J S ------------------------------------------ -->

<script>
    import { onMount } from 'svelte';
    
    import routes from "./routes/routes.js";

	// Defining variables to handle content status
	let errorOnLoadContent = false;
	let contentIsReady = false;

	// This variable will save the page object
    let currentPage;

    // Set the page object once component is mounted
    onMount(() => {
		try {
			setPage(window.location.pathname)

		} catch {
			setPage('404')
		}
		
	});

	// Set currentPage object and show it on html
	function setPage(page) {
		currentPage = routes[page];
		if(currentPage == undefined) {
			errorOnLoadContent = true;
			return;
		}
		contentIsReady = true
		}

		function addInput(event) {
		console.log('addInput', event.detail.numberInput);
	}

</script>


<!-- ------------------------------------------ H T M L ------------------------------------------ -->

<div class = "app">
	{#if contentIsReady}
    	<svelte:component this={currentPage.body} params={currentPage.params} on:inputForm="{addInput}" />
	{/if}

	{#if errorOnLoadContent}
	 	<h1>Ha habido un problema al cargar la página, disculpe las molestias. Inténtelo de nuevo más tarde.</h1>
	{/if}
</div>

