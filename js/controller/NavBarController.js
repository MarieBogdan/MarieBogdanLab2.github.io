import { trackScroll } from '../model/NavBarModel.js';
import { showNavbar, hideNavbar } from '../view/NavBarView.js';

export const NavBarController = {
    init: function() {
        trackScroll();
    },
    showNavbar: function() {
        showNavbar();
    },
    hideNavbar: function() {
        hideNavbar();
    }
};

window.NavBarController = NavBarController;
