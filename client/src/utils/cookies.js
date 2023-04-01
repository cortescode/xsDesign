

export default function getCookie(name) {
    if(name == null || name == "" || name == undefined)
        return null
        

    cookies = document.cookie.split(';')
    if(cookies.length == 0) {
        return null
    }

    cookies.array.forEach(key_value => {
        if(name == key_value.split('=')[0])
            return key_value.split('=')[1]
        else 
            return null
    });
}




