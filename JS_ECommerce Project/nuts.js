var previewPart = document.getElementById("preview");
var detailsPart = document.getElementById("details");


function preview(e) {
    var btn = e.target;
    console.log(btn);
    var parentDiv = document.getElementsByClassName(btn.id)[0];
    imagePath=document.querySelector('.'+btn.id+' img');
    pricePath=document.querySelectorAll('.'+btn.id+' div p')[1];

    console.log(pricePath);

    console.log(parentDiv);
    console.log(previewPart);
    var photo = document.getElementsByClassName("previewImg")[0];
    photo.setAttribute('src',imagePath.src);
    var name = document.getElementsByClassName("previewName")[0];
    var price = document.getElementsByClassName("previewPrice")[0];
    name.innerHTML = btn.id;
    price.innerHTML = pricePath.innerHTML
    previewPart.style.display = 'block' ;
    detailsPart.style.display = 'none' ;


    
}

function back() {
    previewPart.style.display = 'none' ;
    detailsPart.style.display = 'block' ;
}

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

function add(e) {
    var btn = e.target
    if (hasCookie(btn.name)) {
        setCookie(btn.name,(Number(getCookieValue(btn.name))+1),'session');
        setCookie('cart',(Number(getCookieValue('cart'))+1),'session');
        cartNo.innerHTML = getCookieValue('cart');
    } else {
        setCookie(btn.name,1,'session');
        setCookie('cart',(Number(getCookieValue('cart'))+1),'session');
        cartNo.innerHTML = getCookieValue('cart');
    }   
}

var myButton = document.getElementById("topBtn");

window.onscroll = function() {
    if (document.documentElement.scrollTop > 20) {
      myButton.style.display = "block";
    } else {
      myButton.style.display = "none";
    }
  }

function topFunction() {
  document.documentElement.scrollTop = 0; 
}


var cartNo = document.getElementById("cartNum");
cartNo.innerHTML = getCookieValue('cart');

var loggedUser = document.getElementById('loggedUser');
loggedUser.innerHTML = getCookieValue('loggedUser');




