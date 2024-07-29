<script lang="ts">
    import { MessageStatus, type Message } from "$lib/interfaces/Message";

    export let message: Message;
</script>

{#if message.status == MessageStatus.SUCCESS}
    <div class="message success-message">
        <p>Success</p>
        <span>{message.content}</span>
    </div>
{:else}
    <div class="message error-message">
        <p>Error</p>
        <span>{message.content}</span>
    </div>
{/if}


<style>
    .message {
        position: fixed;
        inset: auto 10px 10px auto;
        height: fit-content;
        width: fit-content;
        min-width: 400px;
        max-width: 800px;
        padding: 20px;
        font-size: 16px;
        border-radius: 12px;
        animation: messageAppareance 0.4s ease-in-out;
        z-index: 20;
    }

    .message p {
        margin: 0 0 10px 0;
        font-size: 22px;
    }

    .success-message {
        background-color: rgba(0, 255, 0, 0.4);
    }

    .error-message {
        background-color: rgba(255, 0, 0, 0.4);
    }
</style>