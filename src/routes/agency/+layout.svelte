<script>
    import FlashCard from "$lib/components/cards/FlashCard.svelte";

    let shouldRender = false;

    
</script>


<slot/>
{#if shouldRender}
    <FlashCard></FlashCard>
{/if}


