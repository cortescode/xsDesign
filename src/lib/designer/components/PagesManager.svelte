<script lang="ts">
    import { onMount } from "svelte";


    export let editor;

    let pages: any = undefined;
    
    let openPanel: boolean = false;
    let creatingPage : boolean = false;

    let newPageCreationName: string = "";
    let pageCreationError: string = "";


    $: {
        pages, openPanel, creatingPage, newPageCreationName, pageCreationError
    }



    function openClosePageCreation() {
        creatingPage = !creatingPage;
    }

    function createPage() {
        if(!newPageCreationName)
            pageCreationError = "Please introduce a name for your page";

        const newPage = editor?.Pages?.add({
            id: newPageCreationName,
            styles: '.my-class { color: red }',
            component: '<div class="my-class">My element</div>',
        });
        selectPage(newPageCreationName)

        pages = editor?.Pages?.getAll()
        creatingPage = false;
        
    }

    function selectPage(page_id: string) {
        editor?.Pages?.select(page_id)

        openPanel=false
    }

    function openClose() {
        pages = editor?.Pages?.getAll()

        openPanel=!openPanel
    }
</script>

<!-- Toggle button to open the pages panel -->
<div class="toggle">
    <button on:click={openClose}>
        {#if !openPanel}
            Open Pages
        {:else}
            Close Pages
        {/if}
    </button>
</div>


<!-- Pages panel -->
{#if openPanel}
    <section class="panel">
        {#each pages as page}
            <div>
                <p>
                    {page.id}
                </p>
                <button on:click={() => selectPage(page.id)}>
                    Select page
                </button>
            </div>
        {/each} 
        <div>
            <button on:click={openClosePageCreation}>
                Create a new Page
            </button>
        </div>
    </section>
{/if}


{#if creatingPage}
    <section class="panel">
        <div>
            <input type="text" bind:value={newPageCreationName}>
            <button on:click={createPage}>
                Create a new Page
            </button>
            <button on:click={openClosePageCreation}>
                Cancel
            </button>
        </div>
        {#if pageCreationError }
            <span class="page-creation-error">{pageCreationError}</span>
        {/if}
    </section>
{/if}


<style>
    .toggle {
        position: absolute;
        inset: auto auto 0 0;
        color: black;
        z-index: 20;
    }

    .panel {
        position: absolute;
        inset: 0;
        z-index: 20;
        width: 400px;
        color: black;
        background-color: white;
        border: 1px solid black;
        border-radious: 12px;
        animation: panel ease-out .1s;
    }


    @keyframes panel{
        0% {
            transform: scale(0);
        }
        100% {
            transform: scale(1);
        }
    }
    
</style>