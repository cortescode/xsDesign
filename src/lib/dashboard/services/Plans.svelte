<script lang="ts">
    import PlansSection from "$auth/subscriptions/components/DashboardPricingSection.svelte";
    import { userPlan } from "$auth/stores/session";
    import { plansInfo } from "$auth/subscriptions/plans";


    const plan_characteristics = plansInfo[$userPlan].characteristics;
</script>



<section class="animate">
    <div class="current-plan">
        <h2>Current Plan</h2>
        <p>{$userPlan}</p>
    </div>
    <div class="plan-characteristics">
        <h2>Plan Characteristics</h2>
        <ul>
        {#each plan_characteristics as characteristic, index}
            <li class="plan-characteristic">
                <p>{characteristic}</p>
            </li>
        {/each}
        </ul>
    </div>
</section>

<PlansSection />


<style>

    section {
        display: grid;
        grid-template-columns: 1fr 1fr;
        align-items: flex-start;
        justify-content: flex-start;
        gap: 40px;
        padding: 20px;
    }

    .current-plan {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
        padding: 20px;
    }

    .current-plan h2 {
        font-size: 24px;
        font-weight: bold;
        margin-bottom: 10px;
    }

    .current-plan > p {
        font-size: 20px;
        margin-bottom: 10px;
        padding: 10px 20px;
        border-radius: 0 12px 0 12px;
        border: 2px solid var(--blue);
        box-shadow: 10px 10px 20px -10px rgba(59, 144, 255, 0.6);
        color: var(--dark);
    }


    .plan-characteristics {
        width: fit-content;
        min-width: 380px;
        background-color: white;
        padding: 20px 40px;
        border-radius: 12px;
    }

    .plan-characteristics h2 {
        font-family: 'Comfortaa', 'Poppins', sans-serif;
        font-size: 22px;
        font-weight: lighter;
        margin-bottom: 40px;
    }
    

    .plan-characteristics ul {
        list-style: none;
        padding: 0;
        margin: 0;
        color: var(--dark);
    }

    .plan-characteristics ul p {
        padding: 8px 20px;
        margin: 10px 0;
        border-radius: 0 12px;
        background-color: var(--light-blue);
    }
</style>