import { getAuthUser } from '$auth/firebaseAdmin.js';
import { getDataBaseCustomer } from '$auth/subscriptions/customers';
import { PLANS } from '$auth/subscriptions/plans';
import { error, json } from '@sveltejs/kit';
import type { UserRecord } from 'firebase-admin/auth';



export async function POST({ request }) {

    const request_json = await request.json();

    const user_uid = request_json.user_uid;

    const user: UserRecord | null = await getAuthUser(user_uid);

    if(!user) {
        error(404, 'User not found')
    }

    console.log("user custom claims: ", user?.customClaims)

    let plan: PLANS = user?.customClaims?.plan as PLANS;

    if(!plan) {
        plan = PLANS.Starter
    }

    return json({ plan: plan }, { status: 200 });
}