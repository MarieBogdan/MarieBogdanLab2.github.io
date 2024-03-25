export function trackScroll() {
    var prevScrollpos = window.pageYOffset;
    window.onscroll = function() {
        var currentScrollPos = window.pageYOffset;
        if (prevScrollpos > currentScrollPos) {
            window.NavBarController.showNavbar();
        } else {
            window.NavBarController.hideNavbar();
        }
        prevScrollpos = currentScrollPos;
    }
}
