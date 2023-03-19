import Header from './Header.svelte';
import Hero from './Hero.svelte';
import Columns from './Columns.svelte';


export default templates = {
    "header": {
        "component": Header,
        "props": {
            logo_name: "Name",
            button_text: "text",
            button_url: "/",
            links: [
                { text: 'home', link: '/' },
                { text: 'about us', link: '/about-us' },
                { text: 'contact', link: '/contact' }
            ]
        }
    },
    "hero": {
        "component": Hero,
        "props": {
            title: "title",
            description: "description",
            button_text: "text",
            button_url: "/"
        }
    }
}