<script>

</script>



<section class="hero">
    <div class="hero-content">
        <h1>
            Crea tu web profesional en cuestión de minutos
        </h1>
        <p>
            Creamos páginas web personalizadas de calidad, con sistema de administración
            de clientes, además inteligencia artificial integrada para la creación de artículos
            y mejora del posicionamiento web.
        </p>
        <button class="white-button">
            Obtener acceso anticipado
        </button>

        <video id="background-video" class="hero-media-asset is-visible" autoplay="" muted="" loop="" playsinline="" data-hero-video="" data-src-lg="/media/herobg.mp4" data-src-sm="/media/herobg.mp4">
            <source src="/media/herobg.mp4" type="video/mp4">
        </video>
         
    </div>
    
</section>



<style>
    .hero {
        display: grid;
        grid-template-columns: 1fr;
        place-items: center;
        background: linear-gradient(60deg, #0d30479f, #1e0e5997);
        background-size: cover;
        background-position: center;
        color: white;
        text-align: center;
        position: relative;
        padding: 100px;
    }

    #background-video {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        z-index: -10;
    }

    .hero-content {
        max-width: 900px;
        display: grid;
        place-items: center;
    }

    .hero-content h1 {
        font-size: 4vw;
    }
    .hero-content p {
        max-width: 600px;
        margin-bottom: 40px;
    }
</style>