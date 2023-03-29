<!-- ------------------------------------------ J S ------------------------------------------ -->
<script>
    export let iconUrl;
    export let title;
    export let description;
    export let price;
    export let caracteristics; // list of strings
    export let linkUrl;
    export let linkText;
</script>


<!-- ------------------------------------------ H T M L ------------------------------------------ -->
<article class="feature-card">
    <img class="feature-icon" src="{ iconUrl }" alt="" srcset="{ iconUrl }">
    <h2>{ title }</h2>
    <p class="description">{ description }</p>
    <p class="undiscounted-price">{ parseInt(price)*2 } € <span>/año</span></p>
    <p class="price">{ price } <span>/año</span></p>
    <ul class="details">
        {#each caracteristics as caracteristic }
            <li>{caracteristic}</li>
        {/each}
    </ul>
    <a href="{linkUrl}">
        { linkText }
        <img class="link-icon" src="/media/assets/icons/right-arrow.png" alt="" srcset="/media/assets/icons/right-arrow.png">
    </a>
</article>


<!-- ------------------------------------------ C S S ------------------------------------------ -->
<style>
    .feature-card {
        max-width: 600px;
        width: 86%;
        display: grid;
        grid-template-columns: 1fr;
        height: max-content;
        gap: 32px;
        padding: 28px;
        background-color: white;
        border-radius: 12px;
        box-shadow: rgba(100, 100, 110, 0.2) 0px 8px 28px 0px;
    }

    .feature-card h2 {
        background: linear-gradient(to right, #667eea, #764ba2);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    .feature-card img {
        width: 40px;
    }


    .feature-card a {
        text-decoration: none;
        font-size: 18px;
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

    .price {
        font-size: 20px;
        font-weight: bold;
        background: linear-gradient(to right, #667eea, #764ba2);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    .undiscounted-price {
        color: rgb(255, 72, 72);
        text-decoration: line-through;
        font-weight: bold;
        margin-bottom: -10px;
    }

    .price span {
        font-size: 16px;
    }

    .description {
        border-bottom: 1px solid rgba(0, 0, 0, 0.1);
        padding-bottom: 20px;
    }

    .details li {
        margin: 10px 20px;
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