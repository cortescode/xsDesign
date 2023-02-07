<script>
    import { onMount } from 'svelte';
    
    import routes from "./routes/routes.js";

	let errorOnLoadContent = false;
	let contentIsReady = false;
	
    let currentPage;

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
    
    onMount(() => {
		setPage(window.location.pathname)
		

		/* if(window.location.pathname == "/"){
			setPage('home')
		}
		if(window.location.pathname == "/home"){
			setPage('home')
		}
		if(window.location.pathname == "/pricing"){
			setPage('pricing')
		} */
	});

</script>



<div class = "app">
	{#if contentIsReady}
    	<svelte:component this={currentPage.body} params={currentPage.params} on:inputForm="{addInput}" />
	{/if}

	{#if errorOnLoadContent}
	 	<h1>Ha habido un problema al cargar la página, disculpe las molestias. Inténtelo de nuevo más tarde.</h1>
	{/if}
</div>

