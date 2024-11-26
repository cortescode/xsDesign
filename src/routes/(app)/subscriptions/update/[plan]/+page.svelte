<script lang="ts">
    import { goto } from "$app/navigation";
    import SubscriptionUpdate from "$auth/subscriptions/components/SubscriptionUpdate.svelte";
    import { PLANS } from "$auth/subscriptions/plans.js";

    let { data } = $props();
    const plan = data.plan as PLANS;

    if(!plan) {
        goto("/pricing")
    }

</script>


<!-- @ts-ignore -->
<SubscriptionUpdate {plan}></SubscriptionUpdate>