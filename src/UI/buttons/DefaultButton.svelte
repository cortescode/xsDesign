<script lang="ts">
    export let text: string;
    export let action = () => {
        window.location.href = "";
    }; // function

    export let submit_active = false;


</script>

{#if submit_active }
    <button on:click={action} class="default-button" type="submit" >{text}</button>
{:else }
    <button on:click={action} class="default-button">{text}</button>
{/if}

