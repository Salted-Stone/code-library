//unminified
function getCookie( cookieName ) {
    return document.cookie.split(';').reduce( function(acc, cur) {
        let obj = cur.trim().split('=')
        if( obj[0] == cookieName ) {
            return obj[1]
        }

        return acc

    }, '')
}

// minified
function getCookie(t){return document.cookie.split(";").reduce(function(e,i){let n=i.trim().split("=");return n[0]==t?n[1]:e},"")}
