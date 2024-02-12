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

<section class="benefits">
    <h1>Discover the <span class="gradient-text">Benefits</span> of Xsdesign</h1>
    <div class="layout">
        <article class="speed animate">
            <div class="content">
                <p class="gradient-text">Speed</p>
                <span>Launch your online presence in minutes with Xsdesign. Our intuitive drag-and-drop interface means no coding knowledge is required, enabling you to go live rapidly.</span>
            </div>
        </article>
        <article class="seo animate">
            <div class="content">
                <p class="gradient-text">SEO</p>
                <span>Boost your visibility on search engines right from the start. Xsdesign is engineered to optimize your site for SEO, enhancing your site's discoverability and driving more organic traffic.</span>
            </div>
        </article>
        <article class="personalization animate">
            <div class="content">
                <p class="gradient-text">Personalization</p>
                <span>Reflect your brand's unique identity with endless customization options. From templates to widgets, Xsdesign offers the tools you need to tailor your site to your exact preferences and audience needs.</span>
            </div>
        </article>
        <article class="support animate">
            <div class="content">
                <p class="gradient-text">Support</p>
                <span>Never feel lost with our 24/7 expert support team. Whether you have a question, need guidance, or encounter a challenge, we're here to ensure your website building experience is smooth and successful.</span>
            </div>
        </article>
    </div>
</section>


<FaQs></FaQs>


<Footer></Footer>



<style>

    .benefits {
        margin-top: 40px;
        display: flex;
        flex-direction: column;
        align-items: center; /* This centers the .layout grid horizontally */
        gap: 40px;
        padding: 20px; /* Add padding if needed */
        max-width: calc(100% - 40px);
        overflow: hidden;
    }

    .benefits h1 {
        text-align: center;
    }
    
    .layout {
        display: grid;
        grid-template-columns: 1fr 1fr;
        width: 100%;
        max-width: 1800px;
        position: relative;

    }

    .benefits article {
        padding: 40px;
        height: 400px;
        display: grid;
        align-items: flex-start;
        width: calc(100% - 80px);
    }

    .benefits article:hover {
        background: white;
    }

    .benefits article:hover p {
        transform: translateX(20px);

    }

    .benefits article p {
        font-size: 2em;
        font-weight: bold;
        transition: transform .1s ease-in;
    }

    .benefits article span {
        font-size: 18px;
        line-height: 1.6em;
        color: black;
    }


    .speed {
        background: linear-gradient(45deg, rgb(241, 241, 255), rgb(200, 226, 255));
    }

    .seo {
        background: linear-gradient(45deg, rgb(241, 255, 248), rgb(183, 238, 255));
    }

    .personalization {
        background: linear-gradient(45deg, rgb(241, 241, 255), rgb(229, 200, 255));
    }

    .support {
        background: linear-gradient(45deg, rgb(255, 255, 241), rgb(255, 200, 233));
    }



    @media screen and (max-width: 900px) {
        .layout {
            display: grid;
            grid-template-columns: 1fr;
        }

        .benefits {
            padding: 0;
            max-width: 100%;
        }

        .benefits {
            padding: 0;
        }
    }
</style>
