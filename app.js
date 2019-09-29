jQuery(document).ready(function() {

  "use strict"
  $('.slider').ripples({
    dropRadius: 20,
    perturbance: 0.05,
  });

  $(".text").typed({
    strings: ["<strong>Lorem Ipsum is </strong><strong class='primary'> simply.</strong>", "<strong> dummy</strong><strong class='primary'>  text of the printing</strong>", " and typesetting <strong class='primary'> industry.</strong>"],
    typespeed: 0,
    loop: true

  });

  $(window).scroll(function() {
    if ($(document).scrollTop() > 60) {
      $('nav').addClass('change');
    } else {
      $('nav').removeClass('change');
    }
  });


  $('.work').magnificPopup({
    delegate: 'a', // child items selector, by clicking on it popup will open
    type: 'image',
    gallery: {
      enabled: true
    }
  });

  $("#team-members").owlCarousel({
    items: 3,
    autoplay: true,
    smartSpeed: 700,
    loop: true,
    autoplayHoverPause: true,
    responsive: {
      0: {

        items: 1
      },
      480: {

        items: 2
      },

      768: {

        items: 3
      }
    }
  });

  $('.counter').counterUp({
    delay: 10,
    time: 3000
  });

  $("a.smooth-scroll").click(function(event) {

    event.preventDefault();

    var section = $(this).attr("href");

    $('html, body').animate({
      scrollTop: $(section).offset().top - -2
    }, 1250, "easeInOutExpo");
  });

  new WOW().init();
});
