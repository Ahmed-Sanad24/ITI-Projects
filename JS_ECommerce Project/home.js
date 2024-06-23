let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
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
function getAllCookies() {
  return document.cookie;
}

function deleteCookie(cookieName) {
  var expiry = new Date();
  expiry.setDate(expiry.getDate()-1);
  document.cookie = cookieName+"=abc; expires ="+expiry;
}

function hasCookie(cookieName) {
  if(getCookie(cookieName))
      return true;
  else
      return false;
  
}
function getCookieValue(cookieName) {
  var splitted = document.cookie.split("; ");
  for (const iterator of splitted) {
      if(iterator.split("=")[0] == cookieName){
          return iterator.split("=")[1];
      }
      
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

if (!hasCookie('cart')) {
  setCookie('cart',0,'session');
} 
var cartNo = document.getElementById("cartNum");
cartNo.innerHTML = getCookieValue('cart');

var loggedUser = document.getElementById('loggedUser');
loggedUser.innerHTML = getCookieValue('loggedUser');


