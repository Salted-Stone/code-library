function resizeSlider(){
    var tallestSlide = 0;

    $('.upcoming-event').each(function(){
      if ( tallestSlide <= $(this).outerHeight() ){
        tallestSlide = $(this).outerHeight();
      }
    });

    if ( tallestSlide > 0) {
        $('#upcoming-slider .slidesjs-container').height(tallestSlide);
        $('#upcoming-slider .slidesjs-control').height(tallestSlide);
    }
}
$(document).ready(function(){
    $("#upcoming-slider").slidesjs({
        play: {
         active: true,
         effect: "fade",
         interval: 10000,
         auto: true,
         swap: false,
         pauseOnHover: false,
         restartDelay: 2500
       },
        navigation: { active: true, effect: "fade" },
        pagination: { active: true, effect: "fade" },
        callback: {
          loaded: function(number) { // Passes start slide number
              resizeSlider();
              checkForSingleSlide();
          },
          start: function(number) { // Passes slide number at start of animation
              resizeSlider();
          },
          complete: function(number) { // Passes slide number at end of animation
              resizeSlider();
          }
        }

    });

    $(window).resize(function(){
        resizeSlider();
    });
}); // end document ready
