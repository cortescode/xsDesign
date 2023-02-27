import Home from "./Home.svelte";
import Page404 from "./Page404.svelte"

// Agency
import Contact from "./Contact.svelte"


// App
import App from "./app/App.svelte"
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
    "/app": {
        title:"App | XS Design",
        body: App,
    }, 
    "/contact": {
        title:"Contact | XS Design",
        body: Contact,
    }, 
    "/pricing": {
        title:"Pricing | XS Design",
        body: Pricing,
    },
    "/auth/login": {
        title:"Login| XS Design",
        body: Auth,
    },
    "/auth/signup": {
        title:"Signup | XS Design",
        body: Auth,
    },
    "/dashboard": {
        title:"Dashboard | XS Design",
        body: Dashboard,
    }
}