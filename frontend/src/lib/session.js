
import { writable } from 'svelte/store'


export function getSessionUserData() {
    return new Promise((resolve, reject) => {
        let user_structure = {
            'username': '',
            'email': ''
        }

        fetch('/api/auth/session', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => response.json())
        .then(data => {
            console.log("Data", data)

            if('username' in data && 'email' in data) {
                
                // access the user information returned by the server
                user_structure['username'] = data['username'];
                user_structure['email'] = data['email']
                
                // user.set(user_structure);
                resolve(user_structure);
            } else {
                resolve(null);
            }
            
        }).catch(error => {
            console.log("Fetch Error getting user session", error);
            reject(error);
        });
    });
}


export const user = writable({});