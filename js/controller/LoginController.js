import { emailVerify, passwordVerify } from '../model/LoginModel.js';
import { showEmailError, hideEmailError, showPasswordError, hidePasswordError } from '../view/LoginView.js';

function handleSubmit(event) {
    event.preventDefault();
    
    var emailValue = document.forms['myForm']['Email'].value;
    var passwordValue = document.forms['myForm']['Password'].value;

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
