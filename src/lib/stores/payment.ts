import { writable } from "svelte/store";


export const paymentState = writable<{
    status: 'idle' | 'loading' | 'success' | 'error';
    error: string | null;
}>({
    status: 'idle',
    error: null,
});