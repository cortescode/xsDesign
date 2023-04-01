<script>
    export let title;
    export let description;
    export let button;

</script>


<section class="hero-app animate">
    <div class="hero-app-content">
        <h1 class="hero-app-title">
            { title }
        </h1>
        <p class="hero-app-description">
            { description }
        </p>
        <a href="/auth/signup" class="gradient-button hero-app-button">
            { button }
        </a>

    </div>
    <img class="web-img" src="/media/assets/images/ecommerce.png" srcset="/media/assets/images/ecommerce.png" alt="">
    
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
        background: linear-gradient(to right, #764ba2, #667eea);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        text-decoration: underline;
    }
    .hero-app-description {
        max-width: 600px;
        margin-bottom: 40px;
    }


    .web-img {
        justify-self: flex-end;
        max-width: 320px;
	    box-shadow: rgba(0, 8, 45, 0.2) 0px 0px 28px;
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