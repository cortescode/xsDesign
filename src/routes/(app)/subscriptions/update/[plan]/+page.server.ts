import { plansInfo } from '$auth/subscriptions/plans';
import { redirect } from '@sveltejs/kit';


export async function load ({ params, cookies }) {
    const { plan } = params;

    if(!(plan in plansInfo)) {
        redirect(301, '/pricing');
    }
    
    return {
        plan
    };
};