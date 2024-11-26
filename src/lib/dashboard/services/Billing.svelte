<script lang="ts">
    import { userPlan } from "$auth/stores/session";
    import { PLANS } from "$auth/subscriptions/plans";
    import Invoices from "$auth/subscriptions/components/Invoices.svelte";
</script>


<section class="animate">
    <h2>Billing</h2>

    <Invoices />
    <!-- 
    {#if $userPlan === PLANS.Starter}
        <div class="starter-plan-message">
            <h3>You are on the Starter plan. </h3>
            <p>Your current plan is free, so you don't have any billing information</p>
        </div>

    {:else}
        <Invoices />
    {/if}
     -->
</section>


<style>

    section {
        margin: 20px auto;
    }

    section h2 {
        margin-bottom: 20px;
        font-size: 24px;
        font-weight: 600;
    }

    .starter-plan-message {
        background-color: white;
        box-shadow: 10px 10px 20px -10px rgba(59, 144, 255, 0.6);
        padding: 20px;
        border-radius: 10px;
        max-width: 640px;
        color: var(--dark);
    }

    .starter-plan-message h3 {
        font-family: "Comfortaa", "Poppins", sans-serif;
        margin: 0;
        font-size: 1.5em;
        line-height: 1.5em;
    }
</style>