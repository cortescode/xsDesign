<script>
    import { onMount, beforeUpdate } from "svelte";
    import FlashCard from "../components/cards/FlashCard.svelte";

    let blocked_directory = "platform";

    let shouldRender = false;

    /* beforeUpdate(() => {
        shouldRender = !window.location.pathname.includes(blocked_directory);
    }); */
</script>


<slot/>
{#if shouldRender}
    <FlashCard></FlashCard>
{/if}