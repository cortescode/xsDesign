<script>
    export let id = "pricing"
    import PricingCard from "../cards/PricingCard.svelte";

    let free = [
        "One site",
        "Up to 5 pages",
        "Custom domain",
        /* "Cumplimiento de la legalidad vigente" */
    ]

    let professional = [
        "Up to 5 sites",
        "Unlimited pages",
        "Custom domain",
    ]

    let business = [
        "Unlimited sites",
        "Unlimited domains",
        "Custom domain",
    ]


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
    <h1>Take <span class="gradient-color">Action</span></h1>
    <p>It's time to create the web your business deserves</p>
    <div class="price-columns">
        <PricingCard 
            linkUrl="https://buy.stripe.com/dR62ceamL0cya1qfZ4" 
            title="Starter" description="Ideal to validate your business at no cost" 
            price="free" characteristics={free}
        />
        <PricingCard 
            linkUrl="https://buy.stripe.com/6oE8ACbqP6AWehG6ov" 
            title="Professional" description="Ideal to get the full potential of your business website" 
            price="16€/month" characteristics={professional}
        />
        <PricingCard 
            linkUrl="https://buy.stripe.com/bIY4km52r7F01uU4go" 
            title="Business" description="Ideal for agencies with multiple clients" 
            price="39€/month" characteristics={business}/>
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


