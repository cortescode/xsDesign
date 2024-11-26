import { plansInfo } from '$auth/subscriptions/plans';
import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { getDataBaseCustomer, getDataBaseCustomerFromUserUid } from '$auth/subscriptions/customers';

export const load: PageServerLoad = async ({ params, cookies }) => {
    const { plan } = params;

    const user_uid = cookies.get('user_uid');
    if (!user_uid) {
        throw new Error('User not found');
    }

    const db_costumer = await getDataBaseCustomerFromUserUid(user_uid);
    if(db_costumer) {
        const current_subscription_id = db_costumer.subscription_id;

        if(current_subscription_id) {
            redirect(301, `/subscriptions/update/${plan}`);
        }
    }

    if(!(plan in plansInfo)) {
        redirect(301, '/pricing');
    }
    
    return {
        plan
    };
};