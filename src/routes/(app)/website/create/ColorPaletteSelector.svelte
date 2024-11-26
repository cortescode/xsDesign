<script lang="ts">
    import { getCookie, setCookie } from "$lib/cookies";
    import { onMount } from "svelte";
    import { writable } from "svelte/store";

    export let setPalette: any;

    const paletteCookieKey = "colorPalette"


    const active = writable(true);
    
    let colorPalette = {
        mainColor: "#FF204E",
        secondaryColor: "#A0153E",
        titleColor: "#5D0E41",
        textColor: "#00224D",
    }

    onMount(() => {
        let palette = getCookie(paletteCookieKey)
        if(palette)
            colorPalette = JSON.parse(palette)

        setPalette(colorPalette)

    })

    function updatePaletteCookie() {
        setCookie(paletteCookieKey, JSON.stringify(colorPalette), 1)
        setPalette(colorPalette)
    }

    $: colorPalette


</script>

<div class="color-palette-wrapper">
    <h2>Describe your Styles:</h2>
    <div class="switch-wrapper">
        <p>Do you have a color palette?</p>
        <button
            class="switch"
            on:click={(event) => {
                event.preventDefault();
                $active = !$active;
            }}
        >
            {#if $active}
                <span class="text active">Yes</span>
                <span class="text">No</span>
            {:else}
                <span class="text">Yes</span>
                <span class="text active">No</span>
            {/if}
        </button>
    </div>

    {#if $active}
        <div class="color-selector">
            <p>
                We recommend have high contrast between main color and secondary
                color
            </p>
            <div class="inputs-wrapper animate">
                <div style="outline: 2px solid {colorPalette["mainColor"] || "white"};">
                    <label for="main-color">
                        Main color: 
                        <br>
                        <p>{ colorPalette["mainColor"] }</p>
                        
                    </label>
                    <input 
                        type="color" 
                        id="main-color" 
                        name="main-color" 
                        value={ colorPalette["mainColor"] }
                        on:change={ (event) => {
                            /* @ts-ignore */
                            colorPalette["mainColor"] = event.target?.value
                            updatePaletteCookie()
                        }}
                    />
                </div>
                <div style="outline: 2px solid {colorPalette["secondaryColor"] || "white"};">
                    <label for="secondary-color">
                        Secondary color: 
                        <br>
                        <p>{ colorPalette["secondaryColor"] }</p>
                        
                    </label>
                    <input 
                        type="color" 
                        id="secondary-color" 
                        name="secondary-color" 
                        value={ colorPalette["secondaryColor"] }
                        on:change={ (event) => {
                            /* @ts-ignore */
                            colorPalette["secondaryColor"] = event.target?.value
                            updatePaletteCookie()
                        }}
                    />
                </div>
                <div style="outline: 2px solid {colorPalette["titleColor"] || "white"};">
                    <label for="main-color">
                        Title color: 
                        <br>
                        <p>{ colorPalette["titleColor"] }</p>
                        
                    </label>
                    <input 
                        type="color" 
                        id="title-color" 
                        name="title-color" 
                        value={ colorPalette["titleColor"] }
                        on:change={ (event) => {
                            /* @ts-ignore */
                            colorPalette["titleColor"] = event.target?.value
                            updatePaletteCookie()
                        }}
                    />
                </div>
                <div style="outline: 2px solid {colorPalette["textColor"] || "white"};">
                    <label for="main-color">
                        Text color: 
                        <br>
                        <p>{ colorPalette["textColor"] }</p>
                        
                    </label>
                    <input 
                        type="color" 
                        id="text-color" 
                        name="text-color" 
                        value={ colorPalette["textColor"] }
                        on:change={ (event) => {
                            /* @ts-ignore */
                            colorPalette["textColor"] = event.target?.value
                            updatePaletteCookie()
                        }}
                    />
                </div>
                
            </div>
        </div>
    {/if}
</div>

<style>

    .color-palette-wrapper {
        box-sizing: border-box;
    }
    
    .switch {
        display: grid;
        grid-template-columns: auto auto;
        gap: 0;
        padding: 4px;
        border: 0;
        font-size: 16px;
        transition: all 150ms ease-in-out;

        border-radius: 14px;
        font-weight: 600;

        color: #fff;
        background-color: var(--dark);
        background-image: radial-gradient(
            50% 115% at 50% -5%,
            rgba(255, 255, 255, 0.11) 0%,
            transparent 100%
        );
        box-shadow:
            inset 0 0px 10px 0px rgba(255, 255, 255, 0.14),
            inset 0px 5px 10px 0px rgba(255, 255, 255, 0.11),
            inset 0px 2px 5px 0px rgba(255, 255, 255, 0.4),
            inset 0px 3px 20px 0px rgba(0, 0, 0, 0.25);
    }

    .switch .text {
        font-size: 14px;
        padding: 8px 16px;
        border-radius: 10px;
    }

    .switch .text.active {
        border: 2px solid var(--dark);
        background-color: var(--blue);
        background-image: radial-gradient(
            50% 115% at 50% -5%,
            rgba(255, 255, 255, 0.11) 0%,
            transparent 100%
        );
        box-shadow:
            inset 0 0px 10px 0px rgba(0, 0, 0, 0.14),
            inset 0px 5px 10px 0px rgba(0, 0, 0, 0.11),
            inset 0px 2px 5px 0px rgba(0, 0, 0, 0.4),
            inset 0px 3px 20px 0px rgba(255, 255, 255, 0.25);
    }

    .switch:hover {
        transform: scale(1.05);
    }

    .switch:active {
        transform: scale(0.95);
    }

    .color-selector {
        margin-top: 40px;
    }

    .color-selector > p {
        font-size: 12px;
    }

    .inputs-wrapper {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 20px;
        width: fit-content;
    }

    .inputs-wrapper > div {
        display: grid;
        grid-template-columns: 1fr 40px;
        gap: 20px;
        padding: 20px;
        background-color: white;
        margin: 10px 0;
        border-radius: 12px;
    }

    .inputs-wrapper > div > input {
        width: 48px;
        height: 48px;
        border-radius: 50%;
        overflow: hidden;
        cursor: pointer !important;
    }

    .inputs-wrapper > div > label > p {
        margin: 10px 0 0 0;
        color: var(--dark);
        font-size: 14px;
        font-style: italic;
    }
</style>
