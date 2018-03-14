// style imports
import './scss/materialize.scss';
import './scss/fonts.scss';
import './scss/icons.scss';
import './scss/grid.scss';
import './scss/styles.scss';

// node_modules
import 'materialize-css';
import 'jquery-parallax.js';

// js imports
import './js/sendMail';

// jQuery on Document Ready Function
jQuery(function ($) {
    console.log('%c DOM Ready!!', 'font-weight: bold;');
    console.log('%c Hello Visitor! :)', 'color: green; font-weight: bold; font-size: 2em');

    const sidenav = M.Sidenav.init(document.querySelector('.sidenav'), { edge: 'right' });
    const scrollspy = M.ScrollSpy.init(document.querySelector('.scrollspy'));
    const tabs = M.Tabs.init(document.querySelector('.tabs'), { swipeable: false });
    // const materialbox = M.Materialbox.init(document.querySelector('.materialboxed'));

    $(window).on('load', function() {
        $('body').removeClass('loading');
    });
});