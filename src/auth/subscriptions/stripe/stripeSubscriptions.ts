import { stripe } from '$lib/server/stripe';
import { STRIPE_SECRET_KEY, STRIPE_WEBHOOK_SECRET } from '$env/static/private';



export async function createStripeSubscription(customerId: string, priceId: string) {
    const subscription = await stripe.subscriptions.create({
        customer: customerId,
        items: [{ price: priceId }],
        payment_behavior: 'default_incomplete',
        expand: ['latest_invoice.payment_intent'],
    });
    return subscription;
}




export async function updateStripeSubscription(subscriptionId: string, newPriceId: string) {
    const subscription = await stripe.subscriptions.retrieve(subscriptionId);
    
    // Check if there are any items in the subscription
    const subscriptionItems = subscription.items.data;
    const price_id = subscriptionItems[0].id
    
    if (subscriptionItems.length === 0) {
        throw new Error('No items found in the subscription.');
    }

    // Update the first (and only) subscription item with the new price
    const newSubscription = await stripe.subscriptions.update(
        subscriptionId,
        {
            items: [
                {
                    id: price_id,  // Use the existing item's ID to update it
                    price: newPriceId
                }
            ],
            proration_behavior: 'always_invoice',
        }
    );
    return newSubscription;
}


export async function cancelStripeSubscription(subscriptionId: string) {

    const canceledSubscription = await stripe.subscriptions.cancel(subscriptionId, 
        {
            invoice_now: true,
            prorate: true,
        }
    )
    return canceledSubscription;
}

