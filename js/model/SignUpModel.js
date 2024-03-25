export function nameVerify(name) {
    var nameGrammar = /^[a-zA-Z]+$/;
    return nameGrammar.test(name);
}

export function birthdayVerify(birthday) {
    var birthdayGrammar = /^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(19\d{2}|20\d{2})$/;
    return birthdayGrammar.test(birthday);
}

export function emailVerify(email) {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

export function passwordVerify(password) {
    var passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=]).{8,}$/;
    return passwordRegex.test(password);
}
