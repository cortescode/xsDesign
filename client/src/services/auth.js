import { user } from './session'

// ------------- GENERAL FORM ----------------
// This
export async function handleAuthForm(type, form) {
    return fetch(`/auth/${ type }`, {
        method: 'POST',
        body: form
    })
    .then(response => response.json())
    .then((data) => {
        if(data['status'] == 'OK'){
            window.location = "/home";
            return "";
        }
        if(data['status'] == 'ERROR')
            return data['message'];
        
    }).catch((error) => {
        console.log(error)
    })

}