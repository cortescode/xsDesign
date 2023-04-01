
<!-- ------------------------------------------ J S ------------------------------------------ -->
<script>
	
	import Header from "../components/headers/Header.svelte"
	import PricingComponent from "../components/sales/PricingComponent.svelte"
	import CtaBanner from "../components/sales/CtaBanner.svelte";
	import { animate } from '../utils/animations/animate.js'

	import { onMount } from 'svelte';



	onMount(() => animate());

</script>


<!-- ------------------------------------------ H T M L ------------------------------------------ -->
<Header
	buttonLink = "/contact"
	buttonText = "Contacto"
></Header>
<section class="banner">
	<div class="banner-content">
		<div class="banner-info">
			<h1 class="banner-title">Encuentra el plan que mejor se adapte a tí y a tu negocio.</h1>
			<p>
				Diseñamos páginas Web profesionales y optimizadas que te permitan empezar o crecer en el mercado digital.
			</p>
		</div>
		<div class="button-banner-section">
			<a href="#pricing" class="white-button banner-button">Ver planes</a>
		</div>
	</div>
</section>
<main>
	<PricingComponent></PricingComponent>
</main>
<CtaBanner
	title="Obtén la web que necesita tu negocio"
	description="
				Creamos la web de tu negocio y te entregamos las herramientas 
				necesarias para que tengas éxito en el mercado online. Contacta 
				con nuestro equipo y descubre cómo podemos ayudarte."
	ctaButtonText="Contactar"
	ctaUrl="/contact"
></CtaBanner>



<!-- ------------------------------------------ H T M L ------------------------------------------ -->
<style>
	.banner {
		background-image: linear-gradient(321deg,#c084f8,#4353ff 67%,#391389 94%);
		display: grid;
		place-items: center;
		padding: 80px 40px;
		color: white;
		max-width: calc(100% - 80px);
	}

	.banner-content {
		max-width: 1200px;
		width: 100%;
		display: flex;
		justify-content: space-between;
	}

	.banner-title {
		font-size: 32px;
	}

	.banner-info {
		max-width: 600px;
		height: auto;
		display: block;
	}

	.button-banner-section {
		justify-self: flex-end;
		align-self: flex-end;
	}

	.banner-button {
		justify-self: flex-end;
		align-self: flex-end;
	}

	

	@media screen and (max-width: 767px) {

		.banner {
			width: 100vw;
			display: block;
		}

		.banner-content {
			display: grid;
			grid-template-columns: 1fr;
			max-width: 100%;
		}

	}

</style>