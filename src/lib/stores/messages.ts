import { writable } from 'svelte/store'
import type { Message } from '$lib/interfaces/Message'



export const messages = writable<Message[]>([])


const delay: number = 8000

// Add a message and autodestroy it after a certain delay (defined above)
export function addMessage(message: Message) {
    
    let index = -1;
    messages.update(list => {
        // Add the new value to the list
        list.push(message);
        index = list.length-1;

        // Use setTimeout to remove the value after the specified time
        

        return list;
    });

    setTimeout(() => {
        messages.update(list => {
            // Find the index of the value in the list
            // If the value exists in the list, remove it
            if (index !== -1) {
                list.splice(index, 1);
            }
            return list
        })
        
    }, delay);
}
