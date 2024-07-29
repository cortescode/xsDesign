<script lang="ts">
    import { enhance } from "$app/forms";
    import { MessageStatus, type Message } from "$lib/interfaces/Message.js";
    import { website } from "$lib/stores/website";

    export let form;

    const authorizedExtensions = [".jpg", ".jpeg", ".png", ".webp"];

    // Current values
    let favicon: HTMLImageElement;
    let social_image: HTMLImageElement;
    
    // Files added by the user throughout the inputs
    let favicon_file: any = null;
    let social_image_file: any = null;

    let message: Message;

    $: {
        $website, message, favicon_file, social_image_file, favicon, social_image;
    }

    
    // Check the response is correct, if so updates favicon and socialImage (if modified) in website store and
    // update UI to reflect the changes
    function manageFormResponse(result: any) {
        // If any error occourred and show it on screen and stops the function
        if (result.type == "failure") {
            return createAndSetMessage(MessageStatus.ERROR, result.data.message)
        }

        if (result?.data?.favicon_url) 
            updateFavicon(result.data.favicon_url)
        if (result?.data?.social_image_url) 
            updateSocialImage(result.data.social_image_url)

        // Show success message on UI
        const messageContent = "Congratulations! Your images were updated successfully";
        createAndSetMessage(MessageStatus.SUCCESS, messageContent)

    }

    // Handle when a favicon file image is added and update it on the ui
    function handleFaviconFileInputChange(event: any) {
        const file = event.target.files[0];

        if (file) {
            const reader = new FileReader();
            reader.onload = (e: any) => {
                favicon_file = e.target.result;
            };
            reader.readAsDataURL(file);
        }
    }

    // Handle when a social file image is added and update it on the ui
    function handleSocialImageFileInputChange(event: any) {
        const file = event.target.files[0];

        if (file) {
            const reader = new FileReader();
            reader.onload = (e: any) => {
                social_image_file = e.target.result;
            };
            reader.readAsDataURL(file);
        }
    }

    // Update the favicon shown in the UI
    function updateFavicon(newFavicon: any) {

        $website.config.favicon_url = newFavicon;

        if(favicon)
            favicon.src = newFavicon

        favicon_file = null
    }

    // Update the social image shown in the UI
    function updateSocialImage(newSocialImage: any) {
        
        $website.config.social_image_url = newSocialImage

        if(social_image)
            social_image.src = newSocialImage

        social_image_file = null
    }


    // Modify the global message and (so it is just shown one error at a time)
    // And manage message deactivation
    function createAndSetMessage(status: MessageStatus, content: string) {
        message = {
            status: status,
            active: true,
            content: content,
        };

        setTimeout(() => {
            message.active = false;
        }, 8000)
    }

</script>

<section class="wrapper">
    <form
        class="animate"
        method="POST"
        enctype="multipart/form-data"
        use:enhance={({}) => {
            return async ({ result }) => {
                manageFormResponse(result);
            };
        }}
    >
        <div class="form-header">
            <h2>Site images</h2>
            <input class="designer-button" type="submit" value="Update" />
        </div>

        {#if message && message.active}
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
        {/if}

        <div class="inputs-wrapper">
            <div class="input-field">
                <label for="favicon-input">
                    Favicon
                    <p>
                        Appears next to the title in your browser tab.
                        Recommended size is 32x32 px.
                    </p>
                    {#if $website.config?.favicon_url}
                        <p><b>Current: </b></p>
                        <img
                            class="favicon"
                            alt="favicon"
                            src={$website.config.favicon_url}
                            bind:this={favicon}
                        />
                        <!-- If any new favicon image was added to update it -->
                        {#if favicon_file != null }
                            <p>Update to:</p>
                            <img
                                class="favicon"
                                alt="favicon-update"
                                src={favicon_file}
                            />
                        {/if }
                    {/if}
                </label>

                <input
                    type="file"
                    name="favicon"
                    id="favicon-input"
                    accept={authorizedExtensions.join(",")}
                    on:change={handleFaviconFileInputChange}
                />
            </div>
            <div class="input-field">
                <label for="social-image-input">
                    Social image
                    <p>
                        Appears when a link to the site is shared on social
                        media. All other pages will use this by default, unless
                        overridden. Recommended size is 1200 × 630 px.
                    </p>
                    {#if $website.config?.social_image_url != null}
                        <p><b>Current: </b></p>
                        <img
                            class="social-image"
                            alt="social"
                            src={$website.config?.social_image_url}
                            bind:this={social_image}
                        />
                        {#if social_image_file != null}
                            <p>Update to:</p>
                            <img
                                class="social-image"
                                alt="social-update"
                                src={social_image_file}
                            />
                        {/if }
                    {/if}
                </label>

                <input
                    type="file"
                    name="social-image"
                    id="social-image-input"
                    accept={authorizedExtensions.join(",")}
                    on:change={handleSocialImageFileInputChange}
                />
            </div>
        </div>
    </form>
</section>

<style>
    input {
        box-sizing: border-box;
        padding: 8px 12px;
        font-family: Comfortaa;
        font-size: 18px;
        border: 1px solid var(--blue);
        border-radius: 12px;
        display: block;
        margin: 10px 0;
    }

    .favicon {
        width: 35px;
        height: 35px;
    }

    .social-image {
        max-width: 200px;
        max-height: 200px;
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

    input[type="submit"] {
        cursor: pointer;
        margin: 0;
        width: fit-content;
        justify-self: right;
        padding: 8px 12px !important;
    }

    input[type="file"] {
        box-sizing: border-box;
        width: 100%;
        height: 100%;
        cursor: pointer;
        background-color: var(--light-blue);
        display: gird;
        place-items: center;
        text-align: center;
        padding: 20% 10%;
        color: var(--blue);
        border: 2px dashed var(--blue);
    }

    input[type="file"]::before {
        content: "Drop a file or click to add";
        display: block;
        font-family: Comfortaa;
        margin-bottom: 20px;
        font-size: 22px;
        color: var(--dark);
    }

    input::file-selector-button {
        display: none;
    }

    .inputs-wrapper {
        display: grid;
        gap: 60px;
    }

    .input-field {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 40px;
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

    .form-header h3 {
        margin: 0;
        font-size: 26px;
    }

    form {
        padding: 40px 40px;
        background-color: white;
        border-radius: 18px;
        margin: 40px 0;
        box-shadow: 0 0 40px -20px var(--blue);
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

    .message {
        padding: 20px;
        font-size: 16px;
        border-radius: 12px;
        animation: messageAppareance 0.4s ease-in-out;
        margin-bottom: 20px;
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
