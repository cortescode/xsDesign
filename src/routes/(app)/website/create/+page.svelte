<script lang="ts">
    import Logo from "$UI/Logo.svelte";
    import { onMount } from "svelte";
    import ColorPaletteSelector from "./ColorPaletteSelector.svelte";
    import TemplateSelection from "./TemplateSelection.svelte";
    import BackButton from "$UI/buttons/BackButton.svelte";
    import type { Template } from "$website/interfaces/Template";

    let step = 0;

    let name: string;
    let description: string;

    let palette: any;
    let template_uid: string = "0";

    $: { name, description, palette, template_uid }

    function createWebsite() {
        if (!name || !description || !template_uid) {
            openErrorModal("You need to enter the name and description of your site")
            return
        };

        fetch("/api/website/create", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: name,
                description: description,
                template_uid: template_uid,
            }),
        })
            .then(async (response) => {
                if (response.redirected) {
                    // Redirect occurred
                    window.location.href = response.url; // Redirect to the new location
                } else {
                    // No redirect, handle the response as usual
                    // Example: Log response data to console
                    const responseData = await response.json();
                    console.log(responseData);
                }
            })
            .catch((error) => {
                alert(error);
            });
    }

    function openErrorModal(errorMessage: string) {
        alert(errorMessage);
        step = 0;
    }

    function setPalette(_palette: any) {
        palette = _palette
    }

    function setTemplate(_template: Template) {
        template_uid = _template.uid

        console.log(template_uid)
    }
</script>


<div class="creation-header">
    <BackButton></BackButton>
    <h1>Create your Website</h1>
    <div class="logo-wrapper">
        <Logo></Logo>
    </div>
</div>
<div class="wrapper">
    <div class="creation-steps">
        <div class="creation-steps-circles">
            <div class="circle active"></div>
            {#if step > 0}
                <div class="circle active"></div>
            {:else}
                <div class="circle"></div>
            {/if}
        </div>
    </div>

    {#if step == 0}
        <section class="information">
            <div class="website-info animate">
                <h2>Describe your project:</h2>

                <label for="name">Enter the name of your website:</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="name"
                    bind:value={name}
                />

                <label for="description">
                    Enter a brief description for your site:
                </label>
                <textarea
                    id="description"
                    name="description"
                    placeholder="description"
                    rows="5"
                    bind:value={description}
                />
            </div>
            <!-- <ColorPaletteSelector {setPalette}/> -->
        </section>
    {:else}
        <TemplateSelection {setTemplate}></TemplateSelection>
    {/if}

    <div class="buttons-wrapper">
        {#if step == 0}
            <button class="designer-button" on:click={() => step++}>
                Select Template
            </button>
        {:else}
            <button class="back-button" on:click={() => (step = 0)}>
                <svg width="10" height="10" viewBox="0 0 20 20">
                    <path
                        d="M8.388,10.049l4.76-4.873c0.303-0.31,0.297-0.804-0.012-1.105c-0.309-0.304-0.803-0.293-1.105,0.012L6.726,9.516c-0.303,0.31-0.296,0.805,0.012,1.105l5.433,5.307c0.152,0.148,0.35,0.223,0.547,0.223c0.203,0,0.406-0.08,0.559-0.236c0.303-0.309,0.295-0.803-0.012-1.104L8.388,10.049z"
                    ></path>
                </svg>
                Back
            </button>
            <button class="designer-button" on:click={createWebsite}>
                Create
            </button>
        {/if}
    </div>
</div>


<style>


    .creation-header {
        position: fixed;
        inset: 0 0 auto 0;
        height: fit-content;
        display: grid;
        grid-template-columns: 1fr 3fr 1fr;
        align-items: center;
        padding: 10px;
    }

    .creation-header h1 {
        margin: 0 auto;
        width: 100%;
        text-align: center;
        font-size: 2em;
        padding: 10px 20px;
        border-radius: 12px;
        background: white;
        color: var(--blue);
        width: fit-content;
    }

    .back-button {
        outline: 1px solid rgb(67, 28, 225);;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        background: white;
        padding: 8px 10px;
        height: 100%;
        border-radius: 12px;
        border: none;
        outline: none;
        color: var(--blue);
        text-decoration: none;
        font-size: 14px;
        transition: .2s;
    }


    .back-button svg{
        fill: var(--blue);
        margin-right: 10px;
        transition: margin .2s ease-in-out;
    }


    .back-button:hover svg{
        fill: white;
        margin-right: 20px;
    }

    .back-button:hover {
        background: rgb(67, 28, 225);;
        box-shadow: rgb(48, 63, 200) 0 0 120px 0;
        color: white;
    }

    .wrapper {
        box-sizing: border-box;
        background: linear-gradient(-45deg, #dad4fd, #a595ff, #de9c76, var(--blue), var(--dark));
        background-size: 400% 400%;
        animation: gradient 20s ease infinite;
        height: 100vh;
        padding-top: 120px !important;
        padding: 40px;
        display: grid;
        grid-template-columns: 1fr;
        align-items: flex-start;
        justify-items: center;
        min-height: 100vh;
    }

    .logo-wrapper {
        justify-self: flex-end;
    }

    .information {
        box-sizing: border-box;
        width: 100%;
        max-width: 650px;
        margin: 0;
        padding: 10px 20px;
        display: grid;
        grid-template-columns: 1fr;
        gap: 20px;
    }

    .information * {
        display: block;
        margin: 10px 0;
    }

    .information label {
        display: block;
        margin-top: 40px;
    }

    .creation-steps {
        position: fixed;
        inset: 40% auto auto 10px;
    }

    .creation-steps-circles {
        display: grid;
        grid-template-rows: 1fr 1fr;
        gap: 4px;
    }
    .creation-steps-circles .circle {
        width: 15px;
        height: 15px;
        background-color: var(--dark);
        border-radius: 50%;
    }
    .creation-steps-circles .circle.active {
        background-color: var(--blue);
    }

    input {
        box-sizing: border-box;
        padding: 10px 20px;
        margin-bottom: 20px;
        border-radius: 12px;
        border: 1px solid var(--blue);
        width: calc(80% - 36px);
        width: 100%;
        font-size: 18px;
    }

    textarea {
        box-sizing: border-box;
        padding: 10px 20px;
        border-radius: 12px;
        border: 1px solid var(--blue);
        width: 100%;
        font-size: 18px;
        resize: none;
    }

    .buttons-wrapper {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 20px;
        position: fixed;
        inset: auto 20px 10px auto;
        width: fit-content;
        height: fit-content;
    }

    .buttons-wrapper input {
        font-family: "Comfortaa";
        padding: 10px 20px;
        font-size: 22px;
        margin: 0;
    }

    .website-info {
        background-color: white;
        padding: 28px;
        border-radius: 12px;
    }

    button {
        border: 1px solid white;
    }


    @keyframes gradient {
        0% {
            background-position: 0% 50%;
        }
        50% {
            background-position: 100% 50%;
        }
        100% {
            background-position: 0% 50%;
        }
    }
</style>
