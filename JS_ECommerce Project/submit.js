function setCookie(cookieName , cookieValue, expiryDate) {
    document.cookie = cookieName+"="+cookieValue+";expires="+expiryDate;
}
function getCookie(cookieName) {
    var splitted = document.cookie.split("; ");
    var i =0;
    for (const iterator of splitted) {
        if(iterator.split("=")[0] == cookieName){
            return iterator;
        }
        
    }
    
  }
function hasCookie(cookieName) {
    if(getCookie(cookieName))
        return true;
    else
        return false;
    
}
function getCookieValue(cookieName) {
    var splitted = document.cookie.split("; ");
    var i =0;
    for (const iterator of splitted) {
        if(iterator.split("=")[0] == cookieName){
            return iterator.split("=")[1];
        }
        
    }
}
function deleteCookie(cookieName) {
    var expiry = new Date();
    expiry.setDate(expiry.getDate()-1);
    document.cookie = cookieName+"=abc; expires ="+expiry;
}

setCookie('cart',0,'session');
var allCookies = document.cookie.split("; ");
for (const iterator of allCookies) {
    var cookieName = iterator.split("=")[0];
    if (cookieName != 'cart' && cookieName != 'loggedUser') {
        deleteCookie(cookieName);
    }
    
}
var cartNo = document.getElementById("cartNum");
cartNo.innerHTML = getCookieValue('cart');