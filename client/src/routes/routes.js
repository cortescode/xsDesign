import Home from "./Home.svelte";
import Page404 from "./Page404.svelte"
import Pricing from "./Pricing.svelte";
import Auth from "./Auth.svelte";
import Dashboard from "./app/Dashboard.svelte"

export default {
    '/404': {
        title:"Home | XS Design",
        body: Page404,
    },
    "/": {
        title:"Home | XS Design",
        body: Home,
    },
    "/home": {
        title:"Home | XS Design",
        body: Home,
    }, 
    "/pricing": {
        title:"Pricing | XS Design",
        body: Pricing,
    },
    "/auth/": {
        title:"Login/Signin | XS Design",
        body: Auth,
    },
    "/dashboard": {
        title:"Login/Signin | XS Design",
        body: Dashboard,
    }
}