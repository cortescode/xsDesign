
import { writable } from 'svelte/store'
import { auth } from '../firebaseConn';
import type { IdTokenResult, User } from "firebase/auth";
import { PLANS } from '$auth/subscriptions/plans';



export const user = writable<User | null>();
export const isLoggedIn = writable<Boolean>(false);
export const userPlan = writable<PLANS>(PLANS.Starter);



user.subscribe(async (user) => {
    if(user) {
        isLoggedIn.set(true);
        
        const plan_response = await fetch('/api/auth/get-plan', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ user_uid: user.uid })
        })

        const plan_data = await plan_response.json();
        if(plan_data.plan) {
            userPlan.set(plan_data.plan);
        } else {
            userPlan.set(PLANS.Starter);
        }

    } else {
        isLoggedIn.set(false);
    }
});