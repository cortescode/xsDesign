<script lang="ts">
    import { onMount } from 'svelte';
    import { plansInfo, type PLANS } from '../plans';
    import { loadStripe, type Stripe } from '@stripe/stripe-js';
    import Logo from '$UI/Logo.svelte';
    import { user } from '$auth/stores/session';

    let {plan} = $props();
    
    let error = $state(false);
    let success = $state(false);


    async function updateSubscription() {
        console.log("Updating subscription to ", plan);

        const response = await fetch('/api/subscriptions/update-subscription?plan='+plan, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                plan: plan
            }),
        });

        if (!response.ok) {
            error = true;
            return;
        }

        console.log("Subscription updated successfully");
        console.log("Response: ", response);

        success = true;
    }


</script>

<div class="logo-wrapper">
    <Logo></Logo>
</div>

<section>
    {#if error}
        <h1>There was an error updating your subscription</h1>
        <p>Please try again later</p>
        <button class="designer-button" onclick={updateSubscription}>Try again</button>
        <button class="designer-button" onclick={() => {window.location.href = "/dashboard"}}>Go To Dashboard</button>
    {:else if success}
        <h1>You are now on the {plan} Plan</h1>
        <p>Your subscription has been successfully updated.</p>
        <button class="designer-button" onclick={() => {window.location.href = "/dashboard"}}>Go to dashboard</button>
    {:else}
        <h2>Update to {plan} plan</h2>
        <p>When you update your subscription, we will <b>adjust the charge for the current month</b> by either billing or refunding the difference based on the new plan.</p>
        <button class="designer-button" onclick={updateSubscription}>Accept and update</button>
    {/if}
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
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        width: 100vw;
        max-width: 800px;
        min-height: 100vh;
        margin: 0 auto;
        text-align: center;
    }
    section h1 {
        margin-bottom: 20px;
        font-size: 3rem;
    }

    section p {
        width: 100%;
        max-width: 420px;
    }

    section button {
        margin-bottom: 20px;
    }

</style>