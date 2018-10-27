// style imports
import './scss/materialize.scss';
import './scss/fonts.scss';
import './scss/icons.scss';
import './scss/grid.scss';
import './scss/styles.scss';

// node_modules
import 'materialize-css';

// Swiper carousel
import Swiper from 'swiper/dist/js/swiper.min';
import 'swiper/dist/css/swiper.min.css';

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
});

window.addEventListener('load', function() {
    document.body.classList.remove('loading');
    
    const parallaxElems = document.querySelectorAll('.parallax');
    M.Parallax.init(parallaxElems);

    // Initialize Swiper gallery after styles are applied
    var gallerySwiper = new Swiper('.gallery-swiper', {
        slidesPerView: 3,
        spaceBetween: 20,
        centeredSlides: true,
        loop: true,
        observer: true,
        observeParents: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            600: {
                slidesPerView: 1.2,
                spaceBetween: 10,
            },
            992: {
                slidesPerView: 2.2,
                spaceBetween: 15,
            }
        }
    });
});
