// import { stripe } from "$lib/server/stripe";
import type { UserRecord } from "firebase-admin/auth";
import { getClient } from "$lib/server/db/postgresql/postgresql";
import { setCustomUserClaims } from "$auth/firebaseAdmin";
import { PLANS, plansInfo } from "./plans";
import type { Customer } from "$auth/interfaces/customer";




// Store the relationship with firebase auth user and stripe customer in the database
export async function storeCustomer(
    stripeCustomerId: string,
    userUid: string,
    plan: PLANS = PLANS.Starter,
    subscription_id?: string
) {

    const client = await getClient();
    const result = await client.sql`
        INSERT INTO customers (user_uid, customer_id, plan, subscription_id) 
        VALUES (${userUid}, ${stripeCustomerId}, ${plan}, ${subscription_id})
    `;

    const customClaims =  { plan: plan, customer_id: stripeCustomerId }

    
    // return whether any row was affected
    if (result.rowCount <= 0) return false;

    setCustomUserClaims(userUid, customClaims)

    return true
}



export async function removeCustomer(costumerId: string) {

    const client = await getClient();
    const result = await client.sql`
        DELETE FROM customers
        WHERE customer_id = ${costumerId}
    `;


    // return whether any row was affected
    return result.rowCount > 0;
}




// Retrieve the customer from the database
export async function getDataBaseCustomer(customerId: string) {

    const client = await getClient();

    const result = await client.sql`
            SELECT * FROM customers
            WHERE customer_id = ${customerId}
        `;

    if (result.rows.length === 0) {
        return null;
    }

    const customerData = result.rows[0];
    const customer: Customer = {
        user_uid: customerData.user_uid,
        customer_id: customerData.customer_id,
        subscription_id: customerData.subscription_id || '',
        plan: customerData.plan as PLANS || PLANS.Starter
    };

    return customer;
}


// Retrieve the customer from the database
export async function getDataBaseCustomerFromUserUid(user_uid: string) {

    const client = await getClient();

    const result = await client.sql`
            SELECT * FROM customers
            WHERE user_uid = ${user_uid}
        `;

    if (result.rows.length === 0) {
        return null;
    }

    const customerData = result.rows[0];
    const customer: Customer = {
        user_uid: customerData.user_uid,
        customer_id: customerData.customer_id,
        subscription_id: customerData.subscription_id || '',
        plan: customerData.plan as PLANS || PLANS.Starter
    };

    return customer;
}

export async function updateCustomerPlan(userUid: string, customerId: string, newPlan: PLANS = PLANS.Starter, newSubscriptionId?: string) {

    // const price_id = plansInfo[newPlan]["price_id"]

    const client = await getClient();
    /* 
    //  Cancel the current subscription if it exists
    const current_subscription = await client.sql`
        SELECT subscription_id FROM customers
        WHERE customer_id = ${customerId}
    `;

    if (current_subscription.rows.length > 0) {
        const subscriptionId = current_subscription.rows[0].subscription_id;
        if (subscriptionId) {   
            await stripe.subscriptions.cancel(subscriptionId);
        }
    }
    */
    console.log("Updating customer plan and subscription id in the database")

    // Update the customer plan and subscription id in the database
    await client.sql`
        UPDATE customers 
        SET plan = ${newPlan || null}, subscription_id = ${newSubscriptionId || null}
        WHERE customer_id = ${customerId}
    `;

    setCustomUserClaims(userUid, { plan: newPlan, customer_id: customerId })
}


