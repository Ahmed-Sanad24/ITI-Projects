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

function minusF(e) {
    var btn =e.target;
    if (getCookieValue(btn.name) > 1) {
        var temp = Number( getCookieValue(btn.name) );
        setCookie(btn.name,temp-1,'session');
        var no = document.getElementsByClassName('no '+btn.name)[0];
        no.innerHTML = temp-1;
        setCookie('cart',(Number(getCookieValue('cart'))-1),'session');
        var cartNo = document.getElementById("cartNum");
        cartNo.innerHTML = getCookieValue('cart');

        var total = document.getElementsByClassName('total '+btn.name)[0];
        total.innerHTML =parseInt(total.innerHTML)- parseInt(prices[btn.name]) ;

        sum -= parseInt(prices[btn.name]);
        var totalPrice = document.getElementById('totalPrice');
        totalPrice.innerHTML = sum;
    } 
}
function plusF(e) {
    var btn = e.target;
    var temp = Number( getCookieValue(btn.name) );
    setCookie(btn.name,temp+1,'session');
    var no = document.getElementsByClassName('no '+btn.name)[0];
    console.log(no);
    no.innerHTML = temp+1;
    setCookie('cart',(Number(getCookieValue('cart'))+1),'session');
    var cartNo = document.getElementById("cartNum");
    cartNo.innerHTML = getCookieValue('cart');

    var total = document.getElementsByClassName('total '+btn.name)[0];
    total.innerHTML =parseInt(total.innerHTML)+ parseInt(prices[btn.name]) ;

    sum += parseInt(prices[btn.name]);
    var totalPrice = document.getElementById('totalPrice');
    totalPrice.innerHTML = sum;

}
function delF(e) {
    var btn = e.target;
    var temp = Number( getCookieValue(btn.name) );
    
    var no = getCookieValue(btn.name);
    var div = document.getElementsByClassName(btn.name)[0];
    console.log(div);
    cartBody.removeChild(div);
    setCookie('cart',(Number(getCookieValue('cart'))-temp),'session');
    deleteCookie(btn.name);
    var cartNo = document.getElementById("cartNum");
    cartNo.innerHTML = getCookieValue('cart');

    
    var totalPrice = document.getElementById('totalPrice');
    sum -= (no * prices[btn.name]);
    totalPrice.innerHTML = sum;

}

function submit() {
    if (getCookieValue('cart') == '0') {
        var msg = document.getElementById('msg');
        msg.style.display = 'block';
    } 
    else {
        var msg = document.getElementById('msg');
        msg.style.display = 'none';
        location.assign('./submit.html');
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

var cartBody = document.getElementById("details");
var prices={
    melon: 100,
    pumpkin: 110,
    sunflower: 80,
    pistachio: 250,
    cashew: 200,
    almonds: 150,
    walnut: 150,
    hazelnut: 170,
    chocolate: 30,
    cookies: 25,
    oreo: 20,
    lolipop: 5,
    water: 5,
    can: 10,
    juice: 7,
    milk: 12
}


var allCookies = document.cookie.split("; ");
var sum =0;
for (const iterator of allCookies) {
    var type = iterator.split("=")[0];
    if(type != 'cart' && type != 'loggedUser'){
        var div1 = document.createElement('div');
        div1.setAttribute('class','prodSummaryParts');
        var div2 = document.createElement('div');
        div2.setAttribute('class','prodSummaryParts');
        var div3 = document.createElement('div');
        div3.setAttribute('class','prodSummaryPart3');
        var divPrice = document.createElement('div');
        divPrice.setAttribute('class','prodSummaryParts');
        
        var div31 = document.createElement('div');
        var div32 = document.createElement('div');
        var div33 = document.createElement('div');
        var div34 = document.createElement('div');
        
        div31.setAttribute('class','minus');
        div32.setAttribute('class','no '+type);
        div33.setAttribute('class','plus');
        div34.setAttribute('class','del');
        var plus = document.createElement('button');
        plus.setAttribute('onclick','plusF(event)');
        plus.setAttribute('name',type);
        var minus = document.createElement('button');
        minus.setAttribute('onclick','minusF(event)');
        minus.setAttribute('name',type);
        var del = document.createElement('button');
        del.setAttribute('onclick','delF(event)');
        del.setAttribute('name',type);
        
        
        plus.innerHTML = ' + ';
        
        minus.innerHTML = ' - ';
        
        del.innerHTML = ' Delete ';
        var no = getCookieValue(type);
        div31.append(minus);
        div32.append(no);
        div33.append(plus);
        div34.append(del);
        
        
        var divTotal = document.createElement('div');
        divTotal.setAttribute('class','prodSummaryParts');
        var total = document.createElement('p');
        total.setAttribute('class','nameSummary');
        total.innerHTML = "Total = ";
        var totalNo = document.createElement('span');
        totalNo.setAttribute('class','total '+type);
        totalNo.innerHTML = (prices[type]*Number(getCookieValue(type)));
        sum += prices[type]*Number(getCookieValue(type));
        total.append(totalNo," EGP");
        divTotal.append(total);

        
        
        var div = document.createElement('div');
        div.setAttribute('class','prodSummary');
        div.append(div1,div2,divPrice,div3,divTotal);
        var image = document.createElement('img');
        image.setAttribute('class','imgSummary');
        image.setAttribute('src','../images/'+type+'.png');
        div1.append(image);
        
        var nam = document.createElement('p');
        nam.setAttribute('class','nameSummary');
        nam.innerHTML = type;

        var price = document.createElement('p');
        price.setAttribute('class','nameSummary');
        price.innerHTML = "Price = ";
        var priceNo = document.createElement('span');
        priceNo.setAttribute('id','priceNo');
        priceNo.innerHTML = prices[type]+" EGP";
        price.append(priceNo);
        var quantity = document.createElement('p');
        quantity.setAttribute('class','quantitySummary');
        quantity.innerHTML = "Quantity : ";
        div2.append(nam);
        div3.append(quantity,div31,div32,div33,div34);
        divPrice.append(price);
        
        
        var hr = document.createElement('hr');
        var final = document.createElement('div');
        final.setAttribute('class',type);
        final.append(div,hr);
        cartBody.append(final);  

    }
    
}
var totalPrice = document.getElementById('totalPrice');
totalPrice.append(sum);



