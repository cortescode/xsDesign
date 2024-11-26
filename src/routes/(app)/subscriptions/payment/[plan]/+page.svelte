<script lang="ts">
    import { goto } from "$app/navigation";
    import SubscriptionPayment from "$auth/subscriptions/components/SubscriptionPayment.svelte";
    import { PLANS } from "$auth/subscriptions/plans.js";

    let { data } = $props();
    const plan = data.plan as PLANS;

    if(!plan) {
        goto("/pricing")
    }

</script>


<!-- @ts-ignore -->
<SubscriptionPayment {plan}></SubscriptionPayment>