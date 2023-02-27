<!-- ------------------------------------------ J S ------------------------------------------ -->
<script>
    export let iconUrl;
    export let title;
    export let description;
</script>


<!-- ------------------------------------------ H T M L ------------------------------------------ -->
<article class="feature-card">
    <img class="feature-icon" src="{ iconUrl }" alt="" srcset="{ iconUrl }">
    <h3>{ title }</h3>
    <p>{ description }</p>
    <a href="/auth">
        Registrate gratis
        <img class="link-icon" src="/media/assets/icons/right-arrow.png" alt="" srcset="/media/assets/icons/right-arrow.png">
    </a>
</article>


<!-- ------------------------------------------ C S S ------------------------------------------ -->
<style>
    .feature-card {
        display: grid;
        grid-template-columns: 1fr;
        gap: 32px;
        padding: 20px;
        background-color: white;
        border-radius: 12px;
        box-shadow: rgba(100, 100, 110, 0.2) 0px 8px 28px 0px;
        width: 90%;
        max-width: 400px;
    }

    .feature-card img {
        width: 40px;
    }

    .feature-card h3 {
        font-weight: bold;
    }

    .feature-card a {
        text-decoration: none;
        color: var(--dark);
    }

    .feature-card a:hover {
        font-weight: bold;
        background: linear-gradient(to right, #667eea, #764ba2);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    .feature-card * {
        margin: 0;
        padding: 0;
    }

    .link-icon {
        width: 10px !important;
        transition: .2s;
        margin-left: 12px;
    }
    .feature-card a:hover .link-icon {
        margin-left: 28px;
    }

    @media screen and (max-width: 767px) {
        .feature-card {
            margin-bottom: 40px;
        }
    }

</style>