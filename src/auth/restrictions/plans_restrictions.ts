import { PLANS } from "$auth/subscriptions/plans";


export const plansRestrictions = {
    [PLANS.Starter]: {
        max_websites: 1,
        max_pages: 5,
        max_blog_posts: 5,
    },
    [PLANS.Professional]: {
        max_websites: 5,
        max_pages: 10,
        max_blog_posts: Number.MAX_SAFE_INTEGER,
    },
    [PLANS.Business]: {
        max_websites: Number.MAX_SAFE_INTEGER,
        max_pages: Number.MAX_SAFE_INTEGER,
        max_blog_posts: Number.MAX_SAFE_INTEGER,
    }
}

export function getPlanRestrictions(plan: PLANS) {
    return plansRestrictions[plan];
}