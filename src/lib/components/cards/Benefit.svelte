<!-- ------------------------------------------ J S ------------------------------------------ -->
<script>
    export let iconUrl;
    export let title;
</script>


<!-- ------------------------------------------ H T M L ------------------------------------------ -->
<article class="feature-card">
    <img class="feature-icon" src="{ iconUrl }" alt="" srcset="{ iconUrl }">
    <h2>{ title }</h2>
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
        transition: .2s;
    }

    .feature-card:hover {
        transform: translateY(-12px);
        background-color: var(--blue);
    }

    .feature-card:hover h2 {
        color: white;
    }

    .feature-card img {
        justify-self: center;
        width: 40px;
    }

    .feature-card h2 {
        font-weight: bold;
        text-align: center;
    }


    .feature-card * {
        margin: 0;
        padding: 0;
    }

    @media screen and (max-width: 767px) {
        .feature-card {
            margin-bottom: 40px;
        }
    }


</style>