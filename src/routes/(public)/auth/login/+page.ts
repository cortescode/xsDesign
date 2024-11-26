


export function load({params, url}) {

    let redirect_to;
    if(url.searchParams.has('redirect_to')) {
        redirect_to = url.searchParams.get('redirect_to');

        return {
            redirect_to: redirect_to
        }
    }
    return {}
}