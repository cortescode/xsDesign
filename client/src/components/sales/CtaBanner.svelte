<!-- Call To Action Banner-->

<!-- ------------------------------------------ J S ------------------------------------------ -->
<script>
    export let title;
    export let description;
    export let ctaButtonText;
    export let ctaUrl;

</script>

<!-- ------------------------------------------ H T M L ------------------------------------------ -->
<section class="cta-banner">
    <div class="banner-content">
        <h1>{ title }</h1>
        <p>{ description }</p>
        <a class="white-button" href="{ctaUrl}">{ ctaButtonText }</a>
    </div>
</section>

<!-- ------------------------------------------ C S S ------------------------------------------ -->
<style>
    .cta-banner {
        margin: 0;
		background-image: linear-gradient(321deg,#c084f8,#4353ff 67%,#391389 94%);
		display: grid;
		place-items: center;
		padding: 80px 40px;
		color: white;
    }

    .banner-content {
        max-width: 600px;
        text-align: center;
    }
    .banner-content h1 {
        margin-block: 0.4em;
    }
    .banner-content a {
        display: block;
        width: fit-content;
        float: none;
        margin: 40px auto 0 auto;
    }
</style>


