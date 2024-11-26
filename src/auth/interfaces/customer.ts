import type { PLANS } from "$auth/subscriptions/plans";



export interface Customer {
    user_uid: string;
    customer_id: string;
    subscription_id: string;
    plan: PLANS;
}