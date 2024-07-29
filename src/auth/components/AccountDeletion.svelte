<script lang="ts">

    import { deleteUserAccount } from "$auth/auth";

    let startDelete: boolean = false;
    let deleteConfirmation: boolean = false;

    let deleteButtonInputValue: string = ""

    $: {
        if(deleteButtonInputValue === "delete")
            deleteConfirmation = true
        else deleteConfirmation = false

        
    }




    async function manageDeletion() {
        await deleteUserAccount()
    }
</script>



<article>

    <label for="email">Delete Account:</label>
    <span>Please be careful with this action</span>
    <button class="designer-button" on:click={() => startDelete = true}>Delete account</button>

</article>


{#if startDelete }
    <div class="modal-wrapper">
        <article class="delete-modal">

            <button class="close-button" on:click={() => startDelete = false}>X</button>

            <h2 class="gradient-text">Please confirm deletion</h2>

            <p>Write delete to confirm deletion</p>
            <input type="text" placeholder="delete" bind:value={deleteButtonInputValue}>

            {#if deleteConfirmation}
                <button class="designer-button" on:click={manageDeletion}>Confirm deletion</button>
            {/if}
        </article>
    </div>
{/if}


<style>

.close-button {
        margin: 0 0 0 calc(100% - 40px);
        border: none;
        border-radius: 50%;
        width: 40px;
        height: 40px;
        background-color: var(--blue);
        color: white;
    }

    .close-button:hover {
        background-color: var(--dark);
    }

    .modal-wrapper {
        box-sizing: border-box;
        margin: 0;
        display: grid;
        place-items: center;
        position: fixed;
        inset: 0;
        background-color: rgba(0, 2, 42, 0.8);
        width: 100vw;
        height: 100vh;
    }
    .delete-modal {
        width: 400px;
        margin: auto;
        border: 1px solid var(--blue);
        background-color: rgb(255, 255, 255);
        border-radius: 24px;
        padding: 40px;
    }

    .delete-modal h2 {
        margin: 20px auto;
    }

    .delete-modal input {
        margin: 40px 0;
    }


    article {
        padding: 40px 40px;
        background-color: white;
        border-radius: 18px;
        margin: 20px 0;
        box-shadow: 0 0 40px -20px var(--blue) ;
        max-width: 940px;
        min-width: 600px;
    }
    

    article label {
        margin: 10px 0 10px 0;
        display: block;
        font-size: 20px;
        font-weight: bold;
        color: var(--blue);
        line-height: 1.6em;
    }


    article > span {
        display: block;
        margin-bottom: 20px;
    }

    input {
        box-sizing: border-box;
        padding: 10px 14px;
        width: 100%;
        font-family: Comfortaa;
        font-size: 18px;
        border: 1px solid white;
        border-radius: 12px;
        background-color: var(--light-blue);
        color: var(--dark);
        display: block;
        margin: 0;
    }

    input:hover {
        border: 1px solid var(--blue);
    }
    input:focus, input:focus-visible {
        outline: 1px solid var(--blue);
    }
</style>