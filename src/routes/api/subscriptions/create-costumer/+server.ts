import { getAuthUser } from "$auth/firebaseAdmin";
import { createStripeCustomer } from "$auth/subscriptions/stripe/stripeCustomers";
import { storeCustomer } from "$auth/subscriptions/customers.js";
import { error, json } from "@sveltejs/kit";



// Obtains firebase user and creates a stripe customer
export async function POST({request}) {

    const request_json = await request.json();
    
    const user = await getAuthUser(request_json.user_uid);

    if (!user) {
        return new Response(JSON.stringify({ error: 'User not found' }), { status: 404 });
    }

    try {
        const stripeCustomer = await createStripeCustomer(user);
        const cosumer = await storeCustomer(stripeCustomer.id, user.uid)
        if(!cosumer) {
            throw error(500, "Error creating customer")
        }
        return json({ message: 'Customer created' }, { status: 200 });
    } catch (err) {
        throw error(500, "Error creating customer")
    }
}