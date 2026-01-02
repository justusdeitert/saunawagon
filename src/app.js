// style imports
import './scss/materialize.scss';
import './scss/fonts.scss';
import './scss/icons.scss';
import './scss/grid.scss';
import './scss/styles.scss';

// node_modules
import 'materialize-css';

// Splide carousel
import Splide from '@splidejs/splide';
import '@splidejs/splide/css';

// js imports
import './js/sendMail';

// DOM Ready Function
document.addEventListener('DOMContentLoaded', function() {
    console.log('%c DOM Ready!!', 'font-weight: bold;');
    console.log('%c Hello Visitor! :)', 'color: green; font-weight: bold; font-size: 2em');

    // Initialize Materialize components
    const modals = document.querySelectorAll('.modal');
    M.Modal.init(modals);

    const sidenavs = document.querySelectorAll('.sidenav');
    M.Sidenav.init(sidenavs, { edge: 'right' });

    const scrollspyElems = document.querySelectorAll('.scrollspy');
    M.ScrollSpy.init(scrollspyElems, { scrollOffset: 0 });

    const tabs = document.querySelectorAll('.tabs');
    M.Tabs.init(tabs, { swipeable: false });

    // Initialize Splide gallery
    const gallerySlider = document.querySelector('.gallery-splide');
    if (gallerySlider) {
        new Splide('.gallery-splide', {
            type: 'loop',
            perPage: 3,
            perMove: 1,
            gap: '20px',
            padding: { left: '5%', right: '5%' },
            focus: 'center',
            autoplay: true,
            interval: 5000,
            pauseOnHover: true,
            pauseOnFocus: true,
            breakpoints: {
                1200: {
                    perPage: 2,
                    padding: { left: '3%', right: '3%' },
                },
                768: {
                    perPage: 1,
                    padding: { left: '10%', right: '10%' },
                    gap: '15px',
                },
                480: {
                    padding: { left: '5%', right: '5%' },
                }
            }
        }).mount();
    }
});

window.addEventListener('load', function() {
    document.body.classList.remove('loading');
    
    const parallaxElems = document.querySelectorAll('.parallax');
    M.Parallax.init(parallaxElems);
});

