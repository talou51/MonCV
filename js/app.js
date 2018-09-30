/*
Author: Themesdesign / Pascale Simonnet
Version: 1.0.0
File Description: Main JS file of the template
*/
!(function ($) {
  'use strict'

  var MonCV = function () {}

  MonCV.prototype.initStickyMenu = function () {
    $(window).scroll(function () {
      var scroll = $(window).scrollTop()

      if (scroll >= 50) {
        $('.sticky').addClass('nav-sticky')
      } else {
        $('.sticky').removeClass('nav-sticky')
      }
    })
  },

  MonCV.prototype.initSmoothLink = function () {
    $('.navbar-nav a').on('click', function (event) {
      var $anchor = $(this)
      $('html, body').stop().animate({
        scrollTop: $($anchor.attr('href')).offset().top - 0
      }, 1500, 'easeInOutExpo')
      event.preventDefault()
    })
  },

  MonCV.prototype.initScrollspy = function () {
    $('#navbarCollapse').scrollspy({
      offset: 20
    })
  },

  MonCV.prototype.initScrolldown = function () {
    $('a.scroll-down').on('click', function (event) {
      $('html, body').animate({
        scrollTop: $($(this).attr('href')).offset().top}, 500, 'linear')
      event.preventDefault()
    })
  },

    MonCV.prototype.initCounterUp = function () {
      var a = 0
      $(window).scroll(function () {
        var oTop = $('#counter').offset().top - window.innerHeight
        if (a == 0 && $(window).scrollTop() > oTop) {
          $('.counter-value').each(function () {
            var $this = $(this),
              countTo = $this.attr('data-count')
            $({
              countNum: $this.text()
            }).animate({
              countNum: countTo
            },

              {
                duration: 2000,
                easing: 'swing',
                step: function () {
                  $this.text(Math.floor(this.countNum))
                },
                complete: function () {
                  $this.text(this.countNum)
                // alert('finished');
                }

              })
          })
          a = 1
        }
      })
    },

    MonCV.prototype.initTimelineCollapse = function () {
      $(document).ready(function () {
        $('.see-more').click(function () {
          var $btnInfo = $(this)
          $btnInfo.toggleClass('collapsed')
          if ($btnInfo.hasClass('collapsed')) {
            $btnInfo.html('<i class="mdi mdi-plus"></i> d\'infos <i class="mdi mdi-chevron-down"></i>')
          } else {
            $btnInfo.html('<i class="mdi mdi-minus"></i> d\'infos <i class="mdi mdi-chevron-up"></i>')
          }
        })
      })
    },

    MonCV.prototype.initTooltip = function () {
      $(document).ready(function () {
        $('[data-toggle="tooltip"]').tooltip()
      })
    },

    MonCV.prototype.initTestimonial = function () {
      $('#testi').owlCarousel({
        items: 1,
        loop: true,
        margin: 20,
        navRewind: false,
        nav: false,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true
      })
    },

    MonCV.prototype.initActus = function () {
      $('#actus-carousel').owlCarousel({
        loop: true,
        margin: 20,
        lazyLoad: true,
        animateIn: true,
        navRewind: true,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        responsive: {
          0: {
            items: 1
          },
          600: {
            items: 3
          },
          1000: {
            items: 3
          }
        }
      })
    },

    MonCV.prototype.init = function () {
      this.initStickyMenu()
      this.initSmoothLink()
      this.initScrollspy()
      this.initScrolldown()
      this.initCounterUp()
      this.initTimelineCollapse()
      this.initTooltip()
      this.initTestimonial()
      this.initActus()
    },
    // init
    $.MonCV = new MonCV(), $.MonCV.Constructor = MonCV
}(window.jQuery)),

  // initializing
  (function ($) {
    'use strict'
    $.MonCV.init()
  }(window.jQuery))
