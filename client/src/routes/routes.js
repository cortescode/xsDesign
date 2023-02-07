import Home from "./Home.svelte";
import Pricing from "./Pricing.svelte";
import Auth from "./Auth.svelte";


export default {
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
    }
}