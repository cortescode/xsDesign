import Home from "./Home.svelte";
import Page404 from "./Page404.svelte"

// Agency
import Contact from "./Contact.svelte"

// App
import App from "./app/App.svelte"
import Pricing from "./Pricing.svelte";
import Auth from "./Auth.svelte";
import Dashboard from "./app/Dashboard.svelte"

// Website creation
import PageDesigner from './websiteEditor/PageDesigner.svelte'


// Routes mapping
export default {
    '/404': {
        title:"Página no encontrada | XS Design",
        body: Page404,
    },
    "/": {
        title:"Agencia de diseño y desarrollo web | XS Design",
        body: Home,
    },
    "/home": {
        title:"Agencia de diseño y desarrollo web | XS Design",
        body: Home,
    }, 
    "/app": {
        title:"Plataforma de creación de landing pages | XS Design",
        body: App,
    }, 
    "/websites/designer": {
        title:"Diseño de página web | XS Design",
        body: PageDesigner,
    }, 
    "/contact": {
        title:"Contacta con nuestro equipo | XS Design",
        body: Contact,
    }, 
    "/pricing": {
        title:"Descubre nuestros precios | XS Design",
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