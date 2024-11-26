<script lang="ts">
    import { PLANS } from "../plans";
    export let id = "pricing";
    import PricingCard from "./PricingCard.svelte";
    import { plansInfo } from "../plans";
    import { userPlan } from "$auth/stores/session";
    import BlockedPricingCard from "./BlockedPricingCard.svelte";
</script>

<section class="animate" {id}>
    <div class="plans-section-header">
        <h2>Modify Subsctiption</h2>
        <p>Upgrade or downgrade your plan</p>
    </div>
    <div class="price-columns">
        {#if $userPlan === PLANS.Starter}
            <BlockedPricingCard
                title={plansInfo[PLANS.Starter].title}
                description="Ideal to validate your business at no cost"
                price={plansInfo[PLANS.Starter].price}
                characteristics={plansInfo[PLANS.Starter].characteristics}
                linkText={"You are on Starter"}
            />
        {:else}
            <PricingCard
                plan={PLANS.Starter}
                title={plansInfo[PLANS.Starter].title}
                description="Ideal to validate your business at no cost"
                price={plansInfo[PLANS.Starter].price}
                characteristics={plansInfo[PLANS.Starter].characteristics}
                linkText="Switch to Starter"
                action_url="/subscriptions/starter"
            />
        {/if}
        {#if $userPlan === PLANS.Professional}
            <BlockedPricingCard
                title={plansInfo[PLANS.Professional].title}
                description="Ideal to get the full potential of your business website"
                price={plansInfo[PLANS.Professional].price}
                characteristics={plansInfo[PLANS.Professional].characteristics}
                linkText="You are on Professional"
            />
        {:else}
            <PricingCard
                plan={PLANS.Professional}
                title={plansInfo[PLANS.Professional].title}
                description="Ideal to get the full potential of your business website"
                price={plansInfo[PLANS.Professional].price}
                characteristics={plansInfo[PLANS.Professional].characteristics}
                linkText="Switch to Professional"
                action_url="/subscriptions/payment/professional"
            />
        {/if}
        {#if $userPlan === PLANS.Business}
            <BlockedPricingCard
                title={plansInfo[PLANS.Business].title}
                description="Ideal for agencies with multiple clients"
                price={plansInfo[PLANS.Business].price}
                characteristics={plansInfo[PLANS.Business].characteristics}
                linkText="You are on Business"
            />
        {:else}
            <PricingCard
                plan={PLANS.Business}
                title={plansInfo[PLANS.Business].title}
                description="Ideal for agencies with multiple clients"
                price={plansInfo[PLANS.Business].price}
                characteristics={plansInfo[PLANS.Business].characteristics}
                linkText="Switch to Business"
                action_url="/subscriptions/payment/business"
            />
        {/if}
    </div>
</section>

<style>
    section {
        margin: 80px auto;
        padding: 20px;
    }

    .plans-section-header {
        box-sizing: border-box;
        width: 100%;
        padding: 20px;
        text-align: left;
    }


    .price-columns {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        place-items: flex-end center;
        margin: 40px auto;
        max-width: 1150px;
        gap: 40px;
    }
    h2 {
        font-size: 2em;
        max-width: 640px;
        margin: 20px 0;
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
