const pass2 = document.querySelector('#pwd2');

pass2.addEventListener('input', check);

function check(e) {
    const pass1 = document.querySelector('#pwd1');
    if(pass1.value != this.value) {
        error();
    } else {
        good();
    }
}

function error() {
    const pass1 = document.querySelector('#pwd1');
    const pass2 = document.querySelector('#pwd2');
    pass1.style.border = "1px solid red";
    pass2.style.border = "1px solid red";

    const button = document.querySelector('button');
    button.disabled = true;
    
    const errorHolder = document.querySelector('.error');
    let errorMsgCheck = document.querySelector('.errorMsg');
    
    if (errorMsgCheck != null) {
        errorHolder.removeChild(errorMsgCheck);
    }
    
    const errorMsg = document.createElement('span');
    errorMsg.textContent = "* Passwords don't match";
    errorMsg.style.color = "red";
    errorMsg.style.textAlign = "Center";
    errorMsg.style.fontSize = "10px";
    errorMsg.className = "errorMsg";
    errorHolder.appendChild(errorMsg);
    
    return;
}

function good() {
    const pass1 = document.querySelector('#pwd1');
    const pass2 = document.querySelector('#pwd2');
    const errorMsg = document.querySelector('.errorMsg');
    pass1.style.border = "1px solid green";
    pass2.style.border = "1px solid green";
    const errorHolder = document.querySelector('.error');
    errorHolder.removeChild(errorMsg);
    const button = document.querySelector('button');
    button.disabled = false;
    return;
}