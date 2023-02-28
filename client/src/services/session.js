
import { writable } from 'svelte/store'

export async function getSessionUserData() {
    let user = {
        'username': '',
        'email': ''
    }

    user = await fetch('/auth/session', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
        })
        .then(response => response.json())
        .then(data => {
            console.log(data)
            if('username' in data && 'email' in data) {
                // access the user information returned by the server
                user['username'] = data['username'];
                user['email'] = data['email']

                return user
            } else
                console.log(error)
                return null
            
        }).catch(error => {
            console.log(error)
            return null
        });
    return user
}

user = writable({});

export let user