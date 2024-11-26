import { error, json } from "@sveltejs/kit";
import Stripe from "stripe";
import { STRIPE_WEBHOOK_SECRET } from '$env/static/private';

import { stripe } from '$lib/server/stripe.js'
import { handlePaymentFailed, handlePaymentSucceeded, handleSubscriptionCreated, handleSubscriptionDeleted, handleSubscriptionUpdated } from "$auth/subscriptions/stripe/stripeHooks";



// Handle stripe webhook events
export async function POST({ request }) {

    // Get the signature and body from the request
    const signature = request.headers.get('stripe-signature');
    const body = await request.text();

    // Check if the signature is provided
    if (!signature) {
        error(400, "No signature provided")
    }


    try {

        // Construct the stripe event from the body and signature
        const event = stripe.webhooks.constructEvent(
            body,
            signature,
            STRIPE_WEBHOOK_SECRET
        );

        switch (event.type) {
            case 'customer.subscription.created':
                console.log("Subscription created")
                console.log("Object obtained: ", event.data.object)
                await handleSubscriptionCreated(event.data.object);
                break;
            case 'customer.subscription.updated':
                console.log("Subscription updated")
                console.log("Object obtained: ", event.data.object)
                await handleSubscriptionUpdated(event.data.object);
                break;
            case 'customer.subscription.deleted':
                console.log("Subscription deleted")
                console.log("Object obtained: ", event.data.object)
                await handleSubscriptionDeleted(event.data.object);
                break;
            case 'invoice.payment_succeeded':
                console.log("Invoice payment succeeded")
                console.log("Object obtained: ", event.data.object)
                await handlePaymentSucceeded(event.data.object);
                break;
            case 'invoice.payment_failed':
                console.log("Invoice payment failed")
                console.log("Object obtained: ", event.data.object)
                await handlePaymentFailed(event.data.object);
                break;
            default:
                console.log(`Unhandled event type ${event.type}`);
        }

        return json({ received: true }, { status: 200 })
    } catch (err) {
        console.error('Error processing webhook:', err);
        error(400, (err as Error).message)
    }
}