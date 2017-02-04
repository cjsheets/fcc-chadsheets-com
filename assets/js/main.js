$(document).ready(function() {

  $.material.init();

  $('a[href*="#"]:not([href="#"])').click(function() { // Smooth Scrolling
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top - 30
        }, 1000);
        return false;
      }
    }
  });

  $('#navspy').affix({
      offset: {
        top: 0,
        bottom: $('footer').outerHeight(true) + 40
      }
  });

});