<script lang="ts">
    import { MessageStatus, type Message } from "$lib/interfaces/Message";
    import { website } from "$website/stores/website";

    // Default values = stored website values.
    // They are binded to their respective html tags values so they are automaticlly updated
    let websiteName: string = $website.name || ""
    let websiteDescription: string = $website.description || ""

    let message: Message;


    // Setting all elements as reactive
    $: {websiteName, websiteDescription, message}


    // Edit website name and description based on websiteName and websiteDescription variables
    async function editWebsite() {
        // Basic checks
        if(websiteName == $website.name && websiteDescription == $website.description) {

            message = {
                status: MessageStatus.ERROR,
                active: true,
                content: "Modify any value before updating your website"
            }

            return
        }

        const response = await fetch(`/designer/${$website.id}/settings/general`, {
            method: 'POST', // Assuming POST triggers the deletion as per your initial setup
            body: JSON.stringify({
                "name": websiteName,
                "description": websiteDescription
            }),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.ok) {
            message = {
                status: MessageStatus.SUCCESS,
                active: true,
                content: "Congratulations! Your site was updated successfully"
            }

            // Update store values
            $website.name = websiteName
            $website.description = websiteDescription
        } else {
            message = {
                status: MessageStatus.ERROR,
                active: true,
                content: "An error occourred updating your website. Try it again or in a few minutes. If the error persists contact support."
            }
        }
    }

</script>


<section class="wrapper">

    <form class="animate">
        <div class="form-header">
            <h2>General settings</h2>
            <input class="designer-button" type="submit" value="Update" on:click={editWebsite}>
        </div>

        {#if message && message.active }
            {#if message.status == MessageStatus.SUCCESS }
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
        {/if}

        <label for="">Name</label>
        <input type="text" bind:value={websiteName}>

        <label for="">Description
            <p>Default description for new pages (used as <i>metatag</i> in html document). Important for SEO.</p>
        </label>
        <textarea rows="6" cols="50" bind:value={websiteDescription}/>

    </form>
</section>

<style>

    input, textarea {
        box-sizing: border-box;
        padding: 10px 14px;
        width: 80%;
        font-family: Comfortaa;
        font-size: 18px;
        border: 1px solid white;
        border-radius: 12px;
        background-color: var(--light-blue);
        color: var(--dark);
        display: block;
        margin: 10px 0;
    }

    input:hover, textarea:hover {
        border: 1px solid var(--blue);
    }
    input:focus, input:focus-visible, textarea:focus, textarea:focus-visible {
        outline: 1px solid var(--blue);
    }

    textarea {
        width: 100%;
        padding: 14px;
        resize: none;
    }

    .wrapper {
        box-sizing: border-box;
        padding: 60px 40px;
        width: calc(100vw - 280px);
        max-width: none;
        height: 100%;
        max-height: calc(100vh - 60px);
        overflow: auto;
        margin: 0;
        display: grid;
        place-items: center;
    }

    h2 {
        margin: 0;
        cursor: default !important;
    }

    .message {
        padding: 20px;
        font-size: 16px;
        border-radius: 12px;
        animation: messageAppareance .4s ease-in-out;
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

    input[type="submit"] {
        cursor: pointer;
        margin: 0;
        width: fit-content;
        justify-self: right;
        padding: 8px 12px !important;
        color: white;
        background-color: var(--blue);
    }

    input[type="submit"]:hover {
        background-color: var(--dark);
    }


    input::file-selector-button {
        display: none;
    }


    .form-header {
        display: grid;
        grid-template-columns: auto auto;
        align-items: center;
        margin-bottom: 20px;
        min-width: 100%;
        padding-bottom: 20px;
        border-bottom: 1px solid var(--blue);
    }

    form {
        padding: 40px 40px;
        background-color: white;
        border-radius: 18px;
        margin: 40px 0;
        box-shadow: 0 0 40px -20px var(--blue) ;
        max-width: 940px;
    }
    

    form label {
        margin: 40px 0 10px 0;
        display: block;
        font-size: 20px;
        font-weight: bold;
        color: var(--blue);
        line-height: 1.6em;
    }
    form label p {
        font-size: 16px;
        font-weight: lighter;
        color: var(--dark);
        line-height: 1.6em;
        max-width: 400px;
    }

    @keyframes messageAppareance {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }

</style>