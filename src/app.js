// style imports
import './scss/materialize.scss';
import './scss/fonts.scss';
import './scss/icons.scss';
import './scss/grid.scss';
import './scss/styles.scss';

// node_modules
import 'materialize-css';
// import 'jquery-parallax.js';

// js imports
import './js/sendMail';

// jQuery on Document Ready Function
jQuery(function ($) {
    console.log('%c DOM Ready!!', 'font-weight: bold;');
    console.log('%c Hello Visitor! :)', 'color: green; font-weight: bold; font-size: 2em');

    $('.modal').modal();
    $('.sidenav').sidenav({ edge: 'right' });
    $('.scrollspy').scrollSpy({ scrollOffset: 0});
    $('.tabs').tabs({ swipeable: false });
});

$(window).on('load', function() {
    $('body').removeClass('loading');
    $('.parallax').parallax();
});

