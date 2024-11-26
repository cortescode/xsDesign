import { writable } from 'svelte/store'
import type { Website, WebsiteConfig } from '../interfaces/Website'
import type { Route } from '../interfaces/Route'




export const website = writable<Website>()


