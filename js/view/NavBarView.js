export function showNavbar() {
    var navbar = document.getElementById("navbar");
    if (navbar) {
        navbar.style.top = "0";
    }
}

export function hideNavbar() {
    var navbar = document.getElementById("navbar");
    if (navbar) {
        navbar.style.top = "-70px";
    }
}
