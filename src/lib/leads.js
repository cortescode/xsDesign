

// ------------- GENERAL FORM ----------------
// This function is used to handle the auth form, such as login and signup
export async function storeLead(name, email) {
    return fetch(`/api/marketing/leads/create`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name,
            email
        })
    })
}