<script>
    import { PLANS } from "../plans";
    export let id = "pricing"
    import PricingCard from "./PricingCard.svelte";
    import { plansInfo } from "../plans";
    


</script>
<!-- 
    export let iconUrl;
    export let title;
    export let description;
    export let price;
    export let caracteristics; // list of strings
    export let linkUrl;
    export let linkText; -->

<section class="animate" id={id}>
    <h1>Take Action</h1>
    <p>It's time to create the web your business deserves</p>
    <div class="price-columns">
        <PricingCard 
            plan={PLANS.Starter}
            title={plansInfo[PLANS.Starter].title} description="Ideal to validate your business at no cost" 
            price={plansInfo[PLANS.Starter].price} characteristics={plansInfo[PLANS.Starter].characteristics}
            linkText="start for free"
        />
        <PricingCard 
            plan={PLANS.Professional}
            title={plansInfo[PLANS.Professional].title} description="Ideal to get the full potential of your business website" 
            price={plansInfo[PLANS.Professional].price} characteristics={plansInfo[PLANS.Professional].characteristics}
            linkText="Select Plan"
        />
        <PricingCard 
            plan={PLANS.Business}
            title={plansInfo[PLANS.Business].title} description="Ideal for agencies with multiple clients" 
            price={plansInfo[PLANS.Business].price} characteristics={plansInfo[PLANS.Business].characteristics}
            linkText="Select Plan"
        />
    </div>
</section>

<style>
    section {
        margin: 40px auto;
        max-width: 1150px;
        padding: 20px;
    }
    .price-columns {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        place-items: flex-end center;
        margin: 40px auto;
        max-width: 1150px;
        gap: 40px;
    }
    h1 {

        font-size: 2.8em;
        max-width: 640px;
        text-align: center;
        margin: 20px auto;
    }

    p {
        text-align: center;
    }


    @media screen and (max-width: 900px) {
        section {
            padding: 28px;
        }
        .price-columns {
            grid-template-columns: repeat(1, 1fr);
        }
    }

</style>


