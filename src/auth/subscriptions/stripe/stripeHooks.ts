import { stripe } from '$lib/server/stripe.js'
import { STRIPE_WEBHOOK_SECRET } from '$env/static/private'
import { updateCustomerPlan } from '../customers'
import { PLANS } from '../plans'
import { sendEmail } from '$email/sender'
import { payment_succeeded_template } from '$email/templates/payment_succeded'
import { payment_failed_template } from '$email/templates/payment_failed'

export async function handleSubscriptionCreated(subscription: any) {
	console.log("Stripe Hook Subscription Created")
	console.log("Subscription:", subscription)
}

export async function handleSubscriptionUpdated(subscription: any) {
	console.log("Stripe Hook Subscription Updated")
	console.log("Subscription:", subscription)
}

export async function handleSubscriptionDeleted(subscription: any) {
	console.log("Stripe Hook Subscription Deleted")
	console.log("Subscription deleted:", subscription)
}

export async function handlePaymentSucceeded(invoice: any) {
	console.log("Payment succeeded:", invoice)

	const costumer_id = invoice.customer

	const customer = await stripe.customers.retrieve(costumer_id)
	if(customer.deleted) return

	const email = customer.email
	if(!email) return

	const template = payment_succeeded_template()
	await sendEmail(email, "Payment successful", template)
}

export async function handlePaymentFailed(invoice: any) {
	// You might want to notify the customer or update their account status
	console.log(`Payment failed for invoice: ${invoice}`);

	const costumer_id = invoice.customer

	const customer = await stripe.customers.retrieve(costumer_id)
	if(customer.deleted) return

	const email = customer.email
	if(!email) return

	const template = payment_failed_template()
	await sendEmail(email, "Payment failed", template)
}
