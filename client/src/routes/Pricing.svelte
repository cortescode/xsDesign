
<!-- ------------------------------------------ J S ------------------------------------------ -->
<script>
	
	import Header from "../components/Header.svelte"
	import PricingComponent from "../components/PricingComponent.svelte"

</script>


<!-- ------------------------------------------ H T M L ------------------------------------------ -->

<Header></Header>
<section class="banner">
	<div class="banner-content">
		<div class="banner-info">
			<h1 class="banner-title">Encuentra el plan que mejor se adapte a tí y a tu negocio.</h1>
			<p>
				Comienza a construir tu web gratis. Adquiere un plan de pago cuando quiera publicar tu proyecto, 
				luego actualiza la plataforma a tu gusto y añade servicio según tus necesidades.
			</p>
		</div>
		<div class="button-banner-section">
			<button class="white-button banner-button"> Ver todos los planes</button>
		</div>
	</div>
</section>
<PricingComponent></PricingComponent>



<!-- ------------------------------------------ H T M L ------------------------------------------ -->
<style>
	.banner {
		background-image: linear-gradient(321deg,#c084f8,#4353ff 67%,#391389 94%);
		display: grid;
		place-items: center;
		padding: 80px 40px;
		color: white;
	}

	.banner-content {
		min-width: 1200px;
		display: flex;
		justify-content: space-between;
	}

	.banner-title {
		font-size: 32px;
	}

	.banner-info {
		min-width: 400px;
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
		width: 400px;
	}

	


</style>