import { getAuthUser } from "$auth/firebaseAdmin";
import { cancelStripeSubscription } from "$auth/subscriptions/stripe/stripeSubscriptions.js";
import { getDataBaseCustomer, updateCustomerPlan } from "$auth/subscriptions/customers";
import { PLANS } from "$auth/subscriptions/plans";
import { error, json } from "@sveltejs/kit";
import {stripe} from "$lib/server/stripe.js"
import type { Customer } from "$auth/interfaces/customer.js";




export async function POST({ request }) {

    const request_json = await request.json();

    const user_id = request_json.user_id;
    const user = await getAuthUser(user_id);

    const customer_id = user?.customClaims?.customer_id;

    if(!user)
        error(422, "User not found")

    if(!customer_id)
        error(422, "Customer not found")

    // Fetch subscriptions associated with the customer
    const db_customer = await getDataBaseCustomer(customer_id)

    if(!db_customer)
        error(422, "Customer not found")

    const subscription_id = db_customer?.subscription_id
    if(!subscription_id)
        error(422, "Customer not found")
    
    await cancelStripeSubscription(subscription_id)
    await updateCustomerPlan(user.uid, customer_id, PLANS.Starter)
    
    return json({
        message: "Plan set to starter"
    })

}