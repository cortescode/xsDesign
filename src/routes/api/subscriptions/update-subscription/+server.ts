import { getAuthUser } from '$auth/firebaseAdmin';
import { cancelStripeSubscription, createStripeSubscription, updateStripeSubscription } from '$auth/subscriptions/stripe/stripeSubscriptions.js';
import { getDataBaseCustomer, updateCustomerPlan } from '$auth/subscriptions/customers';
import { PLANS, plansInfo } from '$auth/subscriptions/plans';
import { sendEmail } from '$email/sender.js';
import { payment_succeeded_template } from '$email/templates/payment_succeded';
import { stripe } from '$lib/server/stripe';
import { error, json, redirect } from '@sveltejs/kit';
import { getStripeCustomer } from '$auth/subscriptions/stripe/stripeCustomers.js';

export async function POST({request, url, cookies}) {
    
    const request_json = await request.json();
    
    const plan = request_json.plan as PLANS;
    if(!plan)
        return error(400, "No plan provided")

    //@ts-ignore
    const user_uid = cookies.get("user_uid")

    if (!user_uid) {
        error(400, "User not found")
    }

    console.log("User uid: ", user_uid)
    console.log("Cookies: ", cookies)
    const user = await getAuthUser(user_uid);
    if (!user) {
        error(400, "User not found")
    }

    let customer_id = user?.customClaims?.customer_id;
    if(!customer_id)
        error(400, "Customer not found")

    const db_costumer = await getDataBaseCustomer(customer_id);
    let subscription_id = db_costumer?.subscription_id

    console.log("Starting...: ")
    try {
        const price_id = plansInfo[plan]["price_id"]
        
        if(!price_id || !subscription_id) 
            throw new Error("No plan or subscripion found")

        const subscription = await updateStripeSubscription(subscription_id, price_id)
        console.log("Subscription updated: ", subscription)
        await updateCustomerPlan (user.uid, customer_id, plan, subscription_id);

    } catch (err) {
        console.error('Error updating customer plan:', err);
        error(500, "Error updating customer plan")
    }

    // If payment successful, redirect to success page
    return json({
        success: true
    })
}