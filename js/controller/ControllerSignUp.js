import { nameVerify, birthdayVerify, emailVerify, passwordVerify } from '../model/SignUpModel.js';
import { showNameError, hideNameError, showBirthdayError, hideBirthdayError, showEmailError, hideEmailError, showPasswordError, hidePasswordError } from '../view/SignUpView.js';

function handleSubmit(event) {
    event.preventDefault();

    var usernameValue = document.forms['myForm']['Name'].value;
    var birthdayValue = document.forms['myForm']['Birthday'].value;
    var emailValue = document.forms['myForm']['Email'].value;
    var passwordValue = document.forms['myForm']['Password'].value;

    if (usernameValue.trim() === '') {
        showNameError("Username is required");
        return;
    } else {
        hideNameError();
    }

    if (usernameValue.trim().length < 3) {
        showNameError("Username must be at least 3 characters");
        return;
    } else {
        hideNameError();
    }

    if (birthdayValue.trim() === '') {
        showBirthdayError("Birthday is required");
        return;
    } else {
        hideBirthdayError();
    }

    if (emailValue.trim() === '') {
        showEmailError("Email is required");
        return;
    } else {
        hideEmailError();
    }

    if (passwordValue.trim() === '') {
        showPasswordError("Password is required");
        return;
    } else {
        hidePasswordError();
    }

    if (!nameVerify(usernameValue)) {
        showNameError("Please enter a valid Username");
        return;
    } else {
        hideNameError();
    }

    if (!birthdayVerify(birthdayValue)) {
        showBirthdayError("Please enter a valid birthday in the format mm/dd/yyyy");
        return;
    } else {
        hidePasswordError();
    }
    if (!emailVerify(emailValue)) {
        showEmailError("Please enter a valid email address");
        return;
    } else {
        hideEmailError();
    }

    if (!passwordVerify(passwordValue)) {
        showPasswordError("Password must contain at least 8 characters, including one uppercase letter, one lowercase letter, one number, and one special character (@#$%^&+=)");
        return;
    } else {
        hidePasswordError();
    }
}

document.forms['myForm'].addEventListener('submit', handleSubmit);