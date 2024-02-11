import { writable } from 'svelte/store'
import type { Website } from '../interfaces/Website'
import type { Route } from '../interfaces/Route'


let site: Website = {
    id: "",
    name: "",
    user_uid: "",
    data: {},
    routes: []
}

export const website = writable(site)


