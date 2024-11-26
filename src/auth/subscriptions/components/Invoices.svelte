<script lang="ts">
    import { user } from "$auth/stores/session";
    import { onMount } from "svelte";


    let invoices: any[] | null = null;

    let loadingInvoices = false;

    $: { invoices, loadingInvoices }

    $: if ($user && !invoices) {
        console.log("Getting invoices");
        getInvoices();
    };

    

    async function getInvoices() {
        if (!$user) return;
        loadingInvoices = true;
        const idToken = await $user.getIdToken(true);
        const response = await fetch("/api/subscriptions/get-invoices", {
            method: "GET",
            headers: {
                'Authorization': `Bearer ${idToken}`
            }
        });
        const data = await response.json();
        invoices = data.invoices.data;
        loadingInvoices = false;
    }


</script>

<section>
    <h2>Invoices</h2>

    {#if invoices}
        <p>Total invoices: <b>{invoices?.length}</b></p>
        <div class="invoices">
            {#each invoices as invoice}
                <div class="invoice">
                    <div class="invoice-element">
                        <p>ID:</p>
                        <span>{invoice.id}</span>
                    </div>
                    <div class="invoice-element">
                        <p>Status:</p>
                        <span>{invoice.status}</span>
                    </div>
                    <div class="invoice-element">
                        <p>Amount:</p>
                        <span>{invoice.total/100} {invoice.currency}</span>
                    </div>
                    <div class="invoice-element">
                        <p>Date:</p>
                        <span>{new Date(invoice.created*1000).toLocaleDateString()}</span>
                    </div>
                </div>
            {/each}
        </div>
    {:else}
        <p>You don't have any invoices</p>
    {/if}

</section>


<style>

    section {
        margin: 20px auto;
    }

    section h2 {
        font-family: 'Comfortaa', 'Inter', sans-serif;
        margin-bottom: 20px;
        font-size: 24px;
        font-weight: 600;
    }

    .invoices {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(460px, 1fr));
        align-items: center;
        gap: 40px;
        margin-top: 60px;
    }

    .invoice {
        box-sizing: border-box;
        background-color: white;
        padding: 20px;
        border-radius: 10px;
        margin-bottom: 10px;
        width: 100%;
    }

    .invoice-element {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        gap: 10px;
        background-color: var(--light-blue);
        padding: 10px 20px;
        margin: 10px;
        border-radius: 0 12px;
    }

    .invoice-element * {
        margin: 0;
        padding: 0;
    }

    .invoice-element span {
        font-size: 18px;
        font-weight: bolder;
        color: var(--dark);
    }

</style>