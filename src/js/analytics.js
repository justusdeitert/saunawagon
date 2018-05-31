// Set to the same value as the web property used on the site
const gaProperty = 'UA-76171732-2',
      disableStr = 'ga-disable-' + gaProperty;

document.addEventListener('DOMContentLoaded', () => {

    function initAnalytics() {

        // Disable tracking if the opt-out cookie exists
        // <- must be set before any calls to the ga() command queue are made
        if (document.cookie.indexOf(disableStr + '=true') > -1) {
            window[disableStr] = true;
        }

        (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
            (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
            m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
        })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

        ga('create', gaProperty, 'auto');
        ga('send', 'pageview');
        ga('set', 'anonymizeIp', true);
    }

    if(cookieExists('_ga')) {
        initAnalytics();
        setOptOut();
    } else {
        let toastHTML = '<span>Diese Website benutzt Cookies. Wenn Sie diese Seite weiterhin nutzen, gehen wir von Ihrem Einverständnis aus. Weitere Informationen finden Sie unter Datenschutz unten auf der Seite.\n</span><button class="btn-flat toast-action confirm-cookies">Einverstanden</button>';

        M.toast({
            html: toastHTML,
            displayLength: 1000000,
            classes: 'cookie-notice'
        });

        $('.confirm-cookies').click(function() {
            let toastInstance = M.Toast.getInstance($('.cookie-notice'));
            toastInstance.dismiss();
            initAnalytics();
            setOptOut();
        });
    }

    function setOptOut() {
        // Get opt-out-in link element
        let link = document.getElementsByClassName('set-opt-out-cookie')[0];

        if (link) {
            init();
        }

        function init() {

            // disables google Analytics
            if (document.cookie.indexOf(disableStr + '=true') > -1) {
                window[disableStr] = true;
            }

            writeText();

            // Event listener for opt-out link click
            link.addEventListener('click', function () {
                (window[disableStr]) ? clearCookie() : writeCookie();
            });
        }

        // Set link text
        function writeText() {
            link.innerHTML = (window[disableStr]) ? 'Google Analytics aktivieren' : 'Google Analytics deaktivieren';
        }

        // Clear Cookie for Google Analytics Opt-in
        function clearCookie() {
            document.cookie = disableStr + '=; expires=Thu, 01 Jan 1970 00:00:00 UTC';
            window[disableStr] = undefined;
            writeText();
        }

        // Write Cookie for Google Analytics Opt-out
        function writeCookie() {
            document.cookie = disableStr + '=true; expires=Thu, 31 Dec 2099 23:59:59 UTC; path=/';
            window[disableStr] = true;
            writeText();
        }
    }
});

function getCookie(name) {
    let value = "; " + document.cookie,
        parts = value.split("; " + name + "=");

    if (parts.length === 2) {
        return parts.pop().split(";").shift();
    }
}

function cookieExists(name) {
    if (getCookie(name) == null) {
        //no cookie
        return false;
    } else {
        //have cookie
        return true;
    }
}