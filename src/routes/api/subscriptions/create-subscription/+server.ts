import { getAuthUser } from '$auth/firebaseAdmin';
import { cancelStripeSubscription, createStripeSubscription, updateStripeSubscription } from '$auth/subscriptions/stripe/stripeSubscriptions.js';
import { updateCustomerPlan } from '$auth/subscriptions/customers';
import { PLANS, plansInfo } from '$auth/subscriptions/plans';
import { sendEmail } from '$email/sender.js';
import { payment_succeeded_template } from '$email/templates/payment_succeded';
import { stripe } from '$lib/server/stripe';
import { error, redirect } from '@sveltejs/kit';
import { getStripeCustomer } from '$auth/subscriptions/stripe/stripeCustomers.js';

export async function GET({url}) {
    const session_id = url.searchParams.get('session_id') as string;
    const session = await stripe.checkout.sessions.retrieve(session_id);

    // If payment not successful, redirect to failed-attempt page
    if (!session || session.payment_status !== 'paid') {
        return redirect(301, '/subscriptions/failed-attempt')
    }

    //@ts-ignore
    const user_id = session.metadata.user_id
    //@ts-ignore
    let plan =  session.metadata.plan as PLANS

    const user = await getAuthUser(user_id);

    if (!user) {
        error(400, "User not found")
    }
    if(!plan)
        return error(400, "No plan provided")

    let customer_id = session.customer as string;
    if(!customer_id)
        error(400, "Customer not found")

    try {
        const subscription_id = session.subscription as string;
        await updateCustomerPlan (user.uid, customer_id, plan, subscription_id);

    } catch (err) {
        console.error('Error updating customer plan:', err);
        error(500, "Error updating customer plan")
    }

    // If payment successful, redirect to success page
    return redirect(301, '/subscriptions/payment/success')
}