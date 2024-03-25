import { emailVerify, passwordVerify } from "../model/LoginModel.js";

export function showEmailError(message) {
    email.style.border = "1px solid red";
    document.getElementById('email_div').style.color = "red";
    email_error.textContent = message;
    email.focus();
}

export function hideEmailError() {
    email.style.border = "1px solid #806491";
    document.getElementById('email_div').style.color = "#ffffff";
    email_error.innerHTML = "";
}

export function showPasswordError(message) {
    password.style.border = "1px solid red";
    document.getElementById('password_div').style.color = "red";
    password_error.textContent = message;
    password.focus();
}

export function hidePasswordError() {
    password.style.border = "1px solid #806491";
    document.getElementById('password_div').style.color = "#ffffff";
    password_error.innerHTML = "";
}

var email = document.forms['myForm']['Email'];
var password = document.forms['myForm']['Password'];

var email_error = document.getElementById('email_error');
var password_error = document.getElementById('password_error');

email.addEventListener('blur', emailVerify, true);
password.addEventListener('blur', passwordVerify, true);


