import { stripe } from "$lib/server/stripe";




// get cosumer invoices from stripe
export async function getConsumerInvoices(customerId: string) {
    const invoices = await stripe.invoices.list({
        customer: customerId
    });
    return invoices;
}