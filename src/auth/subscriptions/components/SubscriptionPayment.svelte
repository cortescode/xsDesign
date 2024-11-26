<script lang="ts">
    import { onMount } from 'svelte';
    import { plansInfo, type PLANS } from '../plans';
    import { loadStripe, type Stripe } from '@stripe/stripe-js';
    import Logo from '$UI/Logo.svelte';
    import { user } from '$auth/stores/session';

    export let plan: PLANS | null = null;
    
    // Obtain Stripe from publik key
    const STRIPE_PUBLIC_KEY = "pk_test_51K9Bj5DmMLvv6s9pw3YhEX43jSqflchSluRa13tceqclGkgJo2z0Igy0aVJUCkzHHPn71pHnEtlQhH7hVY9zTvGL00GwYb5QvQ";
    let stripe: Stripe | null = null;
    onMount(async () => {
        stripe = await loadStripe(STRIPE_PUBLIC_KEY);
        console.log("Stripe loaded. Plan: ", plan);
    });

    // if all data is present, create the checkout session
    $: if ($user && stripe && plan && plansInfo[plan].price_id) {
        console.log("Creating checkout session for plan: ", plan);
        //@ts-ignore
        createCheckoutSession(plansInfo[plan].price_id);
    }
    async function createCheckoutSession(priceId: string) {

        if (!stripe) {
            console.error('Stripe is not initialized');
            return;
        }
        
        const user_id = $user?.uid;

        const fetchClientSecret = async () => {
            const response = await fetch('/api/subscriptions/create-checkout-session', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ 
                    price_id: priceId,
                    plan: plan,
                    user_id: user_id
                }),
            });

            if (!response.ok) 
                throw new Error('Failed to create checkout session');
             
            const { sessionId, clientSecret } = await response.json();
            
            return clientSecret;
        }
        const checkout = await stripe.initEmbeddedCheckout({
            fetchClientSecret
        });

        checkout.mount('#checkout-element');
    }


</script>

<div class="logo-wrapper">
    <Logo></Logo>
</div>

<section>

    <div id="checkout-element"></div>

</section>



<style>

    .logo-wrapper {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 20px auto 0 auto;
    }

    section {
        box-sizing: border-box;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100vw;
        min-height: 100vh;
        margin: 0 auto;
    }

    #checkout-element {
        width: 100%;
        height: 100%;
        max-width: 600px;
        padding: 10px;
        border-radius: 10px;
        background-color: white;
    }
</style>