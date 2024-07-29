<script lang="ts">
    import { logout, validateAndUpdateUserEmail } from "$auth/auth";
    import { user } from "$lib/stores/session";


    let newEmail = '';
    let currentPassword = '';
    let errorMessage = '';
    let isPasswordRequired = false;


    let badEmailMessageError: string = "You need to enter a valid email"
    let showBadEmailMessage: boolean = false


    let startEmailModification: boolean = false

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


    $: { 
        newEmail, 
        startEmailModification, 
        errorMessage, 
        isPasswordRequired 
    }

    $: if(newEmail?.length > 0 && !emailRegex.test(newEmail))
            showBadEmailMessage = true;
        else showBadEmailMessage = false;

    $: if ($user) {
        isPasswordRequired = $user.providerData.some(provider => provider.providerId === 'password');
    } else {
        isPasswordRequired = false;
    }

    async function handleEmailUpdate() {
        errorMessage = '';
    
        try {
            await validateAndUpdateUserEmail(newEmail, isPasswordRequired ? currentPassword : undefined);
            
            if(isPasswordRequired)
                startEmailModification = true

            newEmail = '';
            currentPassword = '';

        } catch (error) {
            console.error('Error:', error);
            //@ts-ignore
            errorMessage = error.message || 'An unexpected error occurred.';
        } 
    }
</script>

<article>

    <label for="email">Modify Email:</label>
    <span>current: <b>{$user?.email}</b></span>
    <div class="input-wrapper">
        <span>New Email:</span>
        <input type="text" id="email" bind:value={newEmail} placeholder="Enter your new email">
    </div>
    

    {#if isPasswordRequired}
        <div class="input-wrapper">
            <span>Current Password:</span>
            <input id="currentPassword" type="password" bind:value={currentPassword} required />
        </div>
        <span class="small-message"><i>*You need to introduce your current password to modify your email</i></span>
    {/if}

    {#if errorMessage}
        <p class="error-message">{errorMessage}</p>
    {/if}

    {#if showBadEmailMessage}
        <p class="error-message">{ badEmailMessageError }</p>
    {:else if newEmail?.length > 0}
        <button class="designer-button" on:click={handleEmailUpdate}>Update Email</button>
    {/if}
</article>


{#if startEmailModification }
    <div class="modal-wrapper">
        <article class="modal">

            <button class="close-button" on:click={() => {
                startEmailModification = false
                logout()
            }}>X</button>

            <h2 class="gradient-text">Please confirm email modification</h2>

            <p>We have sent a verification email to the newly defined email address. Please confirm it, and the email will be updated automatically.</p>
            
            <p>You will need to log in again.</p>
        </article>
    </div>
{/if}


<style>

    .error-message {
        color: red
    }

    .small-message {
        font-size: 14px;
    }

    .input-wrapper {
        display: grid;
        grid-template-columns: auto 1fr;
        gap: 20px;
        place-items: center;
        width: 600px;
        margin: 20px 0;
    }

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
    .modal {
        width: 400px;
        margin: auto;
        border: 1px solid var(--blue);
        background-color: rgb(255, 255, 255);
        border-radius: 24px;
        padding: 40px;
    }

    .modal h2 {
        margin: 20px auto;
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
        margin: 0 0 10px 0;
        display: block;
        font-size: 20px;
        font-weight: bold;
        color: var(--blue);
        line-height: 1.6em;
    }

    h2 {
        margin: 0;
        cursor: default !important;
    }

    article > span {
        display: block;
        margin-bottom: 20px;
    }

</style>