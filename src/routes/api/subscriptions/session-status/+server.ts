import { stripe } from '$lib/server/stripe';
import { error, fail, json } from '@sveltejs/kit';




export async function GET({ request }) {

    const request_json = await request.json();
    const session_id = request_json.session_id;
    const session = await stripe.checkout.sessions.retrieve(session_id);

    if (!session.customer_details || !session.customer_details.email) {
        error(400, { message: 'No customer details found' });
    }
    return json({
        status: session.status,
        customer_email: session.customer_details.email
      }, { status: 200 });
}