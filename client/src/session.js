
import { writable } from 'svelte/store'

export async function getSessionUserData() {
    let user = {
        'user_id': '',
        'username': ''
    }

    return fetch('auth/session', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
        })
        .then(response => response.json())
        .then(data => {
            if('user_id' in data && 'username' in data) {
                // access the user information returned by the server
                user['user_id'] = data['user_id'];
                user['username'] = data['username']

                return user
            } else
                return null
            
        }).catch(error => {
            return null
        });
}

user = writable({});

export let user