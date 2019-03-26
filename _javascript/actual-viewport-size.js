// This function will calculate the correct viewport width and height
function viewport() {
    var e = window, a = 'inner';
    if (!('innerWidth' in window )) {
        a = 'client';
        e = document.documentElement || document.body;
    }
    return { width : e[ a+'Width' ] , height : e[ a+'Height' ] };
}

// You can access the width like this
// This should match your media query
var vpWidth = viewport().width;


// You can access the width like this
// This should match your media query
var vpHeight = viewport().height;
