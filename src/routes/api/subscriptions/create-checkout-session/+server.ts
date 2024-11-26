import { getAuthUser } from '$auth/firebaseAdmin';
import { createStripeCustomer } from '$auth/subscriptions/stripe/stripeCustomers';
import { storeCustomer } from '$auth/subscriptions/customers';
import { stripe } from '$lib/server/stripe';
import { error, json } from '@sveltejs/kit';

const domain_url = "http://localhost:5173"


export async function POST({ request }) {
    const request_json = await request.json();

    const price_id = request_json.price_id;
    const plan = request_json.plan;
    const user_id = request_json.user_id;
    const user = await getAuthUser(user_id);


    if (!price_id)
        error(422, "No price_id provided")
    if(!user)
        error(422, "No user provided")
    if(!plan)
        error(422, "No plan provided")


    const metadata = {
        user_id: user_id,
        plan: plan
    }

    let customer_id = user?.customClaims?.customer_id;

    // Obtain subscription_id from the session
    if(!customer_id) {
        let customer = await createStripeCustomer(user)
        customer_id = customer.id
        await storeCustomer(customer_id, user_id)
    }
    const session = await createSession(price_id, customer_id, metadata)

    return json({ 
        sessionId: session.id,
        clientSecret: session.client_secret  // Required to create a checkout session on the client
    }, { status: 200 });
}


async function createSession(price_id: string, customer_id: string, metadata: any) {
    const returl_url = `${domain_url}/api/subscriptions/create-subscription?session_id={CHECKOUT_SESSION_ID}`
   
    const checkoutData: any = {
        line_items: [
            {
                price: price_id,
                quantity: 1,
            },
        ],
        mode: 'subscription',
        ui_mode: 'embedded',
        customer: customer_id,
        metadata: metadata,
        return_url: returl_url,
    }

    const session = await stripe.checkout.sessions.create(checkoutData);


    return session
}

