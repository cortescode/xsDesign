<script>
    import FaQs from '$lib/components/sales/FAQs.svelte';
    import PricingSection from '$lib/components/sections/PricingSection.svelte';
    import CookiesBanner from '$lib/components/pop-ups/CookiesBanner.svelte';
    import PopUp from '$lib/components/pop-ups/PopUp.svelte';
    import Benefits from '$lib/components/sections/Benefits.svelte';
    import HeaderApp from '$lib/components/headers/HeaderApp.svelte';
    import DashboardHeader from '$lib/components/headers/DashboardHeader.svelte';

    import { onMount } from "svelte";
    import Footer from '$lib/components/sections/Footer.svelte';
    import FlashCard from '$lib/components/cards/FlashCard.svelte';
    import HeroApp from '$lib/components/heros/HeroApp.svelte';

    let shouldRender = false;

/* 
    export let data;

    onMount(() => {
        console.log(data)
    })
*/
    
</script>


<HeaderApp/>

<HeroApp 
    title="Discover the digital power of your business"
    description="Create the web your business needs, in a matter of minutes, for a ridiculous price"
    button="Access Beta for Free"
/>

<Benefits></Benefits>
<PricingSection id="pricing"></PricingSection>

<FaQs></FaQs>

<CookiesBanner></CookiesBanner>

{#if shouldRender}
    <FlashCard></FlashCard>
{/if}


<Footer></Footer>
