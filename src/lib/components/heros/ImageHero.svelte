<script>
    import DefaultButton from "../buttons/DefaultButton.svelte";

    export let title;
    export let description;
    export let buttonText;
    export let buttonLink;
    export let image = "/media/assets/images/ecommerce.png";

</script>


<section class="hero-app animate">
    <div class="hero-app-content">
        <h1 class="hero-app-title gradient-text">
            { title }
        </h1>
        <p class="hero-app-description">
            { description }
        </p>
        <div>
            <DefaultButton 
                text={buttonText} 
                action = { () => {
                window.location.pathname = buttonLink;
            }}></DefaultButton>
    
        </div>
    </div>
    <img class="web-img" src="{ image }" srcset="{ image }" alt="">
    
</section>



<style>
    .hero-app {
        display: grid;
        grid-template-columns: 5fr 4fr;
        place-items: center;
        gap: 60px;
        background-size: cover;
        background-position: center;
        color: var(--dark);
        text-align: left;
        position: relative;
        padding: 60px;
        max-width: 1280px;
        margin: 0 auto;
    }

    .hero-app-content {
        justify-self: left;
        display: grid;
        grid-template-columns: 1fr;
        justify-content: start;
    }


    .hero-app-title {
        font-size: 38px;
    }
    .hero-app-description {
        max-width: 600px;
        margin-bottom: 40px;
    }


    .web-img {
        justify-self: flex-end;
        max-width: 90%;
        border-radius: 8px;
    }

    @media screen and (max-width: 767px) {
        .hero-app {
            text-align: left;
            grid-template-columns: 1fr;
            padding: 28px;
        }
        .hero-app-title {
            font-size: 28px;
        }
        .hero-app-description {
            font-size: 18px;
        }

        .hero-app-button {
            justify-self: right;
        }
    }
</style>