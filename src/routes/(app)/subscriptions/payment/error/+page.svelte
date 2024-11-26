<script>
    import DefaultButton from "$UI/buttons/DefaultButton.svelte";
    import DashboardHeader from "$UI/headers/DashboardHeader.svelte";
    import { userPlan } from "$auth/stores/session";
</script>


<DashboardHeader />
<section>
    <h1>There was an error updating the payment method { $userPlan } Plan</h1>
    <p>Your subscription has been successfully processed.</p>

    <DefaultButton text="Go to dashboard" action = {() => {
        window.location.href = "/dashboard";
    }}  />
</section>



<style>
    section {
        display: grid;
        place-items: center;
        width: 100%;
        padding: 0;
        margin: 80px auto 40px auto;
        text-align: center;
    }

    section h1 {
        font-size: 24px;
        font-weight: 700;
        margin-bottom: 0;
        color: #000;
    }

    section p {
        margin-bottom: 60px;
        font-size: 16px;
        font-weight: 400;
        color: #000;
    }
</style>