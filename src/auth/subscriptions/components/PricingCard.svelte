<!-- ------------------------------------------ J S ------------------------------------------ -->
<script lang="ts">
    import { goto } from "$app/navigation";
    import { PLANS } from "../plans";


    export let plan: PLANS; // Stripe price id
    export let title: string;
    export let description: string;
    export let price: number;
    export let characteristics: string[] = []; // list of strings
    export let linkText = "Get plan";
    export let action_url = plan == PLANS.Starter ? '/auth/signup' : `/auth/signup?redirect_to=/subscriptions/payment/${plan}`;

</script>


<!-- ------------------------------------------ H T M L ------------------------------------------ -->
<article class="feature-card">
    <h3>{ title }</h3>
    <p class="description">{ description }</p>
    <p class="price">{ price > 0 ? `${price}€/month` : 'free' } <span></span></p>
    <ul class="details">
        {#each characteristics as characteristic }
            <li>{characteristic}</li>
        {/each}
    </ul>
    <a class="designer-button" href={action_url}>
        { linkText }
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

    .feature-card h3 {
        color: var(--dark-blue);
        padding: 6px 12px;
        border-radius: 8px;
    }

    .feature-card * {
        margin: 0;
        padding: 0;
    }

    

    .feature-card a {
        text-decoration: none;
        font-size: 18px;
        padding: 10px 20px;
    }

    .price {
        font-size: 40px;
        font-weight: lighter;
        background: radial-gradient(100% 100% at 100% 0, #5adaff 0, #5468ff 100%);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
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
        list-style: none;
        font-weight: bold;
    }


    @media screen and (max-width: 767px) {
        .feature-card {
            margin-bottom: 40px;
        }
    }


</style>