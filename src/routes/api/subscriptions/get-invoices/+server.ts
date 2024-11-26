import { error, json } from "@sveltejs/kit";
import { getConsumerInvoices } from "$auth/subscriptions/billing";
import { getAuthUser, verifyToken } from "$auth/firebaseAdmin";



// Get userIdToken from request header
export async function GET({request}) {

    
    const userIdToken = request.headers.get('Authorization')?.split('Bearer ')[1];
    if (!userIdToken) {
        error(401, 'No authorization token provided');
    }

    const verifiedUserUid = await verifyToken(userIdToken);

    if (!verifiedUserUid) {
        error(401, 'Invalid authorization token');
    }

    const user = await getAuthUser(verifiedUserUid);
    const customerId = await user?.customClaims?.customer_id;

    if (!customerId) {
        error(401, 'No customer id found');
    }

    const invoices = await getConsumerInvoices(customerId);

    if (!invoices) {
        error(401, 'No invoices found');
    }

    return json({ invoices });
}