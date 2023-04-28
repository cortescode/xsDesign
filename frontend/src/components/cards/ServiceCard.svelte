<!-- ------------------------------------------ J S ------------------------------------------ -->
<script>
    export let iconUrl;
    export let title;
    export let description;
    export let linkUrl;
</script>


<!-- ------------------------------------------ H T M L ------------------------------------------ -->
<a href="{linkUrl}" class="service-card">
    <img class="service-icon" src="{ iconUrl }" alt="" srcset="{ iconUrl }">
    <h2>{ title }</h2>
    <p>{ description }</p>
    <a href="{linkUrl}">
        Obtener más información
        <img class="link-icon" src="/media/assets/icons/right-arrow.png" alt="" srcset="/media/assets/icons/right-arrow.png"></a>
</a>


<!-- ------------------------------------------ C S S ------------------------------------------ -->
<style>
    .service-card {
        display: grid;
        text-decoration: none;
        grid-template-columns: 1fr;
        gap: 32px;
        height: fit-content;
        padding: 20px;
        background-color: white;
        border-radius: 12px;
        box-shadow: rgba(100, 100, 110, 0.2) 0px 8px 28px 0px;
        max-width: 420px;
        width: calc(100% - 40px);
        transition: .2s;
    }


    .service-card:hover {
        box-shadow: rgba(0, 60, 255, 0.4) 0 0 40px;
        font-weight: 400;
    }

    .service-card img {
        justify-self: center;
        width: 40px;
    }

    .service-card h2 {
        font-weight: bold;
        text-align: center;
    }

    .service-card a {
        text-decoration: none;
        font-size: 16px;
        font-weight: bold;
        color: var(--dark);
    }

    .service-card:hover a {
        background: linear-gradient(to right, #667eea, #764ba2);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;

    }

    .link-icon {
        width: 10px !important;
        transition: .2s;
        margin-left: 12px;
    }
    .service-card:hover a .link-icon {
        margin-left: 20px;
    }

    .service-card * {
        margin: 0;
        padding: 0;
    }

    @media screen and (max-width: 767px) {
        .service-card {
            margin-bottom: 40px;
        }
    }


</style>