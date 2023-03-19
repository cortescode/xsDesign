
<!-- ------------------------------------------ J S ------------------------------------------ -->

<script>
    import { onMount } from 'svelte';
    
    import routes from './routes/routes.js';

	import { getSessionUserData, user } from './services/session.js';

	

	// Defining variables to handle content status
	let errorOnLoadContent = false;
	let contentIsReady = false;


	// This variable will save the page object
    let currentPage;


    // Set the page object once component is mounted
    onMount(() => {
		getSessionUserData().then(_user => {
			user.set(_user);
			setPage(window.location.pathname);
		});
		setPage(window.location.pathname);
		
	});

	// Set currentPage object and show it on html
	function setPage(page) {
		
		if(page.charAt(page.length - 1) === '/')
			if(page.length > 1)
				page = page.slice(0, -1);

		if(routes[page] == undefined)
			currentPage = routes['/404'];
		else
			currentPage = routes[page];	

		contentIsReady = true;
	}


</script>


<!-- ------------------------------------------ H T M L ------------------------------------------ -->

<div class = "app">
	{#if contentIsReady}
    	<svelte:component this={currentPage.body} params={currentPage.params} />
	{/if}

	{#if errorOnLoadContent}
	 	<h1>Ha habido un problema al cargar la página, disculpe las molestias. Inténtelo de nuevo más tarde.</h1>
	{/if}
</div>

