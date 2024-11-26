import { stripe } from "$lib/server/stripe";
import type { UserRecord } from "firebase-admin/auth";



export async function createStripeCustomer(user: UserRecord) {
    if (!user || !user.email) {
        throw new Error("User doesn't have required params");
    }

    const customer = await stripe.customers.create({
        name: user.displayName || "Anonymous",
        email: user.email,
        metadata: {
            user_uid: user.uid
        }
    });


    if (!customer.id) {
        throw new Error("Failed to create Stripe customer");
    }

    let customClaims: Record<string, any>;
    customClaims = user.customClaims ? user.customClaims : {};
    customClaims['customer_id'] = customer.id

    return customer;
}
// Retrieve the stripe customer from stripe
export async function getStripeCustomer(customerId: string) {
    const customer = await stripe.customers.retrieve(customerId);
    return customer;
}

export async function deleteStripeCustomer(customerId: string) {
    await stripe.customers.del(customerId);

}
