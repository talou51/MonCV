/* Theme Name:Selfme - Responsive Personal Portfolio Template
   Author: Themesdesign
   Version: 1.0.0
   File Description: Main JS file of the template
*/
! function($) {
    "use strict";

    var SelfMeApp = function() {};

    SelfMeApp.prototype.initStickyMenu = function() {
        $(window).scroll(function() {
            var scroll = $(window).scrollTop();

            if (scroll >= 50) {
                $(".sticky").addClass("nav-sticky");
            } else {
                $(".sticky").removeClass("nav-sticky");
            }
        });
    },

    SelfMeApp.prototype.initSmoothLink = function() {
        $('.navbar-nav a').on('click', function(event) {
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top - 0
            }, 1500, 'easeInOutExpo');
            event.preventDefault();
        });
    },

    SelfMeApp.prototype.initScrollspy = function() {
        $("#navbarCollapse").scrollspy({
            offset: 20
        });
    },

    SelfMeApp.prototype.initMagnificPopup = function() {
        $('.mfp-image').magnificPopup({
            type: 'image',
            closeOnContentClick: true,
            mainClass: 'mfp-fade',
            gallery: {
                enabled: true,
                navigateByImgClick: true,
                preload: [0, 1]
            }
        });
        $('.video-play-icon-trigger').magnificPopup({
            disableOn: 700,
            type: 'iframe',
            mainClass: 'mfp-fade',
            removalDelay: 160,
            preloader: false,
            fixedContentPos: false
        });
    },

    

    SelfMeApp.prototype.init = function() {
        this.initStickyMenu();
        this.initSmoothLink();
        this.initScrollspy();
        this.initMagnificPopup();
    },
    //init
    $.SelfMeApp = new SelfMeApp, $.SelfMeApp.Constructor = SelfMeApp
}(window.jQuery),

//initializing
function($) {
    "use strict";
    $.SelfMeApp.init();
}(window.jQuery);