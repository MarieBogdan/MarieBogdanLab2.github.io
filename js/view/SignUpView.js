import { nameVerify, birthdayVerify, emailVerify, passwordVerify } from "../model/SignUpModel.js";

export function showNameError(message) {
    username.style.border = "1px solid red";
    document.getElementById('username_div').style.color = "red";
    name_error.textContent = message;
    username.focus();
}

export function hideNameError() {
    username.style.border = "1px solid #806491";
    document.getElementById('username_div').style.color = "#ffffff";
    name_error.innerHTML = "";
}

export function showBirthdayError(message) {
    birthday.style.border = "1px solid red";
    document.getElementById('birthday_div').style.color = "red";
    birthday_error.textContent = message;
    birthday.focus();
}

export function hideBirthdayError() {
    birthday.style.border = "1px solid #806491";
    document.getElementById('birthday_div').style.color = "#ffffff";
    birthday_error.innerHTML = "";
}

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

var username = document.forms['myForm']['Name'];
var birthday = document.forms['myForm']['Birthday']
var email = document.forms['myForm']['Email'];
var password = document.forms['myForm']['Password'];

var name_error = document.getElementById('name_error');
var birthday_error = document.getElementById('birthday_error');
var email_error = document.getElementById('email_error');
var password_error = document.getElementById('password_error');

username.addEventListener('blur', nameVerify, true);
birthday.addEventListener('blur', birthdayVerify, true);
email.addEventListener('blur', emailVerify, true);
password.addEventListener('blur', passwordVerify, true);

function handleKeyPress(event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        passwordVerify();
    }
}