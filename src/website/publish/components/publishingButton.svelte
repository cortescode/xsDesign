<script lang="ts">
    import { onMount } from "svelte";
    import { publishWebsite } from "../publish";
    import type { Editor } from "grapesjs";
    import { website } from "$website/stores/website";

    export let editor: Editor

    let showPanel = false;
    let website_published = false;

    let opacityLayer: HTMLElement;


    $: editor, website_published;



    $: {
        if(opacityLayer)
            if(showPanel == false) {
                opacityLayer.style.display = "none";
            } else opacityLayer.style.display = "block";
    }


    onMount(() => {
        opacityLayer?.addEventListener("click", () => {
            showPanel = false;
        });
    })

    async function managePublishing() {
        let site_published: boolean = await publishWebsite(editor)

        if(site_published){
            website_published = true;
            $website.published = true;

            const projectEndpoint = `/designer/${$website?.id}/data/`;
            fetch(projectEndpoint, {
                "method": "POST",
                "headers": {
                    "Content-Type": "application/json",
                },
                "body": JSON.stringify($website),
            })
        }
        else 
            website_published = false;
        
        showPanel = true;
    }

</script>



<button class="publish-button" on:click={managePublishing}>
    Publish
</button>


{#if showPanel}
    <div class="modal">
        <button class="close-button" on:click={() => showPanel = false}>
            <div class="gjs-mdl-btn-close" data-close-modal="">⨯</div>
        </button>
        {#if website_published }
            <h3 class="gradient-text">Congratulations!</h3>
            <p>Your website was successfully published. You can visit it now at <br/> <a href="https://{ $website.id }.xsdesign.co" target="_blank">{ $website.id }.xsdesign.co</a></p>
            <div class="image-wrapper">
                <img alt="congratulations" src="/media/assets/congratulations.webp" />
            </div>
        {:else}
            <h3 class="gradient-text">There was an error uploading your website. Try it again and contact support if persists. Sorry, we appreciate your understunding.</h3>
        {/if}
    </div>
{/if}

<div class="opacity-layer" bind:this={opacityLayer}></div>

<style>

    .image-wrapper {
        width: 100%;
        height: 300px;
        overflow: hidden;
        border-radius: 0 0 12px 12px;
    }

    .image-wrapper img{
        margin-top: -40px;
        position: relative;
        width: 100%;
    }

    .close-button {
        position: absolute;
        inset: 4px 4px auto auto;
        padding: 0;
        margin: 0;
        border: none;
        background: none;
    }

    .modal {
        box-sizing: border-box;
        position: fixed;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        top: calc(50% - 220px);
        left: calc(50% - 220px);
        right: calc(50% - 220px);
        bottom: auto;
        width: 440px;
        height: 440px;
        z-index: 20;
        padding: 0;
        border-radius: 12px;
        background: white;
        text-align: center;
    }

    .modal h3 {
        margin: 60px 20px 20px 20px;
    }

    .modal p {
        margin: 0 30px 20px 60px;
    }

    .modal a {
        text-decoration: underline;
        font-weight: bold;
    }

    .modal a:hover {
        background: radial-gradient(100% 100% at 100% 0, #5adaff 0, #5468ff 100%);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        text-decoration: underline;
        font-weight: bold;
    }

    .opacity-layer {
        display: none;
        position: fixed;
        width: 100%;
        height: 100%;
        background-color: rgb(1, 0, 40, 0.4);
        z-index: 19;
    }

    .publish-button {
        border-radius: 12px;
        border: none;
        background-color: var(--dark);
        color: white;
        padding: 0 20px;
        font-size: 12px;
        position: fixed;
        right: 4px;
        top: 4px;
        height: 30px;
        z-index: 2;
    }
    .publish-button:hover {
        background-color: var(--blue);
    }
</style>