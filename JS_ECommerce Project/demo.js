var nameMsg = document.getElementById('msg1');
var emailMsg = document.getElementById('msg2');
var passMsg = document.getElementById('msg3');
var confMsg = document.getElementById('msg4');

function login(){
    var username = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var confirm = document.getElementById('confirm').value;
    
    var flag = true;
    console.log(username.length);
    console.log(isNaN(Number(username)) );
    console.log(username.length);


    if ( username == '' || !isNaN(Number(username)) || username.length < 3 ) {
        flag=false;
        nameMsg.style.display = 'block';
    } else{
        nameMsg.style.display = 'none';
    }

    var pattern = /^[a-zA-Z]{1}[a-zA-Z0-9]+[@][a-zA-Z0-9]+\.com$/
    if ( !pattern.test(email) ) {
        flag=false;
        emailMsg.style.display = 'block';
    } else{
        emailMsg.style.display = 'none';
    }

    var capital = /[A-z]/;
    var small = /[a-z]/;
    if ( password.length < 8 || !capital.test(password) || !small.test(password) ) {
        flag=false;
        passMsg.style.display = 'block';
    } else{
        passMsg.style.display = 'none';
    }

    if ( confirm != password || password == '') {
        flag=false;
        confMsg.style.display = 'block';
    } else{
        confMsg.style.display = 'none';
    }

    if (flag == true ) {
        location.assign("./home.html");
        document.cookie = "loggedUser="+username+";";
    }
    
    
}
   
