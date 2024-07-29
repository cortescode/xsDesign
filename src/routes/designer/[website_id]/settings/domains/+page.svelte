<script lang="ts">
    import type { Domain } from "$publish/domains/interfaces/Domain";
    import { website } from "$lib/stores/website";
    import { config } from "dotenv";
    import { enhance } from "$app/forms";
    import { MessageStatus, type Message } from "$lib/interfaces/Message";
    import DomainView from "$publish/domains/components/DomainComponent.svelte";
    import { addMessage, messages } from "$lib/stores/messages";

    $: {
        $messages, $website;
    }

    function manageAddDomainResponse(response: any) {
        
        if (!response.ok) {
            createAndSetMessage(MessageStatus.ERROR, "Error adding the domain");
            return;
        }
        createAndSetMessage(
            MessageStatus.SUCCESS,
            "Your domain was successfully added. Modify now your DNS records to active it (explained below).",
        );


        const domain = response.domain

        if(!$website.config.domains)
            $website.config["domains"] = []

        $website.config.domains.push(domain);
        $website = $website // required to trigger svelte reactivity to display updated domain list in UI
    }

    function createAndSetMessage(status: MessageStatus, content: string) {
        let message: Message = {
            status: status,
            active: true,
            content: content,
        };
        addMessage(message)
    }
</script>

<div class="wrapper">
    <section class="animate">
        <div class="form-header">
            <h2>Base domain</h2>
            <!-- <input class="designer-button" type="submit" value="Update"> -->
        </div>
        {#if $website.published}
            <ul class="domain-list">
                <li>
                    <div class="domain not-removable">
                        <p>{$website.id.toLowerCase()}.xsdesign.co</p>
                        <div class="domain-status"></div>
                    </div>
                </li>
            </ul>
        {:else}
            <p>Publish your site to see your free domain associated</p>
        {/if}
    </section>

    <section class="animate">
        <div class="form-header">
            <h2>Custom domains</h2>
            <!-- <input class="designer-button" type="submit" value="Update"> -->
        </div>

        {#if $website.published}
            <label for="">Add domain:</label>

            <form
                class="animate"
                method="POST"
                action="./domains/create"
                use:enhance={({}) => {
                    return async ({ result }) => {
                        manageAddDomainResponse(result);
                    };
                }}
            >
                <div class="add-domain-wrapper">
                    <input
                        type="text"
                        name="domain"
                        placeholder="www.example.com"
                    />
                    <button class="designer-button"> Add </button>
                </div>
            </form>

            {#if $website.config?.domains && $website.config?.domains?.length > 0}
                <p>Custom domains:</p>
                <ul class="domain-list">
                    {#each $website.config?.domains as domain}
                        <li>
                            <DomainView {domain}></DomainView>
                        </li>
                    {/each}
                </ul>

                <button class="refresh-button designer-button"
                    >Refresh status</button
                >
            {:else}
                <p>No custom domain added yet</p>
            {/if}
        {:else}
            <p>Publish your site to see your free domain associated</p>
        {/if}
    </section>
</div>

<style>
    input {
        box-sizing: border-box;
        padding: 8px 12px;
        font-family: Comfortaa;
        font-size: 18px;
        border: 1px solid var(--blue);
        border-radius: 12px;
        display: block;
        margin: 10px;
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
        cursor: default !important;
        margin: 0;
        padding: 0;
    }
/* 
    input[type="submit"] {
        cursor: pointer;
        margin: 0;
        width: fit-content;
        justify-self: right;
        padding: 8px 12px !important;
    }
 */
    input::file-selector-button {
        display: none;
    }

    .add-domain-wrapper {
        display: grid;
        grid-template-columns: auto auto;
    }

    .add-domain-wrapper button {
        height: fit-content;
        margin: 10px 0;
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

    section {
        padding: 40px 40px;
        background-color: white;
        border-radius: 18px;
        margin: 40px 0;
        box-shadow: 0 0 40px -20px var(--blue);
        width: 580px;
        display: grid;
        place-items: center;
    }

    ul {
        margin: 0;
        padding: 0;
        text-align: center;
    }

    ul li {
        list-style: none;
    }

    .domain-list {
        width: 100%;
    }

    .domain {
        position: relative;
        box-sizing: border-box;
        padding: 8px 20px;
        background-color: var(--light-blue);
        width: 100%;
        height: 60px;
        margin: 10px 0;
        border-radius: 12px;
        font-size: 22px;
        letter-spacing: 1.2px;
        display: grid;
        grid-template-columns: 1fr auto;
        align-items: center;
        gap: 20px;
        font-weight: bold;
        cursor: default !important;
        z-index: 2;
    }

    .not-removable:hover {
        grid-template-columns: 1fr auto !important;
    }

    .domain:hover {
        grid-template-columns: 1fr auto auto auto;
    }


    .domain-list .domain p {
        margin: 0;
        justify-self: left;
    }

    .domain-list .domain .domain-status {
        width: 18px;
        height: 18px;
        border-radius: 50%;
        background-color: greenyellow;
        border: 1px solid var(--blue);
        justify-self: right;
    }

    .refresh-button {
        margin-top: 40px;
    }
</style>
