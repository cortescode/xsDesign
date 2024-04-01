// Execute just from client side


/* 
    @param daysToExpire: must be an integer, it is the days added to the current date
*/
export function setCookie(cookieName:string, cookieValue:string, daysToExpire:number) {
    var expirationDate = new Date();
    expirationDate.setDate(expirationDate.getDate() + daysToExpire);

    var cookieString = `${cookieName}=${encodeURIComponent(cookieValue)};expires=${expirationDate.toUTCString()};path=/`;

    document.cookie = cookieString;
}

export function getCookie(cookieName:string) {
    var cookies = document.cookie.split(';');
    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i].trim();
        if (cookie.startsWith(cookieName + '=')) {
            return decodeURIComponent(cookie.substring(cookieName.length + 1));
        }
    }
    return null;
}

/* 
    Set cookie expiration in the past
 */
export function deleteCookie(cookieName: string) {
    document.cookie = `${cookieName}=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/;`;
}