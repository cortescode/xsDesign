<!-- ------------------------------------------ J S ------------------------------------------ -->
<script>
    export let title;
    export let description;
    export let price;
    export let characteristics = []; // list of strings
    export let linkUrl = "/";
    export let linkText = "Empezar";
</script>


<!-- ------------------------------------------ H T M L ------------------------------------------ -->
<a href="{linkUrl}" class="feature-card">
    <h2>{ title }</h2>
    <p class="description">{ description }</p>
    <p class="price">{ price } <span></span></p>
    <ul class="details">
        {#each characteristics as characteristic }
            <li>{characteristic}</li>
        {/each}
    </ul>
    <a href="{linkUrl}">
        { linkText }
        <img class="link-icon" src="/media/assets/icons/right-arrow.png" alt="" srcset="/media/assets/icons/right-arrow.png">
    </a>
</a>





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
        border-radius: 8px;
        border: 2px solid var(--blue);
        box-shadow: rgba(100, 100, 110, 0.2) 0px 8px 28px 0px;
        transition: .2s;
        text-align: center;
    }

    .feature-card:hover {
        box-shadow: rgba(0, 60, 255, 0.4) 0 0 40px;
        font-weight: 400;
        transform: translateY(-12px);
    }

    .feature-card h2 {
        background: var(--blue);
        color: white;
        padding: 6px 12px;
        border-radius: 8px;
    }

    .feature-card img {
        width: 40px;
    }


    .feature-card a {
        text-decoration: none;
        font-size: 18px;
        color: var(--dark);
    }

    .feature-card:hover a {
        font-weight: bold;
        background: radial-gradient(100% 100% at 100% 0, #5adaff 0, #5468ff 100%);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }


    .link-icon {
        width: 10px !important;
        transition: .2s;
        margin-left: 12px;
    }
    .feature-card:hover a .link-icon {
        margin-left: 28px;
    }


    .feature-card * {
        margin: 0;
        padding: 0;
    }

    .price {
        font-size: 28px;
        font-weight: bold;
        background: radial-gradient(100% 100% at 100% 0, #5adaff 0, #5468ff 100%);
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
        border-bottom: 1px solid #5468ff;
        padding-bottom: 20px;
        font-size: 18px;
    }

    .details li {
        padding: 16px 20px;
        border-bottom: 1px solid #5468ff;
        list-style: none;
        font-weight: bold;
    }


    @media screen and (max-width: 767px) {
        .feature-card {
            margin-bottom: 40px;
        }
    }


</style>