(function ($) {
  "use strict";

  $(document).ready(function () {
    console.log("main.js loaded ✅");

    // =====================================
    // 🧠 React Environment Guard
    // =====================================
    if (document.body.classList.contains("react-app")) {
      console.log("React App detected — skipping legacy jQuery Swiper & WOW init");
      
      // ✅ Keep essential UI features that work fine inside React

      // >>> Mobile Menu <<<
      $('#mobile-menu').meanmenu({
        meanMenuContainer: '.mobile-menu',
        meanScreenWidth: "1199",
        meanExpand: ['<i class="far fa-plus"></i>'],
      });

      // >>> Sidebar Toggle <<<
      $(".offcanvas__close,.offcanvas__overlay").on("click", function () {
        $(".offcanvas__info").removeClass("info-open");
        $(".offcanvas__overlay").removeClass("overlay-open");
      });
      $(".sidebar__toggle").on("click", function () {
        $(".offcanvas__info").addClass("info-open");
        $(".offcanvas__overlay").addClass("overlay-open");
      });

      // >>> Sticky Header <<<
      $(window).scroll(function () {
        if ($(this).scrollTop() > 250) {
          $("#header-sticky").addClass("sticky");
        } else {
          $("#header-sticky").removeClass("sticky");
        }
      });

      // >>> Mouse Cursor <<<
      function mousecursor() {
        if ($("body")) {
          const e = document.querySelector(".cursor-inner"),
            t = document.querySelector(".cursor-outer");
          let n, i = 0, o = !1;
          (window.onmousemove = function (s) {
            o || (t.style.transform = "translate(" + s.clientX + "px, " + s.clientY + "px)");
            e.style.transform = "translate(" + s.clientX + "px, " + s.clientY + "px)";
            n = s.clientY;
            i = s.clientX;
          });
          $("body").on("mouseenter", "a, .cursor-pointer", function () {
            e.classList.add("cursor-hover");
            t.classList.add("cursor-hover");
          });
          $("body").on("mouseleave", "a, .cursor-pointer", function () {
            if (!($(this).is("a") && $(this).closest(".cursor-pointer").length)) {
              e.classList.remove("cursor-hover");
              t.classList.remove("cursor-hover");
            }
          });
          e.style.visibility = "visible";
          t.style.visibility = "visible";
        }
      }
      mousecursor();

      // >>> Back To Top Button <<<
      $(window).on('scroll', function () {
        if ($(this).scrollTop() > 20) {
          $("#back-top").addClass("show");
        } else {
          $("#back-top").removeClass("show");
        }
      });
      $(document).on('click', '#back-top', function () {
        $('html, body').animate({ scrollTop: 0 }, 800);
        return false;
      });

      // >>> Typewriter Animation <<<
      const words = [" Trading Platforms", "CRM Solutions", "⁠AI Automation", "Digital Solutions"];
      let index = 0, letterIndex = 0, currentWord = words[0], interval;
      function typeWriter() {
        const word = words[index];
        if (letterIndex < word.length) {
          $("#typing-text").text($("#typing-text").text() + word.charAt(letterIndex));
          letterIndex++;
        } else {
          clearInterval(interval);
          interval = setInterval(eraseText, 150);
        }
      }
      function eraseText() {
        if (letterIndex >= 0) {
          const text = currentWord.substring(0, letterIndex);
          $("#typing-text").text(text);
          letterIndex--;
        } else {
          clearInterval(interval);
          index = (index + 1) % words.length;
          currentWord = words[index];
          interval = setInterval(typeWriter, 150);
        }
      }
      interval = setInterval(typeWriter, 150);

      // >>> Loader <<<
      $(window).on("load", function () {
        $(".preloader").addClass("loaded");
        $(".preloader").delay(600).fadeOut();
      });

      // ✅ Exit early: skip all the jQuery Swiper & WOW initialization below
      return;
    }

    // =====================================
    // 🧱 Legacy HTML (Non-React) Environment
    // =====================================

    //>> Mobile Menu Js Start <<//
    $('#mobile-menu').meanmenu({
      meanMenuContainer: '.mobile-menu',
      meanScreenWidth: "1199",
      meanExpand: ['<i class="far fa-plus"></i>'],
    });

    $('#mobile-menus').meanmenu({
      meanMenuContainer: '.mobile-menus',
      meanScreenWidth: "1920",
      meanExpand: ['<i class="far fa-plus"></i>'],
    });

    //>> Sidebar Toggle Js Start <<//
    $(".offcanvas__close,.offcanvas__overlay").on("click", function () {
      $(".offcanvas__info").removeClass("info-open");
      $(".offcanvas__overlay").removeClass("overlay-open");
    });
    $(".sidebar__toggle").on("click", function () {
      $(".offcanvas__info").addClass("info-open");
      $(".offcanvas__overlay").addClass("overlay-open");
    });

    //>> Sticky Header Js Start <<//
    $(window).scroll(function () {
      if ($(this).scrollTop() > 250) {
        $("#header-sticky").addClass("sticky");
      } else {
        $("#header-sticky").removeClass("sticky");
      }
    });

    //>> Video Popup Start <<//
    $(".img-popup").magnificPopup({
      type: "image",
      gallery: { enabled: true },
    });
    $('.video-popup').magnificPopup({ type: 'iframe' });

    //>> Counterup Start <<//
    $(".count").counterUp({ delay: 15, time: 4000 });

    //>> Wow Animation Start <<//
    new WOW().init();

    //>> Nice Select Start <<//
    $('select').niceSelect();

    //>> Brand-slider, Testimonials, Project Swipers
    // These are only for non-React pages
    if ($('.brand-slider').length > 0) {
      const brandSlider = new Swiper(".brand-slider", {
        spaceBetween: 30,
        speed: 2000,
        loop: true,
        autoplay: { delay: 1000, disableOnInteraction: false },
        breakpoints: { 1199: { slidesPerView: 5 }, 767: { slidesPerView: 3 } },
      });
    }

    if ($('.testimonial-slider').length > 0) {
      const testimonialSlider = new Swiper(".testimonial-slider", {
        spaceBetween: 30,
        speed: 2000,
        loop: true,
        effect: "cards",
        grabCursor: true,
        autoplay: { delay: 1000, disableOnInteraction: false },
      });
    }

    if ($('.project-slider').length > 0) {
      const projectSlider = new Swiper(".project-slider", {
        spaceBetween: 30,
        speed: 800,
        loop: true,
        autoplay: { delay: 4000, disableOnInteraction: false },
      });
    }

    //>> Mouse Cursor Start <<//
    function mousecursor() {
      if ($("body")) {
        const e = document.querySelector(".cursor-inner"),
          t = document.querySelector(".cursor-outer");
        let n, i = 0, o = !1;
        (window.onmousemove = function (s) {
          o || (t.style.transform = "translate(" + s.clientX + "px, " + s.clientY + "px)");
          e.style.transform = "translate(" + s.clientX + "px, " + s.clientY + "px)";
          n = s.clientY;
          i = s.clientX;
        });
        $("body").on("mouseenter", "a, .cursor-pointer", function () {
          e.classList.add("cursor-hover");
          t.classList.add("cursor-hover");
        });
        $("body").on("mouseleave", "a, .cursor-pointer", function () {
          if (!($(this).is("a") && $(this).closest(".cursor-pointer").length)) {
            e.classList.remove("cursor-hover");
            t.classList.remove("cursor-hover");
          }
        });
        e.style.visibility = "visible";
        t.style.visibility = "visible";
      }
    }
    mousecursor();

    //>> Back To Top <<//
    $(window).on('scroll', function () {
      if ($(this).scrollTop() > 20) $("#back-top").addClass("show");
      else $("#back-top").removeClass("show");
    });
    $(document).on('click', '#back-top', function () {
      $('html, body').animate({ scrollTop: 0 }, 800);
      return false;
    });
  }); // End Document Ready

  // Loader
  $(window).on("load", function () {
    $(".preloader").addClass("loaded");
    $(".preloader").delay(600).fadeOut();
  });
})(jQuery);
