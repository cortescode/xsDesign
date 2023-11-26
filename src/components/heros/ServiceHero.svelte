<script>
    export let imgUrl;
    export let title;
    export let description;

    export let selected_service;

     let services = [
        {
            title: "Diseño web",
            link: "/agency/services/web-design"
        },
        {
            title: "Embudos de venta",
            link: "/agency/services/sales-funnel"
        },
        {
            title: "Desarrollo web",
            link: "/agency/services/web-development"
        },
        {
            title: "Posicionamiento SEO",
            link: "/agency/services/seo-positioning"
        },
    ]

</script>


<section class="service-banner">
    <div class="service-banner-buttons">
        {#each services as service}
            {#if selected_service == service.title}
                <a href="{ service.link }" class="service-shown">{service.title}</a>
            {:else}
                <a href="{ service.link }">{service.title}</a>
            {/if}
        {/each}
    </div>
    <div class="service-banner-content">
        <img src="{ imgUrl }" alt="digital-marketing-service">
        <div class="animate">
            <h1>{ title }</h1>
            <p>{ description }</p>
            <a class="call-to-action" href="https://calendly.com/xsdesign/videollamada-de-descubrimiento">Agendar llamada de descubrimiento</a>
        </div>
    </div>
    
</section>


<style>

    .service-banner {
        margin: 0 auto 40px auto;
        padding:  20px 40px 40px 40px;
        max-width: 100%;
		background-image: linear-gradient(128deg,#c084f8,#4353ff 67%,#391389 94%);
        text-align: center;
    }

    .service-banner-buttons {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        margin-bottom: 80px;
    }

    .service-banner-buttons a {
        padding: 12px 24px;
        border-radius: 24px;
        background-color: rgb(32, 32, 128);
        margin-bottom: 20px;
        color: white;
        margin: 0 8px;
    }

    .service-banner-buttons a:hover {
        padding: 12px 24px;
        outline: 2px solid white;
        border-radius: 24px;
        background-color: transparent;
        margin-bottom: 20px;
        color: white;
        margin: 0 8px;
        font-weight: 400;
    }
    .service-banner-buttons .service-shown {
        padding: 12px 24px;
        outline: 2px solid white;
        border-radius: 24px;
        background-color: transparent;
        margin-bottom: 20px;
        color: white;
        margin: 0 10px;
    }

    .service-banner-buttons .service-shown:hover {
        margin: 0 10px;
    }

    .service-banner-content {
        display: grid;
        grid-template-columns: 2fr 3fr;
        gap: 80px;
        place-items: center;

    }

    .service-banner-content > img {
        width: 100%;
        max-height: 90%;
        align-self: center;
        justify-self: left;
        border-radius: 12px;
    }

    .service-banner-content > div > h1 {
        margin-top: 0;
        color: white;
        text-align: left;
    }
    .service-banner-content > div > p {
        color: white;
        text-align: left;
    }


    .call-to-action {
        margin: 40px 0 auto auto;
        display: block;
        padding: 12px 24px;
        outline: 2px solid white;
        border-radius: 24px;
        background-color: transparent;
        margin-bottom: 20px;
        color: white;
        width: fit-content;
        text-align: right;
    }

    .call-to-action:hover {
        background-color: rgb(32, 32, 128);
        color: white;
        outline: none;
	    box-shadow: white 0px 0px 20px;
    }

    @media screen and (max-width: 767px) {
        .service-banner {
            padding: 40px 10px;
        }

        .service-banner-buttons a {
            font-size: 14px;
            padding: 6px 12px;
            margin: 6px;
        }

        .service-banner-buttons a:hover {
            font-size: 14px;
            padding: 6px 12px;
            margin: 6px;
        }
        .service-banner-buttons .service-shown {
            font-size: 14px;
            padding: 6px 12px;
            margin: 6px;

        }
        .service-banner-buttons .service-shown:hover {
            font-size: 14px;
            padding: 6px 12px;
            margin: 6px;

        }

        .service-banner-content {
            text-align: left;
            grid-template-columns: 1fr;
            padding: 10px;
        }
        .service-banner-content img {
            grid-row: 2;
            font-size: 18px;
        }

    }


</style>